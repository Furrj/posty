import { T_ClassInfo, initClassInfo } from "./types";
import { deep_copy } from "./dataHandlers";

export function get_user_name_from_page(): string {
    console.log("get_user_name_from_page()");
    const el: HTMLElement = document.querySelector(
        "body > header > nav > d2l-navigation > d2l-navigation-main-header > div.d2l-navigation-header-right > div.d2l-navigation-s-personal-menu > d2l-navigation-dropdown-button-custom > span > span"
    ) as HTMLElement;
    if (el) {
        return el.innerHTML;
    } else {
        return "";
        console.log("Could not find name on page");
    }
}

export function get_class_info_from_page(): T_ClassInfo {
    const class_info: T_ClassInfo = deep_copy(initClassInfo);
    const el = document.querySelector(
        "body > header > nav > d2l-navigation > d2l-navigation-main-header > div.d2l-navigation-header-left > div.d2l-navigation-s-header-logo-area > div > a"
    );

    if (el) {
        class_info.class_name = el.innerHTML;
    } else {
        console.log("Couldn't find class on page");
    }

    return class_info;
}
