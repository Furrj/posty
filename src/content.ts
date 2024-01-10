import { get_storage_data_on_init, handle_data } from "./utils/dataHandlers";

async function main(): Promise<void> {
    console.log("Running main()");
    const all_info = await get_storage_data_on_init();
    console.log(`init info: ${all_info.user_name}`);
    handle_data(all_info);
}

// Main
main();
