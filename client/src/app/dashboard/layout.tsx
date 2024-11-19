import React, { ReactNode } from 'react';
import DashboardNavigation from '../_components/Dashboard/DashboardNavigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { CircleUser, MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type Props = {
	children: ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
	return (
		<div className="flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
			<header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-white">
				<nav className="hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
					<DashboardNavigation />
				</nav>

				<Sheet>
					<SheetTrigger asChild>
						<Button
							className="shrink-0 md:hidden"
							variant="outline"
							size="icon"
						>
							<MenuIcon className="h-5 w-5" />
						</Button>
					</SheetTrigger>
					<SheetContent side="left">
						<nav className="flex flex-col gap-6 text-lg font-medium mt-5">
							<DashboardNavigation />
						</nav>
					</SheetContent>
				</Sheet>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button className="rounded-full" variant="secondary" size="icon">
							<CircleUser className="w-5 h-5" />
						</Button>
					</DropdownMenuTrigger>

					<DropdownMenuContent align="end">
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Logout</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</header>

			<main className="my-5">{children}</main>
		</div>
	);
};

export default DashboardLayout;
