import platform from '../img/iceplatform.png'
import whiteforest from '../img/whiteforestbig.png'
console.log(platform)


const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

//full size
//canvas.width = innerWidth
//canvas.height = innerHeight

canvas.width = 1200
canvas.height = 675

const gravity = 0.6

class Player {
    constructor() {
        this.speed = 6
        this.position = {
            x: 100,
            y: 100
        }

        this.velocity = {
            x: 0,
            y: 1
        }

        this.width = 30
        this.height = 30
    }

    draw(){
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        
        if (this.position.y + this.height + this.velocity.y <= canvas.height)
        this.velocity.y += gravity
        else this.velocity.y = 0
        
    }
}

class Platform {
    constructor({x,y, image}) {
        this.position = {
            x: x,
            y: y,
            image: ''
        }

        this.image = image
        this.width = this.image.width
        this.height = this.image.height
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
        //c.fillStyle = 'green'
        //c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

class GenericObject {
  constructor({x,y, image}) {
      this.position = {
          x: x,
          y: y,
          image: ''
      }

      this.image = image
      this.width = this.image.width
      this.height = this.image.height
  }

  draw() {
      c.drawImage(this.image, this.position.x, this.position.y)
      //c.fillStyle = 'green'
      //c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}

function createImage(imageSrc) {
  const image = new Image()
  image.src = imageSrc
  return image
}

const platformImage = createImage(platform)

const player = new Player()
const platforms = [new Platform({x:0, y:canvas.height - platformImage.height, image: platformImage}),
                    new Platform({x: 350, y:canvas.height - 250, image: platformImage}),
                    new Platform({x: 1000, y:canvas.height - 450, image: platformImage}),
                    new Platform({x: 1550, y:canvas.height - 250, image: platformImage}),
                    new Platform({x: 2000, y:canvas.height - 450, image: platformImage}),
                    new Platform({x: 2250, y:canvas.height - 250, image: platformImage}),
                    new Platform({x: 2480, y:canvas.height - 450, image: platformImage}),
                    new Platform({x: 3000+platformImage.width, y:canvas.height - 100, image: platformImage}),
                    new Platform({x: 3000+platformImage.width*2, y:canvas.height - 100, image: platformImage}),
                    new Platform({x: 3000+platformImage.width*3, y:canvas.height - 100, image: platformImage}),
                    new Platform({x: 3450+platformImage.width*3, y:canvas.height - 450, image: platformImage}),
                ]

const backgroundImage = createImage(whiteforest)

const genericObjects = [ 
  new GenericObject ({
    x:0, y:0, image: backgroundImage
  }),
  new GenericObject ({
    x:backgroundImage.width -2, y: 0, image: backgroundImage
  }),
  new GenericObject ({
    x:backgroundImage.width*2 -2, y: 0, image: backgroundImage
  })
]


const keys = {
    right:{
        pressed: false
    },
    left:{
        pressed: false
    },
    jump:{
        pressed:false
    }
}

let myGamepad
var counter
let scrollOffset = 0

//MAIN ANIMATION LOOP
function animate(){
    requestAnimationFrame(animate)
    c.fillStyle = 'White'
    c.fillRect(0, 0, canvas.width, canvas.height)

    genericObjects.forEach(genericObject => {
      genericObject.draw()
    })
    
    platforms.forEach(platform => {
        platform.draw()
    })
    
    player.update()
    
    //myGamepad = navigator.getGamepads()[0]; // use the first gamepad (xbox-only)
    
    //keyboard nav
    if (keys.right.pressed && player.position.x < 500) {
        console.log('move right')
        player.velocity.x = player.speed
    } else if(keys.left.pressed && player.position.x > 100) {
        console.log("move left")
        player.velocity.x = -player.speed
    } else {
        player.velocity.x = 0

        if(keys.right.pressed){
            
            platforms.forEach(platform => {
                platform.position.x -= player.speed
                scrollOffset += player.speed
            })
            genericObjects.forEach(genericObject => {
              genericObject.position.x -= player.speed * .66
              scrollOffset += player.speed * .66
          })
        }else if (keys.left.pressed){
            
            platforms.forEach(platform => {
                platform.position.x += player.speed
                scrollOffset -= player.speed
            })
            genericObjects.forEach(genericObject => {
              genericObject.position.x -= player.speed * .66
              scrollOffset += player.speed * .66
          })
        }

    }

    // way of winning
    // if(scrollOffset > 3000){
    //     player.velocity.x = 0
    //     console.log("you win")
    // }

    

    //Game pad code
    // if (  && player.position.x < 500) {
    //     console.log('move right')
    //     player.velocity.x = 5
    // } else if(myGamepad.axes[0] <= -.8 && player.position.x > 100) {
    //     player.velocity.x = -5
    // } else {
    //     player.velocity.x = 0

                // if(myGamepad.axes[0] > .8){
                        
                //     platforms.forEach(platform => {
                //         platform.position.x -= 5
                //     })
                // }else if (myGamepad.axes[0] <= -.8){
                    
                //     platforms.forEach(platform => {
                //         platform.position.x += 5
                //     })
                // }
    // }

    //gamepad jump function
    // if (myGamepad.buttons[0].pressed){
    //     console.log("jump")
    //     console.log(myGamepad.buttons[0].pressed)
    //         player.velocity.y = -15
    // }else{
    //     console.log("do you get here")
    //     myGamepad.buttons[0].pressed = false
    // }

    //tracking collion on platform
    platforms.forEach(platform => {
        if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width){
            player.velocity.y = 0
        }
    })

    console.log("animation loop running")
}

animate()

addEventListener('keydown', ({keyCode}) => {
    //console.log(keyCode)
    switch (keyCode) {
        case 65:
            console.log(" pressing left button")
            keys.left.pressed = true
            break
        case 83:
            console.log("down")
            player.velocity.y = 0
            break
        case 68:
            console.log("right")
            keys.right.pressed = true
            break
        case 87:
            console.log("up")
            player.velocity.y -= 25
            break
    }
})

addEventListener('keyup', ({keyCode}) => {
    //console.log(keyCode)
    switch (keyCode) {
        case 65:
            console.log("left")
            keys.left.pressed = false
            break
        case 83:
            console.log("down")
            player.velocity.y = 0
            break
        case 68:
            console.log("right")
            keys.right.pressed = false
            break
        case 87:
            console.log("up")
            player.velocity.y = 0
            break
    }
})

