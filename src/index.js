import { Router } from "./router.js";

const router = new Router();

router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/explore", "/pages/explore.html");
router.add("/error", "/pages/404.html");

//var = new classe
//classe + meotodo adicionar
//classe + handle

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();

/*window.onpopstate = () = classe.handle 
window.metodo = () => var.metodo
*/
