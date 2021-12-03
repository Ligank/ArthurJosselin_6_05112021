'use strict';

//Filtres
export default class Filtre {


    //Choix du filtre-------------------------------------------------------------------
    filtreTag() {
        let profils = document.querySelectorAll(".photographe_profil");
    
        document.querySelector(".groupe_tag").addEventListener("click", event => {
            let tag = event.target.classList.value;
        
            if (-1 === tag.indexOf("actif")) {
                event.target.classList.add("actif")
            } else {
                event.target.classList.remove("actif")
            }
    
            this.cacherProfils(profils);
    
        });
    }
  
    //rangement des filtre actifs dans un tableau
    filtresActifs() {
        let filtreActives = document.querySelectorAll(".actif");
        let filtreSelection = [];
    
        filtreActives.forEach(function(filtreActives) {
            filtreSelection.push(filtreActives.getAttribute("data-filter"));
        });
    
        return filtreSelection
    };

    //Compare avec les profils pour trouver ceux avec le même tag
    comparaisonFiltres(article) {
      let filtres = this.filtresActifs();
      let nomClasse = article.classList.value;
      let classes = nomClasse.split(" ");
      let intersection = filtres.filter(
          x => classes.includes(x)
      );

      return filtres.length == intersection.length;
  }

    //cache les profils qui ne comportent pas les tags actifs
    cacherProfils(profils) {
        profils.forEach((article) => {
            if (this.comparaisonFiltres(article)) {
                article.style.display = "flex";
            } else {
                article.style.display = "none";
            }
        });
    }
}
