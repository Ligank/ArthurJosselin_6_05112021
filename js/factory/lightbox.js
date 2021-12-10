'use strict';

export default class lightBox {
    ouverture(element) {
        let gallerieImages = document.querySelectorAll(".gallerie_img");
        let getLatestOpenedImg;
        let windowWidth = window.innerWidth;
        let imgArray = []
        for (let i = 0; i < gallerieImages.length; ++i) {
            imgArray.push(gallerieImages[i]);
          }

        document.querySelector(".filtre_titre").addEventListener('click', function() {          
            imgArray.sort(function(a, b) {
                return a.dataset.title.localeCompare(b.dataset.title);
            });
        });
        document.querySelector(".filtre_date").addEventListener('click', function() {          
            imgArray.sort(function(a, b) {
                return a.dataset.date.localeCompare(b.dataset.date);
            });
        });
        document.querySelector(".filtre_populaire").addEventListener('click', function() {
            imgArray.sort(function(a, b) {
                return b.dataset.likes-a.dataset.likes;
            });
        });


        if(imgArray) {
            imgArray.forEach(function(image) {
                image.onclick = function() {
                    let getFullImgUrl = image.src;              
                    getLatestOpenedImg = imgArray.indexOf(image, 0) + 1;

                    let container = document.body;
                    let newImgWindow = document.createElement("div");
                    container.appendChild(newImgWindow);
                    newImgWindow.classList.add("img-window");
                    let close = document.createElement("a");
                    close.classList.add("close-lightbox-icon", "fas", "fa-times");
                    container.appendChild(close);
                    close.addEventListener("click", function (click) {
                        document.querySelector(".img-window").remove();
                        document.querySelector(".img-btn-prev").remove();
                        document.querySelector(".img-btn-next").remove();
                        document.querySelector(".close-lightbox-icon").remove();
                    })

                    let newImg;
                    if (image.classList.contains("video")) {
                        newImg = document.createElement("video");
                        newImgWindow.appendChild(newImg);
                        newImg.setAttribute("src", getFullImgUrl);
                        newImg.setAttribute("controls", "");
                        newImg.setAttribute("id", "current-img");
                        newImg.setAttribute("class", "video-large");
                    } else {
                        newImg = document.createElement("img");
                        newImgWindow.appendChild(newImg);
                        newImg.setAttribute("src", getFullImgUrl);
                        newImg.setAttribute("id", "current-img");
                    }
                 
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

                            let calcNewImg;
                                calcNewImg = getLatestOpenedImg - 1;
                                if(calcNewImg < 1) {
                                    calcNewImg = imgArray.length;
                                }                                                 
                                
                               if (imgArray[calcNewImg - 1].classList.contains("video")) {
                                newImg = document.createElement("video");
                                let newImgSrc = imgArray[calcNewImg - 1].src;                              
                                newImg.setAttribute("src", newImgSrc);
                                newImg.setAttribute("controls", "");
                                newImg.setAttribute("id", "current-img");
                                newImg.setAttribute("class", "video-large");
                            } else {
                                newImg = document.createElement("img");
                                let newImgSrc = imgArray[calcNewImg - 1].src;
                                newImg.setAttribute("src", newImgSrc);
                                newImg.setAttribute("id", "current-img");
                            }
            
                               getLatestOpenedImg = calcNewImg;
                               getImgWindow.appendChild(newImg);

                               newImg.onload = function () {
                                   let imgWidth = this.width;
                                   let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

                                   let nextBtn = document.querySelector(".img-btn-next");
                                   nextBtn.style.cssText = "right: " + calcImgToEdge + "px";

                                   let prevBtn = document.querySelector(".img-btn-prev");
                                   prevBtn.style.cssText = "left: " + calcImgToEdge + "px";
                               }                 
                        })

                        let newNextBtn = document.createElement("a");
                        container.appendChild(newNextBtn);
                        newNextBtn.classList.add("img-btn-next", "fas", "fa-chevron-right");
                        newNextBtn.style.cssText = "right: " + calcImgToEdge + "px";
                        newNextBtn.addEventListener("click", function (click) {
                            document.querySelector("#current-img").remove();

                            let getImgWindow = document.querySelector(".img-window");
                           
                            let calcNewImg;
                            calcNewImg = getLatestOpenedImg + 1;
                            if(calcNewImg > imgArray.length) {
                                calcNewImg = 1;
                            }  

                            if (imgArray[calcNewImg - 1].classList.contains("video")) {
                                newImg = document.createElement("video");
                                let newImgSrc = imgArray[calcNewImg - 1].src;                              
                                newImg.setAttribute("src", newImgSrc);
                                newImg.setAttribute("controls", "");
                                newImg.setAttribute("id", "current-img");
                                newImg.setAttribute("class", "video-large");
                            } else {
                                newImg = document.createElement("img");
                                let newImgSrc = imgArray[calcNewImg - 1].src;
                                newImg.setAttribute("src", newImgSrc);
                                newImg.setAttribute("id", "current-img");
                            }

                               
                               getImgWindow.appendChild(newImg);
                               getLatestOpenedImg = calcNewImg;

                               newImg.onload = function () {
                                   let imgWidth = this.width;
                                   let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

                                   let nextBtn = document.querySelector(".img-btn-next");
                                   nextBtn.style.cssText = "right: " + calcImgToEdge + "px";

                                   let prevBtn = document.querySelector(".img-btn-prev");
                                   prevBtn.style.cssText = "left: " + calcImgToEdge + "px";
                               }                      
                        })
                    }               
                }
            });
        }
    }
}


    

