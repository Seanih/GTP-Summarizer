import '@/styles/globals.css';
import { Roboto } from 'next/font/google';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../services/store';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<div className={roboto.className}>
				<Component {...pageProps} />
			</div>
		</Provider>
	);
}
