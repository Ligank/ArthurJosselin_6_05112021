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