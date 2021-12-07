'use strict';

export default class lightBox {
    ouverture(element) {
        let gallerieImages = document.querySelectorAll(".gallerie_img");
        let getLatestOpenedImg;
        let windowWidth = window.innerWidth;
        let imgArray = []
        imgArray.push(gallerieImages);

        if(gallerieImages) {
            gallerieImages.forEach(function(image, index) {
                image.onclick = function() {
                    console.log(imgArray);
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
                        document.querySelector(".img-btn-prev").remove();
                        document.querySelector(".img-btn-next").remove();
                    })

                    let newImg = document.createElement("img");
                    newImgWindow.appendChild(newImg);
                    newImg.setAttribute("src", "public/img/" + setNewImgUrl);
                    newImg.setAttribute("id", "current-img");
                    console.log(setNewImgUrl);

                    newImg.onload = function() {
                        let imgWidth = this.width;
                        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

                        let newPrevBtn = document.createElement("a");
                        container.appendChild(newPrevBtn);
                        newPrevBtn.classList.add("img-btn-prev", "fas", "fa-chevron-left");
                        newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px";
                        newPrevBtn.addEventListener("click", function (click) {
                            document.querySelector("#current-img").remove();

                            let getImgWindow = document.querySelector(".img-window");
                            let newImg = document.createElement("img");
                            getImgWindow.appendChild(newImg);

                            let calcNewImg;
                                calcNewImg = getLatestOpenedImg - 1;
                                if(calcNewImg < 1) {
                                    calcNewImg = gallerieImages.length;
                                }
                                
                            newImg.setAttribute("src", "img");
                            newImg.setAttribute("id", "current-img");
    
                            getLatestOpenedImg = calcNewImg;
                        })

                        let newNextBtn = document.createElement("a");
                        container.appendChild(newNextBtn);
                        newNextBtn.classList.add("img-btn-next", "fas", "fa-chevron-right");
                        newNextBtn.style.cssText = "right: " + calcImgToEdge + "px";
                        newNextBtn.addEventListener("click", function (click) {
                            document.querySelector("#current-img").remove();

                            let getImgWindow = document.querySelector(".img-window");
                            let newImg = document.createElement("img");
                            getImgWindow.appendChild(newImg);

                            let calcNewImg;
                            calcNewImg = getLatestOpenedImg + 1;
                            if(calcNewImg > gallerieImages.length) {
                                calcNewImg = 1;
                            }
                            
                        //newImg.setAttribute("src", );
                        //newImg.setAttribute("id", "current-img");

                        //getLatestOpenedImg = calcNewImg;
                        })
                    }               
                }
            });
        }
        
    }
    
}


    


