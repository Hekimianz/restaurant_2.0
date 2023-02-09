export default function contactLoad() {
  const page = {
    init() {
      this.cacheDom();
      this.render();
    },
    cacheDom() {
      this.body = document.getElementById("content");
      this.h1 = document.createElement("h1");
      this.h1.innerText = "Contact Page";
    },
    render() {
      this.body.appendChild(this.h1);
    },
  };
  page.init();
}
