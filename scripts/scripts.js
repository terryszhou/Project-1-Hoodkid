console.log("ey yo")

let hoodKid = document.getElementById("hoodkid")
console.log(hoodKid)

let positionX = null
let positionY = null

document.onkeydown = checkKey

function checkKey(e) {
    e = e || window.event
    console.log(event.keyCode)

    if (e.keyCode == 37) {
        moveLeft()
        console.log("left arrow works")
    } else if (e.keyCode == 38) {
        moveUp()
        console.log("up arrow works")
    } else if (e.keyCode == 39) {
        moveRight()
        console.log("right arrow works")
    } else if (e.keyCode == 40) {
        moveDown()
        console.log("down arrow works")
    } else if (e.keyCode == 32) {
        console.log("spacebar works")
    }
}

function moveRight() {
    positionX = positionX + 5
    hoodKid.style.transform = "translateX(" + positionX + "px)"
}

function moveLeft() {
    positionX = positionX + -5
    hoodKid.style.transform = "translateX(" + positionX + "px)"
}

function moveUp() {
    positionY = positionY + -5
    hoodKid.style.transform = "translateY(" + positionY + "px)"
}

function moveDown() {
    positionY = positionY + 5
    hoodKid.style.transform = "translateY(" + positionY + "px)"
}



// class HoodKid {
//     // static Position on the screen?
//     // static Health?
//     static positionX = 0
//     static positionY = 0
//     static hoodKid = document.getElementById("hoodkid")
//     document.onkeydown = checkKey

//     constructor(name) {
//         this.name = name
//     }

//     checkKey(e) {
//         e = e || window.event
//         console.log(event.keyCode)
    
//         if (e.keyCode == 37) {
//             moveLeft()
//             console.log("left arrow works")
//         } else if (e.keyCode == 38) {
//             moveUp()
//             console.log("up arrow works")
//         } else if (e.keyCode == 39) {
//             moveRight()
//             console.log("right arrow works")
//         } else if (e.keyCode == 40) {
//             moveDown()
//             console.log("down arrow works")
//         } else if (e.keyCode == 32) {
//             console.log("spacebar works")
//         }
//     }

//     //functions for movement, attacking, taking damage, dying
    
//     moveRight() {
//         positionX = positionX + 5
//         hoodKid.style.transform = "translateX(" + positionX + "px)"
//     }
    
//     moveLeft() {
//         positionX = positionX + -5
//         hoodKid.style.transform = "translateX(" + positionX + "px)"
//     }
    
//     moveUp() {
//         positionY = positionY + -5
//         hoodKid.style.transform = "translateY(" + positionY + "px)"
//     }
    
//     moveDown() {
//         positionY = positionY + 5
//         hoodKid.style.transform = "translateY(" + positionY + "px)"
//     }
// }

