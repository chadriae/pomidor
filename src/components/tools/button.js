import PropTypes from "prop-types";
import classnames from "classnames";

const Button = ({label, title, disabled=false, onClick, ...props}) => (
    <button
        className={classnames("button", "is-link", "is-medium", "is-fullwidth")}
        type={"button"}
        label={title|label}
        disabled={disabled}
        onClick={onClick}
        {...props}
    >
        {label}
    </button>
)

Button.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired
}

export default Button;