import aboutImg from "./assets/outside1.png";
import menuImg from "./assets/ratcola.png";
import aboutLoad from "./about";
import menuLoad from "./menu";
import icon1 from "./assets/extract.png";
import icon2 from "./assets/menuIcon.png";

export default function homeLoad() {
  const page = {
    init() {
      this.cacheDom();
      this.modifyDom();
      this.render();
      this.eventListeners();
      this.activate();
    },

    cacheDom() {
      this.activeLink = document.getElementById("homeNav");
      this.notActiveLink1 = document.getElementById("aboutNav");
      this.notActiveLink2 = document.getElementById("menuNav");
      this.body = document.getElementById("content");
      this.aboutDiv = Object.assign(document.createElement("div"), {
        id: "aboutDiv",
        classList: "sectionDiv",
      });
      this.menuDiv = Object.assign(document.createElement("div"), {
        id: "menuDiv",
        classList: "sectionDiv",
      });
      this.img1 = Object.assign(document.createElement("img"), {
        id: "img1",
        classList: "homeImg",
        src: aboutImg,
      });
      this.aboutIntro = Object.assign(document.createElement("p"), {
        id: "aboutIntro",
        classList: "intro",
      });
      this.aboutBtn = Object.assign(document.createElement("button"), {
        id: "aboutBtn",
        classList: "css-button-shadow--green",
      });
      this.menuBtn = Object.assign(document.createElement("button"), {
        id: "ourmenuBtn",
        classList: "css-button-shadow--green",
      });
      this.menuImg = Object.assign(document.createElement("img"), {
        id: "menuImg",
        classList: "homeImg",
        src: menuImg,
      });
      this.menuIntro = Object.assign(document.createElement("p"), {
        id: "menuIntro",
        classList: "intro",
      });
      this.allBtns = document.getElementsByClassName(
        "css-button-shadow--green"
      );
    },
    modifyDom() {
      this.aboutIntro.innerText =
        "Welcome to the Cheeki Breeki, where we bring the rugged and intense city of Tarkov to life.";
      this.menuIntro.innerText =
        "Our menu features dishes inspired by the in-game cuisine, such as the limited edition RatCola from the General Sam brand. The secret recipe of this cola still remains a mystery. ";
      this.aboutBtn.innerHTML = `<img class='extract' src=${icon1}> About Us`;
      this.menuBtn.innerHTML = `<img class='extract' src=${icon2}> Our Menu`;
    },
    eventListeners() {
      for (let i = 0; i < this.allBtns.length; i += 1) {
        this.allBtns[i].addEventListener("click", this.changePage.bind(this));
      }
    },
    changePage(evt) {
      if (evt.target.innerText === "About Us") {
        this.clearPage();
        aboutLoad();
      } else if (evt.target.innerText === "Our Menu") {
        this.clearPage();
        menuLoad();
      }
    },
    clearPage() {
      this.body.innerText = "";
    },
    render() {
      this.aboutDiv.appendChild(this.img1);
      this.aboutDiv.appendChild(this.aboutIntro);
      this.aboutDiv.appendChild(this.aboutBtn);
      this.menuDiv.appendChild(this.menuImg);
      this.menuDiv.appendChild(this.menuIntro);
      this.menuDiv.appendChild(this.menuBtn);
      this.body.appendChild(this.aboutDiv);
      this.body.appendChild(this.menuDiv);
    },
    activate() {
      if (this.activeLink) {
        this.activeLink.classList.add("active");
        this.notActiveLink1.classList.remove("active");
        this.notActiveLink2.classList.remove("active");
      }
    },
  };
  page.init();
}
