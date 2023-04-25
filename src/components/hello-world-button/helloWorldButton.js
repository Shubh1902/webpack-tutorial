import "./helloWorldButton.scss";
class HelloWorldButton {
  constructor() {
    this.clickCount = 0;
  }
  buttonCssClass = "hello-world-button";
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Hello World";
    button.classList.add(this.buttonCssClass);
    button.onclick = () => {
      this.clickCount++;
      const para = document.createElement("p");
      para.innerHTML = `This is para ${this.clickCount}`;
      document.querySelector("body").append(para);
    };
    document.querySelector("body").append(button);
  }
}

export default HelloWorldButton;
