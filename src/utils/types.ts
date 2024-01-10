export type T_AllInfo = {
    user_name: string;
    classes: T_ClassInfo[];
};

export const initAllInfo: T_AllInfo = {
    user_name: "",
    classes: [],
};

export type T_ClassInfo = {
    class_name: string;
};

export const initClassInfo: T_ClassInfo = {
    class_name: "",
};
