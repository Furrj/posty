import { T_ClassInfo } from "../utils/types";

const class_box = (cl: T_ClassInfo, id: number): HTMLDivElement => {
    const class_box = document.createElement("div");
    class_box.classList.add("class_box");
    class_box.innerHTML = cl.class_name;
    class_box.id = `class_box_${id}`;

    const progress_box = document.createElement("div");
    progress_box.classList.add("progress_box");
    class_box.appendChild(progress_box);

    const post_check = document.createElement("input");
    post_check.type = "checkbox";
    post_check.innerHTML = "Post";
    post_check.classList.add("check");
    post_check.id = `post_check_${id}`;
    post_check.checked = true;
    progress_box.appendChild(post_check);

    const label = document.createElement("label");
    label.htmlFor = `post_check_${id}`;
    label.classList.add("label");
    label.innerText = "Post";
    progress_box.appendChild(label);
    class_box.appendChild(progress_box);

    return class_box;
};

export default class_box;
