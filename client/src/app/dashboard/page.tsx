import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { IndianRupee, PartyPopper, ShoppingBag, User2 } from 'lucide-react';
import React from 'react';

type Props = {};

const page = (props: Props) => {
	return (
		<>
			<div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle>Total Revenue</CardTitle>
						<IndianRupee className="h-5 w-5 text-emerald-600" />
					</CardHeader>

					<CardContent>
						<p className="text-2xl font-bold">₹100.00</p>
						<p className="text-xs text-muted-foreground">
							Based on 100 Charges
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle>Total Sales</CardTitle>
						<ShoppingBag className="h-5 w-5 text-blue-600" />
					</CardHeader>

					<CardContent>
						<p className="text-2xl font-bold">+50</p>
						<p className="text-xs text-muted-foreground">
							Total Sales on Kernel
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle>Total Products</CardTitle>
						<PartyPopper className="h-5 w-5 text-orange-600" />
					</CardHeader>

					<CardContent>
						<p className="text-2xl font-bold">40</p>
						<p className="text-xs text-muted-foreground">
							Total Products created
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle>Total Users</CardTitle>
						<User2 className="h-5 w-5 text-yellow-600" />
					</CardHeader>

					<CardContent>
						<p className="text-2xl font-bold">140</p>
						<p className="text-xs text-muted-foreground">
							Total Users Signed Up
						</p>
					</CardContent>
				</Card>
			</div>

			<div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
				<Card className="xl:col-span-2">
					<CardHeader>
						<CardTitle>Transactions</CardTitle>
						<CardDescription>
							Recent transactions from your store
						</CardDescription>
					</CardHeader>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Recent sales</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col gap-8">
						<div className="flex items-center gap-4">
							<Avatar className="hidden sm:flex h-9 w-9">
								{/* <AvatarImage src={} alt="Avatar Image" /> */}
								<AvatarFallback>Aditya</AvatarFallback>
							</Avatar>
							<div className="grid gap-1">
								<p className="text-sm font-medium">Aditya</p>
								<p className="text-sm text-muted-foreground">abcd@gmail.com</p>
							</div>
							<p className="ml-auto font-medium">+$100.00</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</>
	);
};

export default page;
