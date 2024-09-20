import React from 'react';

const page = () => {
	return (
		<div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
			<div className="col-span-3">
				<h1 className="text-4xl mb-10 text-accent-400 font-medium">
					Welcome to Kernel
				</h1>

				<div className="space-y-8"></div>
			</div>

			<div className="col-span-2">
				<Image
					src="https://s3-wildoasis.s3.ap-south-1.amazonaws.com/about-1.jpg"
					alt="Family sitting around a fire pit in front of cabin"
					placeholder="blur"
					quality={80}
				/>
			</div>

			<div className="relative aspect-square col-span-2">
				<Image
					src="https://s3-wildoasis.s3.ap-south-1.amazonaws.com/about-2.jpg"
					alt="Family that manages The Wild Oasis"
					placeholder="blur"
					quality={80}
				/>
			</div>

			<div className="col-span-3">
				<h1 className="text-4xl mb-10 text-accent-400 font-medium">
					Managed by Kernel since 1998
				</h1>

				<div className="space-y-8">
					<div>
						<Link
							href="/"
							className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
						>
							Explore our ecommerce site KERNEL
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
