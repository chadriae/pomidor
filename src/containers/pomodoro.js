import classnames from "classnames"
import Hello from "../components/hello"

const Pomodoro = () => {

    const name = "Pomidor"

    //TODO: add logic

    return (
        <div className={"columns", "is-mobile", "is-centered"}>
            <div className={"column", "is-half"}>
                <Hello name={name} />
            </div>
        </div>
    )
};

export default Pomodoro;