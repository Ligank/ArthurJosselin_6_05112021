'use strict';

import Image from "./image.js";
import Video from "./video.js";
//check si l'element est une image ou une video
export default class MediaFactory {
    mediaComparateur(element) {
        
        if (element.hasOwnProperty("image")) {
            new Image().creationMedia(element);
        } else if (element.hasOwnProperty("video")) {
            new Video().creationMedia(element);
        }
    }
}