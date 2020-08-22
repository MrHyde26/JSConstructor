import { model } from "./model.js";
import { Site } from "./classes/site.js";
import "./styles/main.css";

const site = new Site("#site");

site.render(model);
/* const generate = templates[block.type];
  if (generate) {
    const html = generate(block);
    site.insertAdjacentHTML("beforeend", html);
  } */
/* if (block.type === "title") {
    html = title(block);
  } else if (block.type === "text") {
    html = text(block);
  } else if (block.type === "textColumns") {
    html = textColumns(block);
  } */
