import { T_AllInfo, T_ClassInfo } from "./utils/types";
import { get_storage_data_on_init } from "./utils/data/dataHandlers";
import { h } from "start-dom-jsx";

// Utils
import render from "./utils/ui/render";

// Comps
import UserName from "./comps/UserName";
import ClassesCont from "./comps/ClassesCont";

async function main(): Promise<void> {
    const root = document.getElementById("root");
    const allInfo: T_AllInfo = await get_storage_data_on_init();

    console.log(`Name: ${allInfo.user_name}`);

    // let id = 1;
    // for (const cl of allInfo.classes) {
    //     const new_box = class_box(cl, id);
    //     id++;
    //     classes_cont.appendChild(new_box);
    // }

    render(
        root,
        <UserName user_name={allInfo.user_name} />,
        <ClassesCont classes={allInfo.classes} />
    );
}

// MAIN
console.log("Posty Detected");
main();
