import { T_AllInfo, T_ClassInfo } from "./utils/types";
import { get_storage_data_on_init } from "./utils/dataHandlers";

const user_name = document.getElementById("user_name");

async function main() {
    const allInfo: T_AllInfo = await get_storage_data_on_init();
    user_name.innerHTML = allInfo.user_name;
}

// MAIN
console.log("Posty Detected");
main();
