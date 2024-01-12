import { T_ClassInfo } from "../utils/types";

const class_box = (cl: T_ClassInfo, id: number): HTMLDivElement => {
    const class_box = document.createElement("div");
    class_box.classList.add("class_box");
    class_box.innerHTML = cl.class_name;
    class_box.id = `class_box_${id}`;

    const progress_cont = document.createElement("div");
    progress_cont.id = "progress_cont";
    class_box.appendChild(progress_cont);

    const progress_box = document.createElement("div");
    progress_box.classList.add("progress_box");
    progress_cont.appendChild(progress_box);

    const post_check = document.createElement("input");
    post_check.type = "checkbox";
    post_check.classList.add("check");
    post_check.id = `post_check_${id}`;
    progress_box.appendChild(post_check);

    const label = document.createElement("label");
    label.htmlFor = `post_check_${id}`;
    label.classList.add("label");
    label.innerText = "Post";
    progress_box.appendChild(label);

    const progress_box_2 = document.createElement("div");
    progress_box_2.classList.add("progress_box");
    progress_cont.appendChild(progress_box_2);

    const response_1_check = document.createElement("input");
    response_1_check.type = "checkbox";
    response_1_check.classList.add("check");
    response_1_check.id = `response_1_check_${id}`;
    progress_box_2.appendChild(response_1_check);

    const label_2 = document.createElement("label");
    label_2.htmlFor = `response_1_check_${id}`;
    label_2.classList.add("label");
    label_2.innerText = "Response 1";
    progress_box_2.appendChild(label_2);

    //3
    const progress_box_3 = document.createElement("div");
    progress_box_3.classList.add("progress_box");
    progress_cont.appendChild(progress_box_3);

    const response_2_check = document.createElement("input");
    response_2_check.type = "checkbox";
    response_2_check.classList.add("check");
    response_2_check.id = `response_2_check_${id}`;
    progress_box_3.appendChild(response_2_check);

    const label_3 = document.createElement("label");
    label_3.htmlFor = `response_2_check_${id}`;
    label_3.classList.add("label");
    label_3.innerText = "Response 2";
    progress_box_3.appendChild(label_3);

    return class_box;
};

export default class_box;
