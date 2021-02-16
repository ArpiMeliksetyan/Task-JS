const Media = require("./Media")

function Photo(picture, description, user, size, isOfficial) {
    Media(this, description, size, user);
    this.picture = picture;
    this.isOfficial = isOfficial;
    this.private = [];
    this.public = [];
}

Photo.prototype = Object.create(Media.prototype);
Photo.prototype.constructor = Photo;

Photo.prototype.calculatingPixels = function (height, width) {
    return height * width;
}

Photo.prototype.photoPrivacy = function(photo){
    if(photo.isOfficial){
        this.private.push(photo);
    } else{
        this.public.push(photo)
    }
}