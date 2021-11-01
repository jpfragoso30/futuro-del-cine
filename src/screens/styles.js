import { createUseStyles } from 'react-jss';

const screenStyles = createUseStyles({
    screen: (props) => ({
        position: 'absolute',
        top: props.top,
        right: props.right,
        bottom: props.bottom,
        left: props.left,
    }),
});

export default screenStyles;