import Link from 'next/link';
import classNames from 'classnames/bind';
import { ReactNode, MouseEventHandler, ElementType } from 'react';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

type ButtonType = {
  to?: string;
  href?: string;
  // button types
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  disabled?: boolean;
  disabledText?: boolean;
  rounded?: boolean;
  rounded_sm?: boolean;
  // button size
  small?: boolean;
  large?: boolean;
  className?: string;
  // icon button
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLElement>;
  // other props (event, etc.)
  [key: string]: unknown;
};

function Button({
  to,
  href, //link
  // button types
  primary = false,
  secondary = false,
  outline = false,
  disabled = false,
  disabledText = false,
  rounded = false,
  rounded_sm = false,
  // button size
  small = false,
  large = false,
  className,
  // icon button
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...passProps // pass event
}: ButtonType) {
  let Comp: ElementType = 'button';
  const props: Record<string, unknown> = {
    onClick,
    ...passProps,
  };

  // remove event listener when disabled
  if (disabled) {
    // delete props.onClick
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  // chuyển đổi thẻ 'a' và Link
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    [className || '']: !!className, // truy cập thuộc tính
    primary,
    secondary,
    outline,
    disabled,
    disabledText,
    rounded,
    rounded_sm,
    small,
    large,
  });

  return (
    <>
      <Comp className={classes} {...props}>
        {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
        <span className={cx('title')}>{children}</span>
        {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Comp>
    </>
  );
}

export default Button;
