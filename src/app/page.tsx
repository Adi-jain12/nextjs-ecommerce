import MainWrapper from '@/app/_components/MainWrapper';
import Mobile from '@/app/_components/Mobile';
import { Check, Star } from 'lucide-react';

export default function Home() {
	return (
		<div className="">
			<section>
				<MainWrapper className="pb-24 pt-0 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
					<div className="col-span-2 px-6 lg:px-0 lg:pt-4">
						<div className="mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
							<h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-4xl md:text-6xl lg:text-7xl">
								Unleash Your <span className="bg-emerald-500">Creativity</span>:
								Personalize Anything and Everything!
							</h1>
							<p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
								Capture Your Favorite Memories with Customizable Products.
								Kernel Lets You Protect What Matters Most, Not Just Your Items.
							</p>

							<ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
								<div className="space-y-2">
									<li className="flex gap-1.5 items-center text-left">
										<Check className="h-5 w-5 shrink-0 text-emerald-600" />
										High quality, durable material
									</li>
									<li className="flex gap-1.5 items-center text-left">
										<Check className="h-5 w-5 shrink-0 text-emerald-600" />5
										year print guarantee
									</li>
									<li className="flex gap-1.5 items-center text-left">
										<Check className="h-5 w-5 shrink-0 text-emerald-600" />
										Modern iPhone models supported
									</li>
								</div>
							</ul>

							<div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
								<div className="flex -space-x-4">
									<img
										className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
										src="/users/user-1.png"
										alt="user image"
									/>
									<img
										className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
										src="/users/user-2.png"
										alt="user image"
									/>
									<img
										className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
										src="/users/user-3.png"
										alt="user image"
									/>
									<img
										className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
										src="/users/user-4.jpg"
										alt="user image"
									/>
									<img
										className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
										src="/users/user-5.jpg"
										alt="user image"
									/>
								</div>

								<div className="flex flex-col justify-between items-center sm:items-start">
									<div className="flex gap-0.5">
										<Star className="h-4 w-4 text-green-600 fill-green-600" />
										<Star className="h-4 w-4 text-green-600 fill-green-600" />
										<Star className="h-4 w-4 text-green-600 fill-green-600" />
										<Star className="h-4 w-4 text-green-600 fill-green-600" />
										<Star className="h-4 w-4 text-green-600 fill-green-600" />
									</div>

									<p>
										<span className="font-semibold">1.250</span> happy customers
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
						<div className="relative md:max-w-xl">
							<img
								src="/your-image.png"
								className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
							/>
							<img
								src="/line.png"
								className="absolute w-20 -left-6 -bottom-6 select-none"
							/>
							<Mobile className="w-64" imgSrc="/testimonials/1.jpg" />
						</div>
					</div>
				</MainWrapper>
			</section>
		</div>
	);
}
