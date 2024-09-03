import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/app/_components/Navbar/Navbar';
import { Rubik } from 'next/font/google';
import Footer from '@/app/_components/Footer/Footer';

const rubik = Rubik({
	weight: ['300', '400', '500', '700', '900'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Kernel',
	description: 'Ecommerce website',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${rubik.className} bg-accent-50`}>
				<div className="text-center py-2 text-xs font-bold">
					<span>
						Note: Due to postal delays, shipping is taking a bit longer than
						usual. International orders may also be delayed at your customs
						office. We appreciate your support and patience!
					</span>
				</div>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
