function User(username, password, isAdmin, name, surname, id) {
    Account.call(this, username, password, isAdmin)
    this.name = name;
    this.surname = surname;
    this.id = id;
    this.photos = [];
    this.videos = [];
}

User.prototype = Object.create(Account.prototype);
User.prototype.constructor = User;

User.prototype.postPhoto = function (photo) {
    this.photos.push(photo);
}

User.prototype.showAllPhotos = function () {
    this.photos.forEach(item => console.log(item));
}

User.prototype.postVideo = function (video) {
    this.videos.push(video)
}

User.prototype.showALlVideos = function () {
    this.videos.forEach(item => console.log(item));
}

User.prototype.addingFunctionality = function (user) {
    if (user.isAdmin) {
        // some logic that can add functional feature
    } else {
        console.log(`Sorry dear ${user.name} for adding functional features you should be administrator`)
    }
}

User.prototype.changingUserName = function(user,newUserName){
    if (user.isAdmin){
        user.username = newUserName;
    }
}


