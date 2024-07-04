const imgContainer = document.querySelector(".home .container"),
imgBox = document.querySelector(".home .img-clicked"),
img = document.querySelector(".home .img-clicked img"),
close = document.querySelector(".home .img-clicked span");
// Fetch Data Img From Json File and Handel Click
const handelImg = (src) => {
    imgBox.classList.add("active")
    img.src = src;
}
close.addEventListener("click" , () => {
    imgBox.classList.remove("active");
})
fetch("../data/db.json").then( result => result.json())
.then( data => {
    let cardImg = '';
    data.forEach( img => {
        cardImg += `
        <div class="card">
        <img src=${img.src} alt="img"/>
        </div>
        `
    })
    imgContainer.innerHTML = cardImg;
    document.querySelectorAll(".home .container img").forEach( e => {
        e.onclick = function () {
            handelImg(this.src)
        }
    })
})