import image from "./assets/img.png";
import {
  TitleBlock,
  ImageBlock,
  TextBlock,
  TextColumnsBlock,
} from "./classes/blocks";

export const model = [
  new TitleBlock("Конструктор сайтов", {
    tag: "h2",
    styles: "background: #1E90FF; color: #FFA500; text-align: center;",
  }),

  new ImageBlock(image, {
    styles: "padding: 2rem 0; display: flex; justify-content: center;",
    alt: "my image",
    imageStyles: "width: 500px; height: auto;",
  }),

  new TextBlock("Создание сайтов при помощи конструктора", {
    styles: "background: #6A5ACD; color: #FFFAF0; text-align: center;",
  }),

  new TextColumnsBlock(["Пример 1", "Пример 2", "Пример 3", "Пример 4"], {
    styles: "padding: 1rem;",
  }),
];
