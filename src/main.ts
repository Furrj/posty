import { T_AllInfo, T_ClassInfo } from "./utils/types";
import { get_storage_data_on_init } from "./utils/dataHandlers";

const user_name = document.getElementById("user_name");
const classes_cont = document.getElementById("classes_cont");

async function main() {
    const allInfo: T_AllInfo = await get_storage_data_on_init();
    user_name.innerText = allInfo.user_name;
    for (const cl of allInfo.classes) {
        const class_box = document.createElement("div");
        class_box.classList.add("class_box");
        class_box.innerHTML = cl.class_name;
        classes_cont.appendChild(class_box);
    }
}

// MAIN
console.log("Posty Detected");
main();
