import Link from 'next/link';
import React from 'react';

const links = [
	{
		name: 'Dashboard',
		href: '/',
	},

	{
		name: 'Orders',
		href: '/dashboard/orders',
	},

	{
		name: 'Products',
		href: '/dashboard/products',
	},

	{
		name: 'Categories',
		href: '/dashboard/categories',
	},
];

const DashboardNavigation = () => {
	return (
		<>
			{links.map((link) => (
				<Link key={link.name} href={link.href}>
					{link.name}
				</Link>
			))}
		</>
	);
};

export default DashboardNavigation;
