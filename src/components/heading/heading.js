import "./heading.scss";
class Heading {
  render() {
    const h1 = document.createElement("h1");
    h1.innerHTML = "Webpack is nice";
    document.querySelector("body").appendChild(h1);
  }
}

export default Heading;
