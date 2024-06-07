import Image from 'next/image';
import saul from '/public/saul.png';

const Page: React.FC = () => {
	return (
		<div className='size-full'>
			<Image src={saul} alt='none' sizes='100vw' fill className='object-fill' />
		</div>
	);
};
export default Page;
