import emelya from "./assets/Emeyla.png";
import sprats from "./assets/sprats.png";
import sausage from "./assets/sausage.png";
import alyonka from "./assets/Alyonka.png";
import hotrod from "./assets/hotrod.png";
import kitchen from "./assets/kitchen.jpg";
import lunchbox from "./assets/lunchbox.png";
import mayo from "./assets/mayo.png";
import moonshine from "./assets/moonshine.png";
import ratcola2 from "./assets/ratcola2.png";
import saury from "./assets/saury.png";
import tushonka from "./assets/tushonka.png";
import water from "./assets/water.png";

export default function menuLoad() {
  const page = {
    activate() {
      this.activeLink.classList.add("active");
      this.notActiveLink1.classList.remove("active");
      this.notActiveLink2.classList.remove("active");
    },
    init() {
      this.cacheDom();
      this.modifyDom();
      this.render();
      this.activate();
    },
    cacheDom() {
      this.activeLink = document.getElementById("menuNav");
      this.notActiveLink1 = document.getElementById("homeNav");
      this.notActiveLink2 = document.getElementById("aboutNav");
      this.body = document.getElementById("content");
      this.box1 = Object.assign(document.createElement("div"), {
        id: "menuB1",
        classList: "boxes",
      });
      this.img1 = Object.assign(document.createElement("img"), {
        id: "menuI",
        classList: "boxI",
        src: kitchen,
      });
      this.p1 = Object.assign(document.createElement("p"), {
        classList: "paragraphs",
      });
      this.menuCont = Object.assign(document.createElement("div"), {
        id: "menuCont",
      });
      this.menuI1 = Object.assign(document.createElement("img"), {
        id: "menuI1",
        classList: "menuImgs",
        src: emelya,
      });
      this.menuP1 = Object.assign(document.createElement("p"), {
        id: "menuP1",
        classList: "menuParagraphs",
      });
      this.menuI2 = Object.assign(document.createElement("img"), {
        id: "menuI2",
        classList: "menuImgs",
        src: alyonka,
      });
      this.menuP2 = Object.assign(document.createElement("p"), {
        id: "menuP2",
        classList: "menuParagraphs",
      });
      this.menuI3 = Object.assign(document.createElement("img"), {
        id: "menuI3",
        classList: "menuImgs",
        src: tushonka,
      });
      this.menuP3 = Object.assign(document.createElement("p"), {
        id: "menuP3",
        classList: "menuParagraphs",
      });
      this.menuI4 = Object.assign(document.createElement("img"), {
        id: "menuI4",
        classList: "menuImgs",
        src: mayo,
      });
      this.menuP4 = Object.assign(document.createElement("p"), {
        id: "menuP4",
        classList: "menuParagraphs",
      });
      this.menuI5 = Object.assign(document.createElement("img"), {
        id: "menuI5",
        classList: "menuImgs",
        src: sprats,
      });
      this.menuP5 = Object.assign(document.createElement("p"), {
        id: "menuP5",
        classList: "menuParagraphs",
      });
      this.menuI6 = Object.assign(document.createElement("img"), {
        id: "menuI6",
        classList: "menuImgs",
        src: sausage,
      });
      this.menuP6 = Object.assign(document.createElement("p"), {
        id: "menuP6",
        classList: "menuParagraphs",
      });
      this.menuI7 = Object.assign(document.createElement("img"), {
        id: "menuI7",
        classList: "menuImgs",
        src: saury,
      });
      this.menuP7 = Object.assign(document.createElement("p"), {
        id: "menuP7",
        classList: "menuParagraphs",
      });
      this.menuI8 = Object.assign(document.createElement("img"), {
        id: "menuI8",
        classList: "menuImgs",
        src: lunchbox,
      });
      this.menuP8 = Object.assign(document.createElement("p"), {
        id: "menuP8",
        classList: "menuParagraphs",
      });

      this.menuI9 = Object.assign(document.createElement("img"), {
        id: "menuI9",
        classList: "menuImgs",
        src: water,
      });
      this.menuP9 = Object.assign(document.createElement("p"), {
        id: "menuP9",
        classList: "menuParagraphs",
      });
      this.menuI10 = Object.assign(document.createElement("img"), {
        id: "menuI10",
        classList: "menuImgs",
        src: hotrod,
      });
      this.menuP10 = Object.assign(document.createElement("p"), {
        id: "menuP10",
        classList: "menuParagraphs",
      });
      this.menuI11 = Object.assign(document.createElement("img"), {
        id: "menuI11",
        classList: "menuImgs",
        src: moonshine,
      });
      this.menuP11 = Object.assign(document.createElement("p"), {
        id: "menuP11",
        classList: "menuParagraphs",
      });
      this.menuI12 = Object.assign(document.createElement("img"), {
        id: "menuI12",
        classList: "menuImgs",
        src: ratcola2,
      });
      this.menuP12 = Object.assign(document.createElement("p"), {
        id: "menuP12",
        classList: "menuParagraphs",
      });
    },
    modifyDom() {
      this.p1.innerText =
        "Our chefs have crafted a selection of dishes that capture the spirit of survival in the game, utilizing ingredients and cooking techniques that are as hearty and robust as the environment of Tarkov itself.";
      this.menuP1.innerText =
        "Emelya rye croutons with assorted flavours were a favourite snack of teens and lazy beer drinkers, but, unlike them, stayed behind.";
      this.menuP2.innerText =
        "The famous milk chocolate of post-Soviet times, sweet and creamy.";
      this.menuP3.innerText =
        "Canned beef stew, commonly referred to as tushonka, can be stored for years, thus rivaling condensed milk in importance as military and tourist food supply.";
      this.menuP4.innerText =
        "This DevilDog's brand mayonnaise is quite famous in Tarkov. Recommended to use with boiled potatoes.";
      this.menuP5.innerText = "Delicacy sprats from Alconafter company.";
      this.menuP6.innerText =
        "The legendary and rare smoked sausage \"Salty Dog\". No, it's not made of dogs, it's just the name.";
      this.menuP7.innerText =
        "Smoked pacific saury in a tin can offers some easily digestible protein and aliphatic acid, making it a nice addition to the ration.";
      this.menuP8.innerText =
        "The compact package of a lunchbox (IRP) includes everything you need for a comfortable nutrition of an adult person in the most difficult conditions.";
      this.menuP9.innerText =
        "Purified and enriched bottled water with a CR-100 filter, 0.6L.";
      this.menuP10.innerText =
        "Hot Rod, though being the most recognizable energy drink in the world, is not much more powerful that its counterparts. The standards are the same for all.";
      this.menuP11.innerText =
        "First-class moonshine straight from the hideout. Sixfold distillation, purification, crystallization, and ionization of the boiling process led to the creation of this 79-degree drink. Remember that drinking alcohol can lead to sad consequences.";
      this.menuP12.innerText =
        "Limited edition RatCola from the General Sam brand. The secret recipe of this cola still remains a mystery.";
    },
    render() {
      this.body.append(this.box1, this.menuCont);
      this.box1.append(this.img1, this.p1);
      this.menuCont.append(
        this.menuI1,
        this.menuP1,
        this.menuI2,
        this.menuP2,
        this.menuI3,
        this.menuP3,
        this.menuI4,
        this.menuP4,
        this.menuI5,
        this.menuP5,
        this.menuI6,
        this.menuP6,
        this.menuI7,
        this.menuP7,
        this.menuI8,
        this.menuP8,
        this.menuI9,
        this.menuP9,
        this.menuI10,
        this.menuP10,
        this.menuI11,
        this.menuP11,
        this.menuI12,
        this.menuP12
      );
    },
  };
  page.init();
}
