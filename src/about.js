import subway from "./assets/poster.png";
import video1 from "./assets/video2.mp4";
import video2 from "./assets/video5.mp4";

export default function aboutLoad() {
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
      this.activeLink = document.getElementById("aboutNav");
      this.notActiveLink1 = document.getElementById("homeNav");
      this.notActiveLink2 = document.getElementById("menuNav");
      this.body = document.getElementById("content");
      this.box1 = Object.assign(document.createElement("div"), {
        id: "box1",
        classList: "boxes",
      });
      this.p1 = Object.assign(document.createElement("p"), {
        id: "p1",
        classList: "paragraphs",
      });
      this.box1I = Object.assign(document.createElement("img"), {
        id: "box1I",
        src: subway,
        classList: "boxI",
      });

      this.box2 = Object.assign(document.createElement("div"), {
        id: "box2",
        classList: "boxes",
      });

      this.box2V = Object.assign(document.createElement("video"), {
        id: "box2V",
        width: "240",
        classList: "boxV",
        autoplay: "autoplay",
        loop: "loop",
      });
      this.box2V.setAttribute("webkit-playsinline", "");
      this.box2V.setAttribute("playsinline", "");
      this.box2VSrc = Object.assign(document.createElement("source"), {
        src: video1,
      });

      this.p2 = Object.assign(document.createElement("p"), {
        id: "p2",
        classList: "paragraphs",
      });

      this.box3 = Object.assign(document.createElement("div"), {
        id: "box3",
        classList: "boxes",
      });

      this.box3V = Object.assign(document.createElement("video"), {
        id: "box3V",
        width: "240",
        classList: "boxV",
        autoplay: "autoplay",
        loop: "loop",
      });
      this.box3V.setAttribute("webkit-playsinline", "");
      this.box3V.setAttribute("playsinline", "");
      this.box3VSrc = Object.assign(document.createElement("source"), {
        src: video2,
      });

      this.review1 = Object.assign(document.createElement("p"), {
        id: "review1",
        classList: "reviews",
      });
      this.review2 = Object.assign(document.createElement("p"), {
        id: "review2",
        classList: "reviews",
      });

      this.review3 = Object.assign(document.createElement("p"), {
        id: "review3",
        classList: "reviews",
      });
      this.review4 = Object.assign(document.createElement("p"), {
        id: "review4",
        classList: "reviews",
      });

      this.reviews = Object.assign(document.createElement("div"), {
        id: "reviews",
      });
    },
    modifyDom() {
      this.p1.innerText =
        "As you dine, enjoy the ambiance of a simulated firefight with our immersive sound effects and dynamic lighting. Whether you're a die-hard fan of the game or just looking for a unique and exciting dining experience, the Cheeki Breeki is the perfect place for you. Come join us and see if you have what it takes to survive in Tarkov.";
      this.p2.innerText =
        "Additionally, we offer an immersive virtual reality experience where you can experience Tarkov for yourself. You will be equipped with VR headsets and motion-sensing controllers, allowing you to move and interact in the game world. Explore the city, scavenge for supplies, and fight against enemy players as you try to make your escape. ";
      this.review1.innerText =
        '"I had an unforgettable dining experience at The Cheeki Breeki. The atmosphere was intense and the food was delicious. Highly recommend for anyone looking for something different."';
      this.review2.innerText =
        '"I was blown away by the level of detail in the decor and the immersive sound effects. It truly feels like you\'re in the Tarkov world. The DevilDog Mayo was especially delicious."';
      this.review3.innerText =
        "\"The VR experience was a game changer. I've never felt so immersed in a virtual world before. I can't wait to come back and play again.\"";
      this.review4.innerText =
        '"This restaurant is a must-visit for fans of the game. The attention to detail is impeccable and the VR experience is unlike anything I\'ve ever tried. Highly recommend."';
    },
    render() {
      this.body.appendChild(this.box1);
      this.box1.append(this.box1I, this.p1);
      this.body.appendChild(this.box2);
      this.box2.append(this.box2V, this.p2);
      this.box2V.appendChild(this.box2VSrc);
      this.body.appendChild(this.box3);
      this.box3.appendChild(this.box3V);
      this.box3V.appendChild(this.box3VSrc);
      this.body.appendChild(this.reviews);
      this.reviews.append(
        this.review1,
        this.review2,
        this.review3,
        this.review4
      );
    },
  };
  page.init();
}
