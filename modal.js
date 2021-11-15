window.onload = function() {
    pageAcceuil();
};

function closeValidate() {
    location.reload();
  };


let donnee_photographe = JSON.parse(photographers);




//Creation des profils------------------------------------------------------------------
function pageAcceuil() {
    
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
    profil_img.src = "public/img/Photographers ID Photos/MimiKeel.jpg";
    profil_img.alt = "Image photographe";
    profil_img.classList.add("profil_img");
    figure.appendChild(profil_img);

    //creation nom photographe
    let nom_photographe = document.createElement("h2");
    nom_photographe.innerHTML = "donnee_photographe[0].name";
    profil_image.appendChild(nom_photographe);

    //creation description photographe
    let profil_description = document.createElement("div");
    profil_description.classList.add("profil_description");
    photographe_profil.appendChild(profil_description);
    let ville = document.createElement("p");
    ville.innerHTML = "London, UK";
    ville.classList.add("ville");
    profil_description.appendChild(ville);
    let description_phrase = document.createElement("p");
    description_phrase.innerHTML = "Voir le beau dans le quotidien";
    description_phrase.classList.add("description_phrase");
    profil_description.appendChild(description_phrase);
    let description_prix = document.createElement("p");
    description_prix.innerHTML = "400€/jour";
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
    tag.innerHTML = "#Portrait";
    tag.classList.add("tag");
    tag_li.appendChild(tag);

    //Insertion
    document.querySelector(".profils").appendChild(photographe_profil);
}



//formulaire----------------------------------------------------------------
//ouverture
const formulaire = document.querySelectorAll(".fond");
const formulaireBtn = document.querySelectorAll(".contact_btn");

formulaireBtn.forEach((btn) => btn.addEventListener("click", lancerFormulaire));

function lancerFormulaire() {
    formulaire.style.display = "block";
  };
            
const myForm = document.getElementById('myForm');
const prenom = document.getElementById('prenom');
const myRegex = /^[A-zÀ-ÿ]+[A-zÀ-ÿ]$/;
const myRegexMail = /^[A-zÀ-ÿ0-9.!#$%&'*+/=?^_`{|}~-]+@[A-zÀ-ÿ0-9-]+[.]{1}[A-zÀ-ÿ0-9-]{2,3}$/;
const nom = document.getElementById('nom');
const email = document.getElementById('email');


myForm.addEventListener('submit', function(submit) {
  
    /*prénom*/
    if (prenom.value.trim() == "") {
        let myError = document.getElementById("erreur_prenom");
        myError.innerHTML = "Veuillez remplir le champ.";
        prenom.style.border = red;
        submit.preventDefault();
    } else if (myRegex.test(prenom.value) == false) {
        let myError = document.getElementById("erreur_prenom");
        myError.innerHTML = "Le prénom et le nom ne peuvent comporter que des lettres et des tirets uniquement et au moins deux caractères.";
        prenom.style.border = red;
        submit.preventDefault();
    } else if (myRegex.test(prenom.value) == true) {
        let myError = document.getElementById("erreur_prenom");
        myError.innerHTML = "";
        prenom.style.border = green;
    }
  
    /*nom*/
    if (nom.value.trim() == "") {
        let myError = document.getElementById("erreur_nom");
        myError.innerHTML = emptyText;
        nom.style.border = red;
        submit.preventDefault();
    } else if (myRegex.test(nom.value) == false) {
        let myError = document.getElementById("erreur_nom");
        myError.innerHTML = nameFalse;
        nom.style.border = red;
        submit.preventDefault();
    } else if (myRegex.test(nom.value) == true) {
        let myError = document.getElementById("erreur_nom");
        myError.innerHTML = "";
        nom.style.border = green;
    }
  
    /*Email*/
    if (email.value.trim() == "") {
        let myError = document.getElementById("errorMail");
        myError.innerHTML = mailFalse;
        email.style.border = red;
        submit.preventDefault();
    } else if (myRegexMail.test(email.value) == false) {
        let myError = document.getElementById("errorMail");
        myError.innerHTML = mailFalse;
        email.style.border = red;
        submit.preventDefault();
    } else if (myRegexMail.test(email.value) == true) {
        let myError = document.getElementById("errorMail");
        myError.innerHTML = "";
        email.style.border = green;
    }
});
    
