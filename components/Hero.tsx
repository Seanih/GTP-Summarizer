import { logo } from '../public/assets';
import Image from 'next/image';

function Hero() {
	return (
		<header className='flex flex-col items-center justify-center w-full'>
			<nav className='flex items-center justify-between w-full pt-3 mb-10'>
				<Image src={logo} alt='logo' className='object-contain w-28' />

				<button
					type='button'
					onClick={() => window.open('https://github.com/seanih')}
					className='black_btn'
				>
					Github
				</button>
			</nav>

			<h1 className='head_text'>
				Summarize articles with <br /> <span>OpenAI GPT-4</span>
			</h1>
		</header>
	);
}
export default Hero;
