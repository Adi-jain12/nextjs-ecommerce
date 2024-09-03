import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import MainWrapper from '../MainWrapper';
import { buttonVariants } from '../ui/button';
import { Squada_One } from 'next/font/google';

const squadaOne = Squada_One({
	weight: '400',
	subsets: ['latin'],
});

const Navbar = async () => {
	const user = undefined;

	const isAdmin = false;

	return (
		<nav className="z-[100] inset-x-0 top-0 w-full border-b border-t border-slate-200 py-6 first-letter:backdrop-blur-lg transition-all">
			<MainWrapper>
				<div className="flex text-3xl h-10 items-center justify-between">
					<Link
						href="/"
						className={`${squadaOne.className} text-5xl flex z-40 font-semibold`}
					>
						KERNEL
					</Link>

					<div className="h-full flex items-center space-x-4">
						{user ? (
							<>
								<Link
									href="/api/auth/logout"
									className={buttonVariants({
										size: 'sm',
										variant: 'ghost',
									})}
								>
									Sign out
								</Link>
								{isAdmin ? (
									<Link
										href="/dashboard"
										className={buttonVariants({
											size: 'sm',
											variant: 'ghost',
										})}
									>
										Dashboard ✨
									</Link>
								) : null}
								<Link
									href="/configure/upload"
									className={buttonVariants({
										size: 'sm',
										className: 'hidden sm:flex items-center gap-1',
									})}
								>
									Create case
									<ArrowRight className="ml-1.5 h-5 w-5" />
								</Link>
							</>
						) : (
							<>
								<Link
									href="/api/auth/register"
									className={buttonVariants({
										size: 'sm',
										variant: 'ghost',
									})}
								>
									Sign up
								</Link>

								<Link
									href="/api/auth/login"
									className={buttonVariants({
										size: 'sm',
										variant: 'ghost',
									})}
								>
									Login
								</Link>

								<div className="h-8 w-px bg-zinc-200 hidden sm:block" />

								<Link
									href="/configure/upload"
									className={buttonVariants({
										size: 'sm',
										className: 'hidden sm:flex items-center gap-1',
									})}
								>
									Create case
									<ArrowRight className="ml-1.5 h-5 w-5" />
								</Link>
							</>
						)}
					</div>
				</div>
			</MainWrapper>
		</nav>
	);
};

export default Navbar;
