import type { HtagProps } from '@/components/Htag/Htag.props';
import styles from './Htag.module.css';

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
	return (
		<>
			{tag === 'h1' && <h1 className={styles.h1}>{children}</h1>}
			{tag === 'h2' && <h2>{children}</h2>}
			{tag === 'h3' && <h3>{children}</h3>}
		</>
	);
};
