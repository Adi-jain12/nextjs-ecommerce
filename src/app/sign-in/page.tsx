import React from 'react';
import SignInGoogle from '../_components/Auth/SigninGoogle';
import LoginForm from '../_components/Auth/LoginForm';

export const metadata = {
	title: 'Welcome To Kernel',
};

const page = () => {
	return (
		<div className="w-full flex mt-20 justify-center">
			<section className="flex flex-col w-[400px]">
				<h1 className="text-3xl w-full text-center font-bold mb-6">Sign in</h1>
				<LoginForm />
				<SignInGoogle />
			</section>
		</div>
	);
};

export default page;
