import { T_AllInfo, T_ClassInfo } from "./utils/types";
import { get_storage_data_on_init } from "./utils/dataHandlers";
import { h } from "start-dom-jsx";

// Comps
import UserName from "./comps/UserName";

async function main(): Promise<void> {
    const root = document.getElementById("root");
    const allInfo: T_AllInfo = await get_storage_data_on_init();

    //user_name.innerText = allInfo.user_name;
    console.log(`Name: ${allInfo.user_name}`);

    // let id = 1;
    // for (const cl of allInfo.classes) {
    //     const new_box = class_box(cl, id);
    //     id++;
    //     classes_cont.appendChild(new_box);
    // }

    root.appendChild(<UserName user_name={allInfo.user_name} />);
}

// MAIN
console.log("Posty Detected");
main();
