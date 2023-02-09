export default function aboutLoad() {
  const page = {
    init() {
      this.cacheDom();
      this.render();
    },
    cacheDom() {
      this.body = document.getElementById("content");
      this.h1 = document.createElement("h1");
      this.h1.innerText = "About Page";
    },
    render() {
      this.body.appendChild(this.h1);
    },
  };
  page.init();
}
