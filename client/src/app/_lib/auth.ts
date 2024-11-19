import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';

import bcrypt from 'bcryptjs';

import { saltAndHashPassword } from '../_utils/helper';
// import prisma from './db';

export const {
	auth,
	signIn,
	signOut,
	handlers: { GET, POST },
} = NextAuth({
	session: { strategy: 'jwt' },

	providers: [
		Google({
			clientId: process.env.AUTH_GOOGLE_ID,
			clientSecret: process.env.AUTH_GOOGLE_SECRET,
		}),

		Credentials({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'email@example.com',
				},
				password: { label: 'Password', type: 'password' },
			},
			authorize: async (credentials) => {
				if (!credentials || !credentials.email || !credentials.password) {
					return null;
				}

				const email = credentials.email as string;
				const hash = saltAndHashPassword(credentials.password);

				// let user: any = await prisma.user.findUnique({
				// 	where: {
				// 		email,
				// 	},
				// });

				// if (!user) {
				// 	user = await prisma.user.create({
				// 		data: {
				// 			email,
				// 			hashedPassword: hash,
				// 		},
				// 	});
				// } else {
				// 	const isMatch = bcrypt.compareSync(
				// 		credentials.password as string,
				// 		user.hashedPassword
				// 	);
				// 	if (!isMatch) {
				// 		throw new Error('Incorrect password.');
				// 	}
				// }

				// return user;
			},
		}),
	],

	callbacks: {
		authorized({ auth, request }) {
			return !!auth?.user;
		},

		async signIn({ user, account, profile }) {
			let email = user.email as string;

			// try {
			// 	const existingUser = await prisma.user.findUnique({
			// 		where: {
			// 			email: email,
			// 		},
			// 	});

			// 	if (!existingUser)
			// 		await prisma.user.create({
			// 			data: {
			// 				email: email,
			// 			},
			// 		});

			// 	return true;
			// } catch {
			// 	return false;
			// }
		},
		// async session({ session, user }) {
		// 	await prisma.user.findUnique({
		// 		where: {
		// 			email: String(session.user.email),
		// 		},
		// 	});

		// 	return session;
		// },
	},
	pages: {
		signIn: '/sign-in',
	},
});
