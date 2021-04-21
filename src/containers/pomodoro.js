import {useCallback, useState} from "react"
import {useTimer} from "../core/hooks/use-timer"

import classnames from "classnames";
import Display from "../components/display";
import Tools from "../components/tools";
import Modal from "../components/modal";

import {SESSION_DURATION} from "../core/constants"

const Pomodoro = () => {
    const [showModal, setShowModal] = useState(false);

    const [{running, seconds}, {setRunning, setSeconds}] = useTimer(
        SESSION_DURATION,
        false,
        () => setShowModal(true));

    const handleMinus = useCallback(() => setSeconds(value => Math.max(value - 60, 0)), [setSeconds]);
    const handleReset = useCallback(() => setSeconds(SESSION_DURATION), [setSeconds]);
    const handlePlayPause = useCallback(() => setRunning(val => !val), [setRunning]);
    const handlePlus = useCallback(() => setSeconds( value => value + 60 ), [setSeconds]);

    const handleCloseModal = useCallback(() => {
        setShowModal(false);
        handleReset();
    }, [setShowModal, handleReset]);
    const handleRestartModal = useCallback(() => {
        handleCloseModal();
        handlePlayPause(); 
    },[handleCloseModal, handlePlayPause])


    return (
        <div className={classnames("columns", "is-mobile", "is-centered")}>
            <div className={classnames("column", "is-half", "is-centered")}>
                <Display seconds={seconds} />
                <Tools
                    running={running}
                    onMinus={handleMinus}
                    onReset={handleReset}
                    onPlayPause={handlePlayPause}
                    onPlus={handlePlus}
                />
            </div>
            {showModal && <Modal onClose={handleCloseModal} onRestart={handleRestartModal} />}
        </div>
    )
};

export default Pomodoro;