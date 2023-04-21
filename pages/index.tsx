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
			</main>
		</div>
	);
}
