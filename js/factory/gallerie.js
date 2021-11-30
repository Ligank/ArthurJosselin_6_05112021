class gallerieFactory {
    constructor(element) {
        if (element.hasOwnProperty("image")) {
            return new Image(element)
        } else if (element.hasOwnProperty("video")) {
            return new Video(element)
        } else {
            throw "Format non reconnu"
        }
    }
}