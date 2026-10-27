import Wrapper from "./constructor/Wrapper.js";
import content from "./modules/content.js";
import sidebar from "./modules/sidebar.js";
import footer from "./modules/footer.js";
import header from "./modules/header.js";

new Wrapper('#root', [header, sidebar, content, footer]);
