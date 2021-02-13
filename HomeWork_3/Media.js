function Media(user, description, size) {
    this.user = user;
    this.description = description;
    this.size = size;
}

Media.prototype.renameDescription = function(newDescription){
    this.description = newDescription;
}
