function Video(video, description, size, user, quality) {
    Media(this, description, size);
    this.video = video;
    this.quality = quality;
    this.mp4 = [];
    this.mkv = [];
    this.flv = [];
    this.avi = [];
    this.GB = 4;
}

Video.prototype = Object.create(Media.prototype);
Video.prototype.constructor = Video;

Video.prototype.reSizing = function (video) {
    if (video.size > this.GB) {
        this.quality--;
        this.size = Math.round((this.size * 2) / 3);
        Video.prototype.reSizing();
    }
    if (this.size === 0) {
        throw new Error(`Dear ${this.user.name} something went wrong, please try again`);
    }
}

Video.prototype.defineFormat = function (video) {
    let size = Video.prototype.reSizing(video);

    switch (size) {
        case 1: this.mp4.push(video)
            break;
        case 2: this.flv.push(video)
            break;
        case 3: this.avi.push(video)
            break;
        case 4: this.mkv.push(video)
            break;
    }
}
