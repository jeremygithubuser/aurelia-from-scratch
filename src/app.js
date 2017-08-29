import {inject} from "aurelia-framework";
import $ from "jquery";
import "bootstrap";
/* start-non-standard */
@inject()
/* end-non-standard */
export class App {
    constructor() {
        this.user = { name: "jim" };
    }
    configureRouter(config, router) {
        this.router = router;       
        this.router.navTitle = "Aurelia from scratch";
        config.map([
            { route: ["/", "welcome"], moduleId: "welcome", title: "Welcome", nav: true, name: "home" },
            { route: "about", moduleId: "about", title: "About", nav: true }
        ]);
    }
    activate() {

    }
    logout(){
        alert("GoodBye" + this.user.name);
    }
}