import type { PProps } from '@/components/Tag/Tag.props';

import cn from 'classnames';
import styles from './Tag.module.css';

export const Tag = ({ size = 'm', children, color = 'ghost', href, className, ...props }: PProps): JSX.Element => {
	return (
		<div
			className={cn(styles.tag, className, {
				[styles.s]: size === 's',
				[styles.m]: size === 'm',
				[styles.l]: size === 'l',
				[styles.ghost]: color === 'ghost',
				[styles.red]: color === 'red',
				[styles.grey]: color === 'grey',
				[styles.green]: color === 'green',
				[styles.primary]: color === 'primary',
			})}
			{...props}
		>{
			href ? <a href={href}>{children}</a> : <>{children}</>
		}
		</div>
	);
};
