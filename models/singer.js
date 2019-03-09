class Singer {
    constructor (id, name, image, link) {
        this.id = id;
        this.name = name;
        this.link = link;
        this.image = image;
    }
    // getInfo() {
    //     let info = [];
    //     return info = [this.id, this.name, this.image, this.link]
    // }
}

let domainImg = 'https://photo-resize-zmp3.zadn.vn/w240h240_jpeg/avatars/';
let domainLink = 'https://zingmp3.vn/nghe-si/';

let arrSinger = [
    new Singer(1, 'Hương Tràm', 'b/f/b/9/bfb9522fe78758e81dfcb4b70d3f8f52.jpg', 'Huong-Tram'),
    new Singer(2, 'Mr. Siro', 'e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg', 'Mr-Siro'),
    new Singer(3, 'Sơn Tùng MTP', 'e/e/ee58fcc0ff45002b8d416bd7685809ce_1487040461.jpg', 'Son-Tung-M-TP'),
    new Singer(4, 'Jack', '5/a/5/a/5a5a51ec2a1fdd0acb905ed8288f05b5.jpg', 'Trinh-Tran-Phuong-Tuan'),
    new Singer(5, 'Magazine', 'b/8/a/8/b8a8c2b00565443a8a752ad1df95ce8d.jpg', 'Magazine-rap-viet')
]

module.exports = {arrSinger, Singer, domainImg, domainLink}