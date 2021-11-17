function closeValidate() {
    location.reload();
  };
//formulaire----------------------------------------------------------------
//ouverture

const formulaire = document.querySelector(".fond");
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
          myError.innerHTML = "Le prénom et le nom ne peuvent comporter que des lettres et des tirets uniquement et au moins deux caractères.";
          nom.style.border = red;
          submit.preventDefault();
      } else if (myRegex.test(nom.value) == false) {
          let myError = document.getElementById("erreur_nom");
          myError.innerHTML ="Veuillez remplir le champ.";
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
          myError.innerHTML = "Veuillez rentrer une adresse E-mail valide (****@***.***).";
          email.style.border = red;
          submit.preventDefault();
      } else if (myRegexMail.test(email.value) == false) {
          let myError = document.getElementById("errorMail");
          myError.innerHTML = "Veuillez rentrer une adresse E-mail valide (****@***.***).";
          email.style.border = red;
          submit.preventDefault();
      } else if (myRegexMail.test(email.value) == true) {
          let myError = document.getElementById("errorMail");
          myError.innerHTML = "";
          email.style.border = green;
      }
  });