export default class Gallerie {
    builder(dataphotographersMedia) {
        const id = window.location.search.split('id=')[1];

        dataphotographersMedia.forEach(element => {
            if (id == element.photographerId) {
                let gallerie__photo = `
                <div class="gallerie__photo">
                <a href="" class="photo__image">
                    <figure>
                        <img src="${element.image}" alt="${element.alt}" class="gallerie_img">
                    </figure>
                </a>
                <div class="gallerie__titre_coeur">
                    <div class="titre_photo">
                        <p>${element.title}</p>
                    </div>
                    <div class="prix_coeur">
                        <p>${element.price}</p>
                        <p>${element.likes}<i class="fas fa-heart"></i></p>
                    </div>
                </div>
            </div>
             `
             document.querySelector(".gallerie").appendChild("gallerie__photo")
            }

        });
    }
}