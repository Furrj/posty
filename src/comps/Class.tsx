import { T_ClassInfo } from "../utils/types";
import { h } from "start-dom-jsx";

type T_Props = {
    info: T_ClassInfo;
};

const Class = (props: T_Props) => {
    return <div>{props.info.class_name}</div>;
};

export default Class;
