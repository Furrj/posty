import { get_storage_data_on_init, handle_data } from "./utils/dataHandlers";

async function main(): Promise<void> {
    console.log("Running main()");
    try {
        const all_info = { ...(await get_storage_data_on_init()) };
        console.log(`init info: ${all_info}`);
        handle_data(all_info);
    } catch (error) {
        console.log(error);
    }
}

// Main
main();
