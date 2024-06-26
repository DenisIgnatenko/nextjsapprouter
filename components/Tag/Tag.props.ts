import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: 'm' | 'l' | 's';
	children: React.ReactNode;
	color: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
	href?: string;
}

