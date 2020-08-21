import image from "./assets/img.png";

export const model = [
  {
    type: "title",
    value: "Конструктор сайтов",
    options: {
      tag: "h2",
      styles: "background: #1E90FF; color: #FFA500; text-align: center;",
    },
  },
  {
    type: "image",
    value: image,
    options: {
      styles: "padding: 2rem 0; display: flex; justify-content: center;",
      alt: "my image",
      imageStyles: "width: 500px; height: auto;",
    },
  },
  {
    type: "text",
    value: "Создание сайтов при помощи конструктора",
    options: {
      styles: "background: #6A5ACD; color: #FFFAF0; text-align: center;",
    },
  },
  {
    type: "textColumns",
    value: ["Пример 1", "Пример 2", "Пример 3", "Пример 4"],
    options: {
      styles: "padding: 1rem;",
    },
  },
];
