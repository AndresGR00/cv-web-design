import "./mainFirstDecoration.css";

const japaneseSVG = `<svg class="change-color" xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" viewBox="0 0 70 460">
    <path d="m12.14 61.11.61-.36c12.51-7.22 19.85-20.47 22.43-40.48a2.38 2.38 0 0 0 1.69-1.86l.13-1-8.78-1-.1 1C26.17 37 19.67 49.21 7.66 55.81l-1.55.85 1.53.89a29.46 29.46 0 0 1 3.64 2.82Z" class="cls-1"/>
    <path d="m40.79 24.86-1.26.92 1.37.76a30.5 30.5 0 0 1 4.1 2.74l.64.56.65-.54A61.05 61.05 0 0 0 62.92 7a2.25 2.25 0 0 0 1-.93l.44-.88-5.69-3-1 .46H4.35v6.74h49.39a41.67 41.67 0 0 1-12.95 15.47ZM6.35 95c6.19 2.13 14.73 5.76 20.1 9.56l.88.62L31 99.1l-.78-.53c-5.82-4-14.68-7.59-21-9.61l-.79-.25-3.18 6ZM64 99.78l-.84-.43a26.89 26.89 0 0 1-4.36-2.75l-1-.83-.54 1.23c-8.34 19.25-24.8 32.8-48.93 40.28l-1.3.4 5.06 7.32.8-.45a3.21 3.21 0 0 0 1.32-1.7c23.35-7.92 40.43-22.49 49.41-42.17ZM46.56 186.58l.61.89 4.2-3.43-.53-.76A61 61 0 0 0 41 172.84l-.66-.55-4 3.59.92.74a58.31 58.31 0 0 1 9.3 9.96ZM51 200.88a243.06 243.06 0 0 0-26.33-11.69l-.39-.15v-17.1a2.43 2.43 0 0 0 1.81-2.15l.1-1-9.19-.56v62.62h7.22v-34.3a253.2 253.2 0 0 1 23 10.76l.84.46 3.82-6.4ZM56.61 181.42l4-3.46-.5-.73a59.8 59.8 0 0 0-9.74-10.39l-.65-.54-4 3.49.92.76a63.73 63.73 0 0 1 9.37 10ZM22.64 315.9l.44.67.75-.29c17.51-6.77 25.66-18.43 25.66-36.68v-21.35a2.13 2.13 0 0 0 1.67-1.9l.1-1-8.79-.55v24.8c0 10.48-2.61 23.48-23 31l-1.7.63 1.44 1.1a19.67 19.67 0 0 1 3.43 3.57ZM19.08 258.46l-8.73-.56v35.94h6.94v-32.4A2.3 2.3 0 0 0 19 259.5ZM54.16 389.54H39.35c1.22-7.83 3.19-21.33 4.07-28.32a1.8 1.8 0 0 0 .88-1.1l.2-.79-4.5-2.21-1.07.36H10.14v6h26.44c-.72 6.91-2.35 19-3.44 26H4.63v6h49.53ZM5.19 450l.56 8.42 1.08-.16A4.41 4.41 0 0 0 9.4 457h56.05v-7Z" class="cls-1"/>
</svg>`;

const blackLetter = `<svg class="change-color" xmlns="http://www.w3.org/2000/svg" data-name="Capa 1" viewBox="0 0 301.43 301.43">
<path d="M133.54 116.21H34.06v181.72H12.18V4.14h121.36Zm-21.22-94.5H34.06v29.18h78.26ZM34.06 98.64h78.26V67.47H34.06ZM240.64 214.7h-47.08v76.59h-20.23V214.7H122.6c-2.33 21.55-12.94 57.69-45.76 79.58a75.19 75.19 0 0 0-14.93-13.93c29.18-18.24 38.8-46.09 40.79-65.65H59.26v-18.9h44.1V157H65.89v-18.9h167.46V157h-39.79v38.8h47.08Zm-117.38-18.9h50.07V157h-50.07ZM289.06 4.14v263.28c0 28.51-12.61 29.84-64.66 29.84-1-6.3-4-16.58-7.3-22.88 11.27.33 22.22.67 30.51.67 17.57 0 19.56 0 19.56-7.63V116.55H164.71V4.14Zm-21.89 17.57h-80.91v29.18h80.91ZM186.26 99h80.91V67.47h-80.91Z"/>
</svg>`;

const blackCircle = `<svg class="change-color" xmlns="http://www.w3.org/2000/svg" data-name="Capa 1" viewBox="0 0 397.43 397.43">
<path d="M198.62 391.53C92.47 391.53 6.12 305.18 6.12 199S92.47 6.53 198.62 6.53 391.12 92.89 391.12 199s-86.36 192.53-192.5 192.53Zm0-380C95.23 11.53 11.12 95.64 11.12 199s84.11 187.5 187.5 187.5 187.5-84.11 187.5-187.5S302 11.53 198.62 11.53Z"/>
</svg>`;

export const FirstDecoration = () => {
  const main = document.querySelector("main");
  const firstDecorationContainer = document.createElement("div");
  firstDecorationContainer.className = "cv-first-decoration-container";

  const japaneseTitle = document.createElement("div");
  japaneseTitle.className = "cv-main-japanese-title";
  japaneseTitle.innerHTML = japaneseSVG;

  const redCircle = document.createElement("img");
  redCircle.className = "cv-main-red-circle";
  redCircle.src =
    "https://res.cloudinary.com/dbinlquvz/image/upload/v1701892933/4_CV_Web_Design/Circulo_rojo_Mesa_de_trabajo_1_dazdyr.png";

  const blackLetterSVG = document.createElement("div");
  blackLetterSVG.className = "cv-main-black-letter";
  blackLetterSVG.innerHTML = blackLetter;

  const blackCircleSVG = document.createElement("div");
  blackCircleSVG.className = "cv-main-black-circle";
  blackCircleSVG.innerHTML = blackCircle;

  firstDecorationContainer.appendChild(japaneseTitle);
  firstDecorationContainer.appendChild(redCircle);
  firstDecorationContainer.appendChild(blackLetterSVG);
  firstDecorationContainer.appendChild(blackCircleSVG);
  main.appendChild(firstDecorationContainer);
};


