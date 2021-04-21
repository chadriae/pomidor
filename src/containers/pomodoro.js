import classnames from "classnames";
import Display from "../components/display";
import Tools from "../components/tools";

const Pomodoro = () => {
    const seconds = 1500;
    const running = true;

    const handleMinus = () => console.log("Minus")
    const handleReset = () => console.log("Reset")
    const handlePlayPause = () => console.log("play/pause")
    const handlePlus = () => console.log("plus")

    return (
        <div className={classnames("columns", "is-mobile", "is-centered")}>
            <div className={classnames("column", "is-half")}>
                <Display seconds={seconds} />
                <Tools
                    running={running}
                    onMinus={handleMinus}
                    onReset={handleReset}
                    onPlayPause={handlePlayPause}
                    onPlus={handlePlus}
                />
            </div>
        </div>
    )
};

export default Pomodoro;