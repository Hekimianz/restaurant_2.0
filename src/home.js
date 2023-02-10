import aboutImg from "./assets/outside1.png";
import menuImg from "./assets/ratcola.png";

export default function homeLoad() {
  const page = {
    init() {
      this.cacheDom();
      this.modifyDom();
      this.render();
    },
    cacheDom() {
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
    },
    modifyDom() {
      this.aboutIntro.innerText =
        "Welcome to the Cheeki Breeki, where we bring the rugged and intense city of Tarkov to life.";
      this.menuIntro.innerText =
        "Our menu features dishes inspired by the in-game cuisine, such as the limited edition RatCola from the General Sam brand. The secret recipe of this cola still remains a mystery. ";
      this.aboutBtn.innerHTML =
        "<img class='extract' src= '/Users/aramhekimian/repos/restaurant_2.0/src/assets/extract.png'> About us";
      this.menuBtn.innerHTML =
        "<img class='extract' src= '/Users/aramhekimian/repos/restaurant_2.0/src/assets/menuIcon.png'> Our Menu";
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
  };
  page.init();
}
