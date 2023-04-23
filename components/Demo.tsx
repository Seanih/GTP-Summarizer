import Image from 'next/image';
import { useState, useEffect, use, FormEvent } from 'react';
import { copy, linkIcon, loader, tick } from '../public/assets';

function Demo() {
	const [article, setArticle] = useState({ url: '', summary: '' });

	const handleSubmit = async (e: FormEvent) => {
		alert('submitted');
	};

	return (
		<section className='w-full max-w-xl mt-16'>
			{/* Search */}
			<div className='flex flex-col w-full gap-2'>
				<form
					className='relative flex items-center justify-center'
					onSubmit={handleSubmit}
				>
					<Image
						src={linkIcon}
						alt='link_icon'
						className='absolute left-0 w-5 my-2 ml-3'
					/>
					<input
						type='url'
						placeholder='Enter URL'
						value={article.url}
						onChange={e => setArticle({ ...article, url: e.target.value })}
						required
						className='url_input peer'
					/>
					<button
						type='submit'
						className='submit_btn peer-focus:border-gray-700 peer-focus-within:text-gray-700'
					>
						↵
					</button>
				</form>
				{/* Browser URL History */}
			</div>
		</section>
	);
}
export default Demo;
