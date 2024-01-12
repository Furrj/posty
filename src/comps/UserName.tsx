import { h } from "start-dom-jsx";

const UserName = (props: any): JSX.Element => {
    if (!props.user_name) {
        props.user_name = "Please go to Brightspace to initialize";
    }

    return <h1 id="user_name">{props.user_name}</h1>;
};

export default UserName;
