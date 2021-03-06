'use strict';

export default class lightBox {
    ouverture() {
        //creation array avec les images
        let gallerieImages = document.querySelectorAll(".gallerie_img");
        let getLatestOpenedImg;
        let windowWidth = window.innerWidth;
        let imgArray = []
        for (let i = 0; i < gallerieImages.length; ++i) {
            imgArray.push(gallerieImages[i]);
          }
        //tri de l'array
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

        //creation de l'image dans la lightbox et recuperation de sa place dans l'array
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
                    close.addEventListener("click", function () {
                        document.querySelector(".img-window").remove();
                        document.querySelector(".close-lightbox-icon").remove();
                        document.querySelector(".img-btn-prev").remove();
                        document.querySelector(".img-btn-next").remove(); 
                    })
                    //creation d'image ou video
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
                    //creation des fleches pour l'image
                    newImg.onload = function() {
                        let imgWidth = this.width;
                        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;
                        console.log(imgWidth)

                        let newPrevBtn = document.createElement("a");
                        container.appendChild(newPrevBtn);
                        newPrevBtn.classList.add("img-btn-prev", "fas", "fa-chevron-left");
                        if  (window.matchMedia("(max-width: 768px)").matches) {
                            newPrevBtn.style.cssText = "left: " + (calcImgToEdge + 40) + "px";
                            newPrevBtn.style.fontSize = 30 + "px"
                        } else {
                            newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px";
                        }
                        
                        newPrevBtn.addEventListener("click", function () {
                            prev(image);                                           
                        })

                        document.addEventListener('keydown', function(e) {
                            switch (e.keyCode) {
                                case 37:
                                    prev(image);
                            }
                        })

                        let newNextBtn = document.createElement("a");
                        container.appendChild(newNextBtn);
                        newNextBtn.classList.add("img-btn-next", "fas", "fa-chevron-right");
                        if  (window.matchMedia("(max-width: 768px)").matches) {
                            newNextBtn.style.cssText = "right: " + (calcImgToEdge + 40) + "px";
                            newNextBtn.style.fontSize = 30 + "px"
                        } else {
                            newNextBtn.style.cssText = "right: " + (calcImgToEdge - 15) + "px";
                        }
                        newNextBtn.addEventListener("click", function () {
                            next(image);                    
                        })

                        document.addEventListener('keydown', function(e) {
                            switch (e.keyCode) {
                                case 39:
                                    next(image);
                            }
                        })
                    }
                    //creation des fleches pour la video
                    newImg.onloadeddata = function() {
                        let imgWidth = 1350;
                        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

                        let newPrevBtn = document.createElement("a");
                        container.appendChild(newPrevBtn);
                        newPrevBtn.classList.add("img-btn-prev", "fas", "fa-chevron-left");
                        if  (window.matchMedia("(max-width: 768px)").matches) {
                            newPrevBtn.style.cssText = "left: " + 10 + "px";
                            newPrevBtn.style.fontSize = 30 + "px"
                        } else {
                            newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px";
                        }
                        newPrevBtn.addEventListener("click", function () {
                            prev(image);                
                        })
                        document.addEventListener('keydown', function(e) {
                            switch (e.keyCode) {
                                case 37:
                                    prev(image);
                            }
                        })

                        let newNextBtn = document.createElement("a");
                        container.appendChild(newNextBtn);
                        newNextBtn.classList.add("img-btn-next", "fas", "fa-chevron-right");
                        if  (window.matchMedia("(max-width: 768px)").matches) {
                            newNextBtn.style.cssText = "right: " + 10 + "px";
                            newNextBtn.style.fontSize = 30 + "px"
                        } else {
                            newNextBtn.style.cssText = "right: " + (calcImgToEdge - 15) + "px";
                        }
                        newNextBtn.addEventListener("click", function () {
                            next(image);                      
                        })
                        document.addEventListener('keydown', function(e) {
                            switch (e.keyCode) {
                                case 39:
                                    next(image);
                            }
                        })
                    }
                    //evenement quand on clique la fleche de gauche
                    function prev() {
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
                                   if  (window.matchMedia("(max-width: 768px)").matches) {
                                    nextBtn.style.cssText = "right: " + (calcImgToEdge + 40) + "px";
                                    nextBtn.style.fontSize = 30 + "px"
                                    } else {
                                        nextBtn.style.cssText = "right: " + (calcImgToEdge - 15) + "px";
                                    }

                                   let prevBtn = document.querySelector(".img-btn-prev");
                                   if  (window.matchMedia("(max-width: 768px)").matches) {
                                    prevBtn.style.cssText = "left: " + (calcImgToEdge + 40) + "px";
                                    prevBtn.style.fontSize = 30 + "px"
                                    } else {
                                        prevBtn.style.cssText = "left: " + calcImgToEdge + "px";
                                    }
                               }
                               newImg.onloadeddata = function () {
                                let imgWidth = 1350;
                                let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

                                let nextBtn = document.querySelector(".img-btn-next");
                                if  (window.matchMedia("(max-width: 768px)").matches) {
                                    nextBtn.style.cssText = "right: " + 10 + "px";
                                    nextBtn.style.fontSize = 30 + "px"
                                } else {
                                    nextBtn.style.cssText = "right: " + (calcImgToEdge - 15) + "px";
                                }

                                let prevBtn = document.querySelector(".img-btn-prev");
                                if  (window.matchMedia("(max-width: 768px)").matches) {
                                    prevBtn.style.cssText = "left: " + 10 + "px";
                                    prevBtn.style.fontSize = 30 + "px"
                                } else {
                                    prevBtn.style.cssText = "left: " + calcImgToEdge + "px";
                                }
                            }
                    }
                    //evenement quand on clique la fleche de droite
                    function next() {
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
                                   if  (window.matchMedia("(max-width: 768px)").matches) {
                                    nextBtn.style.cssText = "right: " + (calcImgToEdge + 40) + "px";
                                    nextBtn.style.fontSize = 30 + "px"
                                    } else {
                                        nextBtn.style.cssText = "right: " + (calcImgToEdge - 15) + "px";
                                    }

                                   let prevBtn = document.querySelector(".img-btn-prev");
                                   if  (window.matchMedia("(max-width: 768px)").matches) {
                                    prevBtn.style.cssText = "left: " + (calcImgToEdge + 40) + "px";
                                    prevBtn.style.fontSize = 30 + "px"
                                    } else {
                                        prevBtn.style.cssText = "left: " + calcImgToEdge + "px";
                                    }
                               }
                               newImg.onloadeddata = function () {
                                let imgWidth = 1350;
                                let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

                                let nextBtn = document.querySelector(".img-btn-next");
                                if  (window.matchMedia("(max-width: 768px)").matches) {
                                    nextBtn.style.cssText = "right: " + 10 + "px";
                                    nextBtn.style.fontSize = 30 + "px"
                                } else {
                                    nextBtn.style.cssText = "right: " + (calcImgToEdge - 15) + "px";
                                }

                                let newPrevBtn = document.querySelector(".img-btn-prev");
                                if  (window.matchMedia("(max-width: 768px)").matches) {
                                    newPrevBtn.style.cssText = "left: " + 10 + "px";
                                    newPrevBtn.style.fontSize = 30 + "px"
                                } else {
                                    newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px";
                                }
                            }
                    }
                }
            });
        }
    }
}