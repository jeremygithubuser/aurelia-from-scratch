import {inject} from "aurelia-framework";
import $ from "jquery";
import "bootstrap";
/* start-non-standard */
@inject()
/* end-non-standard */
export default class Welcome {
    constructor() {
        this.message = "Welcome to the aurelia from scratch website!";
    }
    activate() {

    }
}