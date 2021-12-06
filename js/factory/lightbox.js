'use strict';

export default class lightBox {
    ouverture(element) {
        let gallerieImages = document.querySelectorAll(".gallerie_img");
        let getLatestOpenedImg;
        let windowWidth = window.innerWidth;

        if(gallerieImages) {
            gallerieImages.forEach(function(image, index) {
                image.onclick = function() {
                    let getFullImgUrl = image.src;
                    let getImgUrlPos = getFullImgUrl.split("/public/img/");
                    let setNewImgUrl = getImgUrlPos[1].replace('"), ');
                    
                    getLatestOpenedImg = index + 1;

                    let container = document.body;
                    let newImgWindow = document.createElement("div");
                    container.appendChild(newImgWindow);
                    newImgWindow.classList.add("img-window");
                    newImgWindow.addEventListener("click", function (click) {
                        document.querySelector(".img-window").remove(); 
                    })

                    let newImg = document.createElement("img");
                    newImgWindow.appendChild(newImg);
                    newImg.setAttribute("src", "public/img/" + setNewImgUrl)

                    let newPrevBtn
                }
            });
        }
        
    }
    
}

