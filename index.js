let id = 1
let img = document.getElementById("img")
let main = document.querySelector(".main")
img.src = `images/img${id}.jpg`;

const prevFunc = () => {
    id <= 1 ? id = 6 : id--
    img.src = `images/img${id}.jpg`;
}

const nextFunc = () => {
    id >= 6 ? id = 1 : id++
    img.src = `images/img${id}.jpg`;
}

// write style inside javaScript
img.style.width = "90%"
img.style.height = "600px"

main.style.display = "flex"
main.style.justifyContent ="center"
