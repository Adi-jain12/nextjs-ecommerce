import { signOutAction } from '../../_lib/actions';

const SignOutButton = () => {
	return (
		<form action={signOutAction}>
			<button className="block w-full text-left px-4 py-2 text-lg text-gray-700 hover:bg-accent-200">
				<span>Log out</span>
			</button>
		</form>
	);
};

export default SignOutButton;
