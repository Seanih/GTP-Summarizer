import Demo from '@/components/Demo';
import Hero from '@/components/Hero';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div>
			<Head>
				<title>AI Summarizer</title>
			</Head>

			<main>
				<div className='main'>
					<div className='gradient' />
				</div>

				<div className='app'>
					<Hero />
					<Demo />
				</div>
			</main>
		</div>
	);
}
