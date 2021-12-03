'use strict';

import Image from "./image.js";
import Video from "./video.js";

export default class MediaFactory {
    mediaComparateur(element) {
        let factory = null;
        if (element.hasOwnProperty("image")) {
            factory = new Image();
        } else if (element.hasOwnProperty("video")) {
            factory = new Video();
        }
    }
}