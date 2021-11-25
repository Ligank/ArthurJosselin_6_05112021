window.onload = function() {
  pagePhotographe();
};


//Filtres---------------------------------------------------------------------
const myFilterPopular = document.querySelector(".popularite_btn");
const myFilterLarge = document.querySelector(".filtre_deroule");
const myFilterDate = document.querySelector(".date_btn");
const myFilterTitle = document.querySelector(".titre_btn");
const myFilterLargePopular = document.querySelector(".filtre_populaire");
const myFilterLargeDate = document.querySelector(".filtre_date");
const myFilterLargeTitle = document.querySelector(".filtre_titre");

myFilterPopular.addEventListener('click', function() {
    myFilterPopular.style.display = "none";
    myFilterLarge.style.display = "flex";
});

myFilterDate.addEventListener('click', function() {
    myFilterDate.style.display = "none";
    myFilterLarge.style.display = "flex";
});

myFilterTitle.addEventListener('click', function() {
    myFilterTitle.style.display = "none";
    myFilterLarge.style.display = "flex";
});

myFilterLargePopular.addEventListener('click', function() {
    myFilterLarge.style.display = "none";
    myFilterPopular.style.display = "initial";
});

myFilterLargeDate.addEventListener('click', function() {
    myFilterLarge.style.display = "none";
    myFilterDate.style.display = "initial";
});

myFilterLargeTitle.addEventListener('click', function() {
    myFilterLarge.style.display = "none";
    myFilterTitle.style.display = "initial";
});


//Creation des elements--------------------------------------------------------

function pagePhotographe() {
  //recupération fichier json------------------------------------------
  fetch("photographers.json")
      .then((res) => res.json())
      .then(data => {
          let dataphotographersProfil = data.photographers;
          const id = window.location.search.split('id=')[1];
          const photographers = !id ? dataphotographersProfil : dataphotographersProfil.filter(photographer => photographer.id == id);

          //creation Informations profil--------------------------------------------
          let page__nom_et_tag = document.createElement("div");
          page__nom_et_tag.classList.add("page__nom_et_tag");
          document.querySelector(".photographe_page").appendChild(page__nom_et_tag);
          //nom
          let nom_photographe = document.createElement("h1");
          nom_photographe.classList.add("nom_photographe");
          nom_photographe.innerHTML = photographers[0].name;
          page__nom_et_tag.appendChild(nom_photographe);
          //ville
          let ville = document.createElement("p");
          ville.classList.add("ville");
          ville.setAttribute("id","ville_profil")
          ville.innerHTML = photographers[0].city + ", " + photographers[0].country;
          page__nom_et_tag.appendChild(ville);
          //phrase
          let phrase_profil = document.createElement("p");
          phrase_profil.classList.add("phrase_profil");
          phrase_profil.innerHTML = photographers[0].tagline;
          page__nom_et_tag.appendChild(phrase_profil);

          //creation contact----------------------------------------
          let page__contact = document.createElement("div");
          page__contact.classList.add("page__contact");
          document.querySelector(".photographe_page").appendChild(page__contact);
          let contact_btn = document.createElement("button");
          contact_btn.classList.add("contact_btn", "contact");
          ville.setAttribute("id","contact_btn")
          contact_btn.innerHTML = "Contactez-moi";
          page__contact.appendChild(contact_btn);

          //creation lien image----------------------------------------
          let page__photo = document.createElement("div");
          page__photo.classList.add("page__photo");
          document.querySelector(".photographe_page").appendChild(page__photo);
          let profil_image = document.createElement("a");
          profil_image.href = "photographer-page.html?id=" + photographers[0].id;
          profil_image.classList.add("profil_image");
          page__photo.appendChild(profil_image);

          //creation image---------------------------------------------
          let figureProfil = document.createElement("figure");
          profil_image.appendChild(figureProfil);
          let profil_img = document.createElement("img");
          profil_img.src = photographers[0].portrait;
          profil_img.alt = "Image photographe";
          profil_img.classList.add("profil_img");
          profil_img.setAttribute("id","profil_image_page")
          figureProfil.appendChild(profil_img);

          //tags
          let tag_photographe_profil = document.createElement("ul");
          tag_photographe_profil.classList.add("tag_photographe_profil");
          page__nom_et_tag.appendChild(tag_photographe_profil);
          photographers[0].tags.forEach(element => {
            let tag_li_profil = document.createElement("li");
            tag_li_profil.classList.add("tag_li_profil");
            tag_photographe_profil.appendChild(tag_li_profil);
            let tag = document.createElement("a");
            tag.href = "index.html";
            tag.innerHTML = "# " + element;
            tag.classList.add("tag");
            tag_li_profil.appendChild(tag);
            })  
      })
      .then(data => {
        //formulaire----------------------------------------------------------------
        function closeValidate() {
          location.reload();
        };
        //ouverture

        const formulaire = document.querySelector(".fond");
        const formulaireBtn = document.querySelectorAll(".contact_btn");
        const closeBtn = document.querySelectorAll("#croix")

        //ouvrir formulaire
        formulaireBtn.forEach((btn) => btn.addEventListener("click", lancerFormulaire));

        function lancerFormulaire() {
          formulaire.style.display = "block";
        };

        //fermer formulaire
        closeBtn.forEach((btn) => btn.addEventListener("click", closemodal));

        function closemodal() {
          formulaire.style.display = "none";
        }; 

        //verication formulaire
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
                  prenom.style.border = "2px solid red";
                  submit.preventDefault();
            } else if (myRegex.test(prenom.value) == false) {
                let myError = document.getElementById("erreur_prenom");
                  myError.innerHTML = "Le prénom et le nom ne peuvent comporter que des lettres et des tirets uniquement et au moins deux caractères.";
                  prenom.style.border = "2px solid red";
                  submit.preventDefault();
            } else if (myRegex.test(prenom.value) == true) {
                  let myError = document.getElementById("erreur_prenom");
                  myError.innerHTML = "";
                  prenom.style.border = "2px solid green";
            }
          
            /*nom*/
            if (nom.value.trim() == "") {
                let myError = document.getElementById("erreur_nom");
                  myError.innerHTML = "Veuillez remplir le champ.";
                  nom.style.border = "2px solid red";
                  submit.preventDefault();
            } else if (myRegex.test(nom.value) == false) {
                let myError = document.getElementById("erreur_nom");
                  myError.innerHTML ="Le prénom et le nom ne peuvent comporter que des lettres et des tirets uniquement et au moins deux caractères.";
                  nom.style.border = "2px solid red";
                  submit.preventDefault();
            } else if (myRegex.test(nom.value) == true) {
                let myError = document.getElementById("erreur_nom");
                  myError.innerHTML = "";
                  nom.style.border = "2px solid green";
            }
          
            /*Email*/
            if (email.value.trim() == "") {
                let myError = document.getElementById("errorMail");
                  myError.innerHTML = "Veuillez rentrer une adresse E-mail valide (****@***.***).";
                  email.style.border = "2px solid red";
                  submit.preventDefault();
            } else if (myRegexMail.test(email.value) == false) {
                let myError = document.getElementById("errorMail");
                  myError.innerHTML = "Veuillez rentrer une adresse E-mail valide (****@***.***).";
                  email.style.border = "2px solid red";
                  submit.preventDefault();
            } else if (myRegexMail.test(email.value) == true) {
                  let myError = document.getElementById("errorMail");
                  myError.innerHTML = "";
                  email.style.border = "2px solid green";
            }
        });
      })
      /*.then(data => {
        let dataphotographersMedia = data.photographers;
        const id = window.location.search.split('id=')[1];
        const media = !id ? dataphotographersMedia : dataphotographersMedia.filter(media => media.id == id);
        media.forEach(media => {
           //Images
            let gallerie__photo = document.createElement("div");
            gallerie__photo.classList.add("gallerie__photo");
            document.querySelector(".gallerie").appendChild(gallerie__photo);

            let photo__image = document.createElement("a");
            photo__image.href = "photographer-page.html?id=" + media[0].id;
            photo__image.classList.add("profil_image");
            gallerie__photo.appendChild(photo__image);

            let figureGallerie = document.createElement("figure");
            photo__image.appendChild(figureGallerie);
            let gallerie_img = document.createElement("img");
            gallerie_img.src = media[0].image;
            gallerie_img.alt = media[0].alt;
            gallerie_img.classList.add("gallerie_img");
            figureGallerie.appendChild(gallerie_img);

            let gallerie__titre_coeur = document.createElement("div");
            gallerie__titre_coeur.classList.add("gallerie__titre_coeur");
            document.querySelector(".gallerie__photo").appendChild(gallerie__titre_coeur);

            let titre_photo = document.createElement("div");
            titre_photo.classList.add("titre_photo");
            gallerie__titre_coeur.appendChild(titre_photo);

            let titre_photoP = document.createElement("p");
            titre_photoP.classList.add("titre_photo");
            titre_photoP.innerHTML = media[0].title;
            titre_photo.appendChild(titre_photoP);

            let prix_coeur = document.createElement("div");
            prix_coeur.classList.add("titre_photo");
            gallerie__titre_coeur.appendChild(prix_coeur);

            let prix = document.createElement("p");
            prix.classList.add("titre_photo");
            prix.innerHTML = media[0].price + "€";
            prix.appendChild(prix);

            let coeur = document.createElement("p");
            coeur.classList.add("titre_photo");
            coeur.innerHTML = media[0].likes + "heart";
            prix_coeur.appendChild(coeur);
        })
      })*/
      .catch(function() {
      console.log("erreur");
      });
}