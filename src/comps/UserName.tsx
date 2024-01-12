import { h } from "start-dom-jsx";

type T_Props = {
    user_name: string;
};

const UserName = (props: T_Props): JSX.Element => {
    if (!props.user_name) {
        props.user_name = "Please go to Brightspace to initialize";
    }

    return <h1 id="user_name">{props.user_name}</h1>;
};

export default UserName;
