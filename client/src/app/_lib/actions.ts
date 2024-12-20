'use server';

import { revalidatePath } from 'next/cache';
import { signIn, signOut } from './auth';

import { AuthError } from 'next-auth';
// import prisma from './db';

const getUserByEmail = async (email: string) => {
	try {
		// const user = await prisma.user.findUnique({
		// 	where: {
		// 		email,
		// 	},
		// });
		// return user;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const loginWithCredentials = async (formData: FormData) => {
	const rawFormData = {
		email: formData.get('email'),
		password: formData.get('password'),
		// role: 'ADMIN',
		redirectTo: '/',
	};

	const existingUser = await getUserByEmail(formData.get('email') as string);

	try {
		await signIn('credentials', rawFormData);
	} catch (error: any) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return { error: 'Invalid credentials!' };
				default:
					return { error: 'Something went wrong!' };
			}
		}

		throw error;
	}
	revalidatePath('/');
};
export const signInAction = async () => {
	await signIn('google', { redirectTo: '/' });
	revalidatePath('/');
};

export const signOutAction = async () => {
	await signOut({ redirectTo: '/' });
	revalidatePath('/');
};
