export default function menuLoad() {
  const page = {
    activate() {
      this.activeLink.classList.add("active");
      this.notActiveLink1.classList.remove("active");
      this.notActiveLink2.classList.remove("active");
    },
    init() {
      this.cacheDom();
      this.render();
      this.activate();
    },
    cacheDom() {
      this.activeLink = document.getElementById("menuNav");
      this.notActiveLink1 = document.getElementById("homeNav");
      this.notActiveLink2 = document.getElementById("aboutNav");
      this.body = document.getElementById("content");
      this.h1 = document.createElement("h1");
      this.h1.innerText = "Menu Page";
    },
    render() {
      this.body.appendChild(this.h1);
    },
  };
  page.init();
}
