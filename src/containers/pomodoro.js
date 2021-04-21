import classnames from "classnames"
import Display from "../components/display"

const Pomodoro = () => {
    const seconds = 1500;

    //TODO: add logic

    return (
        <div className={classnames("columns", "is-mobile", "is-centered")}>
            <div className={classnames("column", "is-half")}>
                <Display seconds={seconds} />
            </div>
        </div>
    )
};

export default Pomodoro;