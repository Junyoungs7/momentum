const images = [
  "https://misooda.in/@/content/2022/10/1667049003_6d8988641650b8d24cdb.webp",
  "https://cdn.clien.net/web/api/file/F01/9459022/583dde506aba6.png",
  "https://cphoto.asiae.co.kr/listimglink/6/2020071715532067362_1594968799.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `${chosenImage}`;

document.body.appendChild(bgImage);
