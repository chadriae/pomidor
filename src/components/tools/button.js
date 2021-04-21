import PropTypes from "prop-types";
import classnames from "classnames";

const Button = ({label, title, disabled=false, onClick}) => (
    <button
        className={classnames("button", "is-primary", "is-medium", "is-full-width", "is-link")}
        type={"button"}
        label={title|label}
        disabled={disabled}
        onClick={onClick}
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