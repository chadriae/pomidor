import PropTypes from "prop-types";

const Hello = ({name}) => <p>{`Hello, ${name}!`}</p>;

Hello.proptypes = {
    name: PropTypes.string.isRequired,
}

export default Hello;
