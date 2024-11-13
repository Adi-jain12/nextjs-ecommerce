import Link from 'next/link';

const page = () => {
	return (
		<div className="text-center space-y-6 mt-4">
			<h1 className="text-3xl font-semibold">Order placed succesfully!</h1>
			<Link href="" className="underline text-xl text-accent-500 inline-block">
				Manage your orders &rarr;
			</Link>
		</div>
	);
};

export default page;
