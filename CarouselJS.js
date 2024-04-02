let carouselImg = document.querySelector("#carousel-img1");
let forwardBtn = document.querySelector("#forward-btn")
let backwardBtn = document.querySelector("#backward-btn")
let cuurentImageIndex = document.querySelector("#current-image-index")
let imageDescription = document.querySelector("#image-description")

let url_header = (location.href).replace("index.html", "");

let img1 = carouselImg.src;
let img2 = url_header + "media/landscape2.png";
let img3 = url_header + "media/landscape3.png";
let img4 = url_header + "media/landscape4.png";
let img5 = url_header + "media/landscape5.png";

let num = 0;
let images = 6;

forwardBtn.addEventListener("click", ()=>{
    num = num + 1;

    console.log(num)
    if (num < images) {
        carouselImg.src = url_header + "media/landscape" + num + ".png"
        cuurentImageIndex.innerHTML = num
        if (num == 1){
            imageDescription.innerHTML = "Georgia O'Keeffe, Ghost Ranch Landscape (detail), c. 1936. Part of <a href='#'>Georgia O'Keeffe Museum</a> "
        } if (num == 2) {
            imageDescription.innerHTML = "Elizabeth Catlett, Roots (detail), 1981. Part of <a href='#'>Amistad Research Center.</a> Art © Estate of Elizabeth Catlett / Licensed by VAGA, New York, NY."
        } if (num == 3) {
            imageDescription.innerHTML = "Egyptian, winged scarab, 664-525 BC. Repository: Ägyptisches Museum und Papyrussammlung, Staatliche Museen zu Berlin. Part of <a href='#'>Berlin State Museums (Staatliche Museen zu Berlin).</a>"
        } if (num == 4) {
            imageDescription.innerHTML = "Johannes van Keulen, Pas-caert van de Canael… (detail), 1682. Part of <a href='#'>World and Regional Maps.</a>"
        } if (num == 5) {
            imageDescription.innerHTML = "Frank Cancian, School classroom [A] (detail), 1971. Part of <a href='#'> Frank Cancian Documentary Photograph Archive.</a>"
        }
    } else {
        num = 0
    }

})

backwardBtn.addEventListener("click", ()=>{
    num = num - 1;

    console.log(num)
    if (num == 0) {
        num = 6
    } else{
        carouselImg.src = url_header + "media/landscape" + num + ".png"
        cuurentImageIndex.innerHTML = num
        
        // start here
        if (num == 1){
            imageDescription.innerHTML = "Georgia O'Keeffe, Ghost Ranch Landscape (detail), c. 1936. Part of <a href='#'>Georgia O'Keeffe Museum</a> "
        } if (num == 2) {
            imageDescription.innerHTML = "Elizabeth Catlett, Roots (detail), 1981. Part of <a href='#'>Amistad Research Center.</a> Art © Estate of Elizabeth Catlett / Licensed by VAGA, New York, NY."
        } if (num == 3) {
            imageDescription.innerHTML = "Egyptian, winged scarab, 664-525 BC. Repository: Ägyptisches Museum und Papyrussammlung, Staatliche Museen zu Berlin. Part of <a href='#'>Berlin State Museums (Staatliche Museen zu Berlin).</a>"
        } if (num == 4) {
            imageDescription.innerHTML = "Johannes van Keulen, Pas-caert van de Canael… (detail), 1682. Part of <a href='#'>World and Regional Maps.</a>"
        } if (num == 5) {
            imageDescription.innerHTML = "Frank Cancian, School classroom [A] (detail), 1971. Part of <a href='#'> Frank Cancian Documentary Photograph Archive.</a>"
        }
        // end here
    }

})

// Image Slider or Carousel