import kiwi from "./kiwi.jpg";
import altText from "./altText.txt";
export default function addImage() {
  const body = document.querySelector("body");
  const image = document.createElement("img");
  image.src = kiwi;
  image.alt = altText;
  image.width = 300;
  body.appendChild(image);
}
