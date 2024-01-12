import { T_ClassInfo } from "../utils/types";
import { h } from "start-dom-jsx";

type T_Props = {
    info: T_ClassInfo;
};

const Class = (props: T_Props) => {
    return (
        <div class="class_box">
            {props.info.class_name}
            <div id="progress_cont">
                <div class="progress_box">
                    <input type="checkbox" id={`post_check_${props.info.id}`} />
                    <label htmlFor={`post_check_${props.info.id}`}>Post</label>
                </div>
                <div class="progress_box">
                    <input
                        type="checkbox"
                        id={`response_1_check_${props.info.id}`}
                    />
                    <label htmlFor={`response_1_check_${props.info.id}`}>
                        Response 1
                    </label>
                </div>
                <div class="progress_box">
                    <input
                        type="checkbox"
                        id={`response_2_check_${props.info.id}`}
                    />
                    <label htmlFor={`response_2_check_${props.info.id}`}>
                        Post
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Class;
