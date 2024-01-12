import { T_ClassInfo } from "../utils/types";
import { h } from "start-dom-jsx";
import Class from "./Class";

type T_Props = {
    classes: T_ClassInfo[];
};

const ClassesCont = (props: T_Props) => {
    const classes: JSX.Element[] = [];

    for (const cl of props.classes) {
        classes.push(<Class info={cl} />);
    }

    return <div id="classes_cont">{classes}</div>;
};

export default ClassesCont;
