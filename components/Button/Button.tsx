import type { ButtonProps } from '@/components/Button/Button.props';
import cn from 'classnames';
import styles from './Button.module.css';

export const Button = ({ appearance, children, className, ...props }: ButtonProps): JSX.Element => {
	return (
		<button className={cn(styles.button, {
			[styles.primary]: appearance === 'primary',
			[styles.ghost]: appearance === 'ghost',
		})}{...props}>{children}</button>
	);
};
