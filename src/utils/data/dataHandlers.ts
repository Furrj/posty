import { T_AllInfo, initAllInfo } from "../types";
import {
    get_user_name_from_page,
    get_class_info_from_page,
} from "./get_from_page";

export async function get_storage_data_on_init(): Promise<T_AllInfo> {
    let all_info: T_AllInfo = deep_copy(initAllInfo);

    try {
        const raw_storage = await chrome.storage.local.get(["data"]);
        if (raw_storage.data !== undefined) {
            all_info = JSON.parse(raw_storage.data);
        }
        return all_info;
    } catch (err: any) {
        throw new Error(err);
    }
}

export async function handle_data(all_info: T_AllInfo): Promise<void> {
    // User_name
    if (!all_info.user_name) {
        all_info.user_name = get_user_name_from_page();
    }

    // Current class
    const curr_class = get_class_info_from_page();
    if (
        curr_class.class_name &&
        !JSON.stringify(all_info).includes(curr_class.class_name)
    ) {
        curr_class.id = all_info.classes.length + 1;
        all_info.classes.push(curr_class);
    }

    await chrome.storage.local.set({ data: JSON.stringify(all_info) });
}

export function deep_copy<T>(original: T): T {
    return JSON.parse(JSON.stringify(original));
}
