import { T_ClassInfo } from "../utils/types";
import { h } from "start-dom-jsx";

import Discussion from "./Discussion";

type T_Props = {
    info: T_ClassInfo;
};

const Class = (props: T_Props) => {
    return (
        <div class="class_box">
            {props.info.class_name}
            <Discussion info={props.info} />
        </div>
    );
};

export default Class;
