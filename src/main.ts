import { T_AllInfo, T_ClassInfo } from "./utils/types";
import { get_storage_data_on_init } from "./utils/dataHandlers";
import class_box from "./comps/class_box";

const user_name = document.getElementById("user_name");
const classes_cont = document.getElementById("classes_cont");

async function main() {
    const allInfo: T_AllInfo = await get_storage_data_on_init();

    user_name.innerText = allInfo.user_name;

    let id = 1;
    for (const cl of allInfo.classes) {
        const new_box = class_box(cl, id);
        id++;
        classes_cont.appendChild(new_box);
    }
}

// MAIN
console.log("Posty Detected");
main();
