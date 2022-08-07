import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

//Ý nghĩa các prop truyền vào
//...passProps: tấst cả các props còn lại (để lấy đưa vào đầu ra Comp)
const Button = ({
    children,
    to,
    href,
    className,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) => {
    //Xác định tên DOM: button, a hay Link
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    // prop to nghĩa là link router dom,
    // prop href nghĩa là thẻ a, link ra ngoài
    // không truyền prop to hoặc href thì là button
    if (to) {
        props.to = to;
        Comp = 'Link';
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    // Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    //Xác định các class của DOM
    //[className]: className là các class truyền từ props className
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        rounded,
        disabled,
        small,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
};

export default Button;
