import logo from "./assets/logo.png";
import menuBtnImage from "./assets/menuBtn.png";

export default function pageLoad() {
  const page = {
    init() {
      this.cacheDom();
      this.modifyDom();
      this.render();
    },
    cacheDom() {
      this.body = document.getElementById("content");
      this.navBar = Object.assign(document.createElement("nav"), {
        id: "navBar",
      });
      this.logoImg = Object.assign(document.createElement("img"), {
        id: "logoNav",
        class: "navItem",
        src: logo,
      });
      this.aboutNav = Object.assign(document.createElement("span"), {
        id: "aboutNav",
        classList: "navItem",
      });
      this.menuNav = Object.assign(document.createElement("span"), {
        id: "menuNav",
        classList: "navItem",
      });
      this.contactNav = Object.assign(document.createElement("span"), {
        id: "contactNav",
        classList: "navItem",
      });
      this.footer = Object.assign(document.createElement("footer"), {
        id: "footer",
      });
      this.menuBtn = Object.assign(document.createElement("img"), {
        id: "menuBtn",
        src: menuBtnImage,
      });
    },
    modifyDom() {
      this.aboutNav.innerText = "About us";
      this.menuNav.innerText = "Menu";
      this.contactNav.innerText = "Contact";
      this.footer.innerHTML =
        "Made by <a href='https://github.com/Hekimianz' target='_blank' ><span>Aram Hekimian</span>";
    },
    render() {
      this.body.appendChild(this.navBar);
      this.navBar.append(
        this.logoImg,
        this.aboutNav,
        this.menuNav,
        this.contactNav,
        this.menuBtn
      );
      this.body.appendChild(this.footer);
    },
  };
  page.init();
}
