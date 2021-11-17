window.onload = function() {
    pageIndex()
};

function pageIndex() {
    //recupération fichier json
    fetch("photographers.json")
        .then((response) => response.json())
        .then(data => {
            let dataphotographers = data.photographers;
            dataphotographers.forEach(photographers => {

            //creation profil
            let photographe_profil = document.createElement("div");
            photographe_profil.classList.add("photographe_profil");

            //creation lien image
            let profil_image = document.createElement("a");
            profil_image.href = "index.html";
            profil_image.classList.add("profil_image");
            photographe_profil.appendChild(profil_image);

            //creation image
            let figure = document.createElement("figure");
            profil_image.appendChild(figure);
            let profil_img = document.createElement("img");
            profil_img.src = photographers.portrait;
            profil_img.alt = "Image photographe";
            profil_img.classList.add("profil_img");
            figure.appendChild(profil_img);

            //creation nom photographe
            let nom_photographe = document.createElement("h2");
            nom_photographe.innerHTML = photographers.name;
            profil_image.appendChild(nom_photographe);

            //creation description photographe
            let profil_description = document.createElement("div");
            profil_description.classList.add("profil_description");
            photographe_profil.appendChild(profil_description);
            let ville = document.createElement("p");
            ville.innerHTML = photographers.city;
            ville.classList.add("ville");
            profil_description.appendChild(ville);
            let description_phrase = document.createElement("p");
            description_phrase.innerHTML = photographers.tagline;
            description_phrase.classList.add("description_phrase");
            profil_description.appendChild(description_phrase);
            let description_prix = document.createElement("p");
            description_prix.innerHTML = photographers.price;
            description_prix.classList.add("description_prix");
            profil_description.appendChild(description_prix);

            //Creation tag
            let profil_tag = document.createElement("div");
            profil_tag.classList.add("profil_tag");
            photographe_profil.appendChild(profil_tag);
            let liste_tag = document.createElement("ul");
            profil_tag.appendChild(liste_tag);
            let tag_li = document.createElement("li");
            tag_li.classList.add("tag_li");
            liste_tag.appendChild(tag_li);
            let tag = document.createElement("a");
            tag.href = "";
            tag.innerHTML = photographers.tags;
            tag.classList.add("tag");
            tag_li.appendChild(tag);

            //Insertion
            document.querySelector(".profils").appendChild(photographe_profil);
                    
            });
})
.catch(function() {
    console.log("erreur");
  });

}




    
    
