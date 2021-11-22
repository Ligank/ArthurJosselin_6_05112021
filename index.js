window.onload = function() {
    pageIndex();
};

//Retour en haut de la page---------------------------------------------
const lienHaut = document.querySelector(".lien_haut_page");
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        lienHaut.style.display = "block";
    } else {
        lienHaut.style.display = "none";
    }
})

//création dynamique des profils-----------------------------------------
function pageIndex() {
    //recupération fichier json------------------------------------------
    fetch("photographers.json")
        .then((res) => res.json())
        .then(data => {
            let dataphotographers = data.photographers;
            dataphotographers.forEach(element => {

            //creation profil--------------------------------------------
            let photographe_profil = document.createElement("div");
            photographe_profil.classList.add("photographe_profil");

            //creation lien image----------------------------------------
            let profil_image = document.createElement("a");
            profil_image.href = "photographer-page.html?id=" + element.id;
            profil_image.classList.add("profil_image");
            photographe_profil.appendChild(profil_image);

            //creation image---------------------------------------------
            let figure = document.createElement("figure");
            profil_image.appendChild(figure);
            let profil_img = document.createElement("img");
            profil_img.src = element.portrait;
            profil_img.alt = "Image photographe";
            profil_img.classList.add("profil_img");
            figure.appendChild(profil_img);

            //creation nom photographe-----------------------------------
            let nom_photographe = document.createElement("h2");
            nom_photographe.innerHTML = element.name;
            profil_image.appendChild(nom_photographe);

            //creation description photographe---------------------------
            let profil_description = document.createElement("div");
            profil_description.classList.add("profil_description");
            photographe_profil.appendChild(profil_description);
            let ville = document.createElement("p");
            ville.innerHTML = element.city;
            ville.classList.add("ville");
            profil_description.appendChild(ville);
            let description_phrase = document.createElement("p");
            description_phrase.innerHTML = element.tagline;
            description_phrase.classList.add("description_phrase");
            profil_description.appendChild(description_phrase);
            let description_prix = document.createElement("p");
            description_prix.innerHTML = element.price + "€/jour";
            description_prix.classList.add("description_prix");
            profil_description.appendChild(description_prix);

            //Creation liste-------------------------------------------
            let profil_tag = document.createElement("div");
            profil_tag.classList.add("profil_tag");
            photographe_profil.appendChild(profil_tag);
            let liste_tag = document.createElement("ul");
            profil_tag.appendChild(liste_tag);

            //creation tags--------------------------------------------
            element.tags.forEach(element => {
            let tag_li = document.createElement("li");
            tag_li.classList.add("tag_li");
            liste_tag.appendChild(tag_li);
            let tag = document.createElement("a");
            tag.href = "";
            tag.innerHTML = "# " + element.tags;
            tag.classList.add("tag");
            tag_li.appendChild(tag);
            })
            //Insertion------------------------------------------------
            document.querySelector(".profils").appendChild(photographe_profil);
            });
        })
        .catch(function() {
        console.log("erreur");
        });
}
