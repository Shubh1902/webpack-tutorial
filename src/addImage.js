import kiwi from "./kiwi.jpg";

export default function addImage() {
  const body = document.querySelector("body");
  const image = document.createElement("img");
  image.src = kiwi;
  image.alt = "kiwi";
  image.width = 300;
  body.appendChild(image);
}
