'use strict';

export default class Video {
    creationMedia(element) {
        let gallerie__photo = document.createElement("div");
        gallerie__photo.classList.add("gallerie__photo");
        document.querySelector(".gallerie").appendChild(gallerie__photo);
        gallerie__photo.setAttribute("data-title", element.title)
        gallerie__photo.setAttribute("data-likes", element.likes)
        gallerie__photo.setAttribute("data-date", element.date)
        let photo__image = document.createElement("a");
        photo__image.classList.add("photo__image");
        gallerie__photo.appendChild(photo__image);
        let figure = document.createElement("figure");
        figure.classList.add("figureVideo");
        photo__image.appendChild(figure);
        let gallerie_img = document.createElement("img");
        gallerie_img.classList.add("gallerie_img");
        gallerie_img.src = element.thumbnail;
        gallerie_img.alt = element.alt;
        figure.appendChild(gallerie_img);
        let play = document.createElement("i");
        play.classList.add("far", "fa-play-circle", "play");
        play.setAttribute("role","button");
        figure.appendChild(play);
        let gallerie__titre_coeur = document.createElement("div");
        gallerie__titre_coeur.classList.add("gallerie__titre_coeur");
        gallerie__photo.appendChild(gallerie__titre_coeur);
        let titre_photo = document.createElement("div");
        titre_photo.classList.add("titre_photo")
        gallerie__titre_coeur.appendChild(titre_photo);
        let titre = document.createElement("p")
        titre.innerHTML = element.title;
        titre_photo.appendChild(titre);
        let prix_coeur = document.createElement("div");
        prix_coeur.classList.add("prix_coeur");
        gallerie__titre_coeur.appendChild(prix_coeur);
        let prix = document.createElement("p");
        prix.innerHTML = element.price + " €";
        prix_coeur.appendChild(prix);
        let likes = document.createElement("div");
        let spanLikes = `<span>${element.likes}</span>`;
        let coeur_vide = `<i class="far fa-heart coeur_vide" role="button"></i>`;
        let coeur_plein = `<i class="fas fa-heart coeur_plein" role="button" style="display: none;"></i>`;
        likes.innerHTML = spanLikes + " " + coeur_vide + coeur_plein;
        prix_coeur.appendChild(likes);
    }
}