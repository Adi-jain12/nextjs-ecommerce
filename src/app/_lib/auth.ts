import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import bcrypt from 'bcryptjs';
import { db } from './db';
import { saltAndHashPassword } from '../_utils/helper';

export const {
	auth,
	signIn,
	signOut,
	handlers: { GET, POST },
} = NextAuth({
	// adapter: PrismaAdapter(db),
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

				let user: any = await db.user.findUnique({
					where: {
						email,
					},
				});

				if (!user) {
					user = await db.user.create({
						data: {
							email,
							hashedPassword: hash,
						},
					});
				} else {
					const isMatch = bcrypt.compareSync(
						credentials.password as string,
						user.hashedPassword
					);
					if (!isMatch) {
						throw new Error('Incorrect password.');
					}
				}

				return user;
			},
		}),
	],

	callbacks: {
		// authorized({ auth, request }) {
		// 	return !!auth?.user;
		// },

		async signIn({ user, account, profile }) {
			// console.log(user);
			console.log('sdgsegwegwe', user);
			let email = user.email as string;

			try {
				const existingUser = await db.user.findUnique({
					where: {
						email: email,
					},
				});

				console.log('dsfsdfsdfsdfdsfffffffffffffffffffsdf', existingUser);

				if (!existingUser)
					await db.user.create({
						data: {
							email: email,
						},
					});
				// If getGuest() returns a guest from database i.e existing guest in database, then this func signIn will return true
				return true;
			} catch {
				// If getGuest() returns null i.e no existing guest in database, then this func signIn will return false
				return false;
			}
		},
		// async session({ session, user }) {
		// 	await db.user.findUnique({
		// 		where: {
		// 			email: String(session.user.email),
		// 		},
		// 	});

		// 	return session;
		// },
	},
	pages: {
		signIn: '/login',
	},
});
