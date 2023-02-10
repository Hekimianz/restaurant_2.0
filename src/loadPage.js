import logo from "./assets/logo.png";
import menuBtnImage from "./assets/menuBtn.png";
import homeLoad from "./home";
import menuLoad from "./menu";
import aboutLoad from "./about";

export default function pageLoad() {
  const page = {
    init() {
      this.cacheDom();
      this.modifyDom();
      this.render();
      this.eventListeners();
    },
    cacheDom() {
      this.content = document.getElementById("content");
      this.navBar = Object.assign(document.createElement("nav"), {
        id: "navBar",
      });
      this.navLinks = Object.assign(document.createElement("div"), {
        id: "navLinks",
        classList: "hidden",
      });
      this.logoImg = Object.assign(document.createElement("img"), {
        id: "logoNav",
        class: "navItem",
        src: logo,
      });
      this.homeNav = Object.assign(document.createElement("span"), {
        id: "homeNav",
        classList: "navItem active",
      });
      this.aboutNav = Object.assign(document.createElement("span"), {
        id: "aboutNav",
        classList: "navItem",
      });
      this.menuNav = Object.assign(document.createElement("span"), {
        id: "menuNav",
        classList: "navItem",
      });
      this.footer = Object.assign(document.createElement("footer"), {
        id: "footer",
      });
      this.menuBtn = Object.assign(document.createElement("img"), {
        id: "menuBtn",
        src: menuBtnImage,
      });
      this.allNavLinks = document.getElementsByClassName("navItem");
      this.active = document.getElementsByClassName("active");
    },
    modifyDom() {
      this.homeNav.innerText = "Home";
      this.aboutNav.innerText = "About us";
      this.menuNav.innerText = "Menu";
      this.footer.innerHTML =
        "Made by <a href='https://github.com/Hekimianz' target='_blank' ><span>Aram Hekimian</span>";
    },
    render() {
      document.body.insertBefore(this.navBar, this.content);
      this.navLinks.append(this.homeNav, this.aboutNav, this.menuNav);
      this.navBar.append(this.logoImg, this.menuBtn, this.navLinks);
      document.body.appendChild(this.footer);
    },
    eventListeners() {
      this.menuBtn.addEventListener("click", this.showHideMenu.bind(this));
      for (let i = 0; i < this.allNavLinks.length; i += 1) {
        this.allNavLinks[i].addEventListener(
          "click",
          this.changePage.bind(this)
        );
      }
    },
    changePage(evt) {
      if (!evt.target.classList.contains("active")) {
        this.active[0].classList.remove("active");
        evt.target.classList.add("active");
        if (evt.target.innerText === "Home") {
          this.clearPage();
          homeLoad();
        } else if (evt.target.innerText === "About us") {
          this.clearPage();
          aboutLoad();
        } else if (evt.target.innerText === "Menu") {
          this.clearPage();
          menuLoad();
        }
      }
    },
    clearPage() {
      this.content.innerText = "";
    },
    showHideMenu() {
      if (this.navLinks.classList.contains("hidden")) {
        this.navLinks.classList.add("notHidden");
        this.navLinks.classList.remove("hidden");
      } else if (this.navLinks.classList.contains("notHidden")) {
        this.navLinks.classList.add("hidden");
        this.navLinks.classList.remove("notHidden");
      }
    },
  };
  page.init();
}
