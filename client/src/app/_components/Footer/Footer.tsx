import Link from 'next/link';
import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaSquareInstagram } from 'react-icons/fa6';
import { Squada_One } from 'next/font/google';
import { Rubik_Mono_One } from 'next/font/google';
import Image from 'next/image';
// import appDownload from '../../../../public/appDownload.png';

const rubikMonoOne = Rubik_Mono_One({
	weight: '400',
	subsets: ['latin'],
});

const squadaOne = Squada_One({
	weight: '400',
	subsets: ['latin'],
});

type Props = {};

const Footer = (props: Props) => {
	return (
		<div className="py-12 text-base bg-primary-150">
			<div className="px-10 sm:px-20 flex justify-between items-center border-gray-500 border-b-[1.5px] pb-10">
				<div className="flex flex-wrap gap-x-6 gap-y-4">
					<FaSquareInstagram size={20} />
					<FaXTwitter size={20} />
				</div>
				{/* <Image
					src={appDownload}
					height={280}
					width={280}
					alt="download"
					className="bg-red-700"
				/> */}
			</div>
			<footer className="px-10 sm:px-20 py-10 flex flex-col md:flex-row gap-x-2">
				<div className="pr-12 grow">
					<Link
						href="/"
						className={`${squadaOne.className} text-5xl font-semibold`}
					>
						KERNEL
					</Link>
					<p className="grow py-4">&copy; 2024 by 🫅</p>
				</div>
				<div className="lg:justify-end flex flex-col sm:flex-row md:flex-wrap gap-y-6 gap-x-8">
					<div className="flex flex-col space-y-4">
						<span className={`${rubikMonoOne.className}`}>About</span>
						<ul className="flex flex-col text-sm space-y-4">
							<li>About Us</li>
							<li>Contact</li>
							<li>Contact</li>
						</ul>
					</div>
					<div className="flex flex-col space-y-4">
						<span className={`${rubikMonoOne.className}`}>Help</span>
						<ul className="flex flex-col text-sm space-y-4">
							<li>Help center</li>
						</ul>
					</div>
					<div className="flex flex-col space-y-4">
						<span className={`${rubikMonoOne.className}`}>Legal</span>
						<ul className="flex flex-col text-sm space-y-4">
							<li>Terms & Conditions</li>
							<li>Privacy Policy</li>
						</ul>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
