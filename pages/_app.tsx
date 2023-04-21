import '@/styles/globals.css';
import { Roboto } from 'next/font/google';
import type { AppProps } from 'next/app';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={roboto.className}>
			<Component {...pageProps} />
		</div>
	);
}
