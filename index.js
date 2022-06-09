let id = 1
let img = document.getElementById("img")
let title = document.querySelector("h1")
let main = document.querySelector(".main")
let prevButton = document.querySelector(".main > #prev")
let nextButton = document.querySelector(".main > #next")
img.src = `images/img${id}.jpg`;

// for style
let titleStyle = title.style
let imgStyle = img.style
let mainStyle = main.style
let prevButtonStyle = prevButton.style
let nextButtonStyle = nextButton.style

// prev and next functions work change current id
const prevFunc = () => {
    id <= 1 ? id = 6 : id--
    img.src = `images/img${id}.jpg`;
}

const nextFunc = () => {
    id >= 6 ? id = 1 : id++
    img.src = `images/img${id}.jpg`;
}

// write style inside javaScript
titleStyle.textAlign= "center"

imgStyle.width = "80%"
imgStyle.height = "600px"

mainStyle.display = "flex"
mainStyle.justifyContent ="center"
mainStyle.alignItems ="center"

const addButtonStyle = (btn) =>{
    btn.width = "50px"
    btn.height = "50px"
    btn.borderRadius = "30px"
    btn.border = "none"
    btn.margin = "10px"
    btn.cursor = "pointer";
}

addButtonStyle(prevButtonStyle)
addButtonStyle(nextButtonStyle)
