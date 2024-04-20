import { Button, Htag, P, Tag } from '@/components';
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
	title: 'Исправленные данные',
};

export default function Home(): JSX.Element {
	return <>
		<main className={styles.main}>
			<div className={styles.description}>
				<Htag tag='h1'>H1 заголовок</Htag>
				<Htag tag='h2'>H1 заголовок</Htag>
				<Htag tag='h3'>H1 заголовок</Htag>
				<Button appearance={'primary'}>Кнопка</Button>
				<Button appearance={'ghost'}>Кнопка</Button>
				<P size={'l'}>Большой</P>
				<P size={'m'}>Средний</P>
				<P size={'s'}>Маленький</P>
				<Tag size='m' color='red'>Средний</Tag>
				<Tag size='s'>Маленький</Tag>
				<Tag size='l' color='green'>Большой</Tag>
				<Tag color='primary'>Большой</Tag>
			
			</div>
		</main>
	</>;
	
}
