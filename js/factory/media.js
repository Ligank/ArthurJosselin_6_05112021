'use strict';

import Image from "./image.js";
import Video from "./video.js";
//check si l'element est une image ou une video
export default class MediaFactory {
    mediaComparateur(element) {
        
        if (Object.prototype.hasOwnProperty.call(element, "image")) {
            new Image().creationMedia(element);
        } else if (Object.prototype.hasOwnProperty.call(element, "video")) {
            new Video().creationMedia(element);
        }
    }
}