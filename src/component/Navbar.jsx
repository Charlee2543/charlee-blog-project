import Button from "./common/Button";

const NavBar = () => {
	return (
		<header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
			<a href="#" className="text-xl font-bold">
				PM
			</a>
			<nav>
				<div className="flex space-x-4">
					<Button link="#" nameButton="Home" />
					<Button link="#" nameButton="About Me" />
					<Button link="#" nameButton="Blog" />
					<Button link="#" nameButton="Contact" />
					<Button link="#" nameButton="Login" />
				</div>
			</nav>
		</header>
	);
};
export default NavBar;
