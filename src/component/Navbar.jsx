import Button from "./common/Button";
import { useState } from "react";
import { AlignJustify } from "lucide-react";
const NavBar = () => {
	const [state, setState] = useState(false);
	console.log(state);
	const setMenu = () => setState(!state);
	return (
		<header className="bg-white shadow-md py-4 px-8 flex justify-between items-center w-full">
			<a href="#" className="text-xl font-bold">
				PM
			</a>
			<nav>
				<AlignJustify
					onClick={setMenu}
					className="hidden max-md:flex cursor-pointer"
				/>

				<div
					className={`${state ? ` max-md:inline` : "max-md:hidden"} relative`}
				>
					<div
						className={`flex gap-4 || max-md:absolute max-md:flex-col right-[-30px] top-0 max-md:w-[150px]  max-md:bg-white rounded-[8px]  border-1 border-[#5c5c5c33] max-md:shadow-[5px_5px_5px_rgba(0,0,0,0.25)] `}
					>
						<Button link="#" nameButton="Home" />
						<Button link="#" nameButton="About Me" />
						<Button link="#" nameButton="Blog" />
						<Button link="#" nameButton="Contact" />
						<Button link="#" nameButton="Login" />
					</div>
				</div>
			</nav>
		</header>
	);
};
export default NavBar;
