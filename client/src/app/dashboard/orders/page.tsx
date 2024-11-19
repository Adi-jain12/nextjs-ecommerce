import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { unstable_noStore as noStore } from 'next/cache';

const OrdersPage = () => {
	noStore();

	return (
		<Card>
			<CardHeader className="px-7">
				<CardTitle>Orders</CardTitle>
				<CardDescription>Recent orders from your store!</CardDescription>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Customer</TableHead>
							<TableHead>Type</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Date</TableHead>
							<TableHead className="text-right">Amount</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow key={1}>
							<TableCell>
								<p className="font-medium">Aditya</p>
								<p className="hidden md:flex text-sm text-muted-foreground">
									abcd@gmail.com
								</p>
							</TableCell>
							<TableCell>Order</TableCell>
							<TableCell>Shipped</TableCell>
							<TableCell>12-11-98</TableCell>
							<TableCell className="text-right">₹1000</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
};

export default OrdersPage;
