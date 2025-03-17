import { Github, Linkedin, Mail } from "lucide-react";
const Footer = () => {
	return (
		<div className=" px-30 w-full h-[144px] bg-[#efeeeb] flex  justify-between items-center">
			<div className="flex items-center gap-4">
				<h1 className=" text-2xl ">Get n touch</h1>
				<a href="#">
					<Linkedin className=" text-[#43403b] w-[30px] h-[30px]" />
				</a>
				<a href="#">
					<Github className=" text-[#43403b] w-[30px] h-[30px]" />
				</a>
				<a href="#" className=" box-sizing">
					<Mail className=" text-[#43403b] w-[30px] h-[30px]" />
				</a>
			</div>
			<a href="#" className="text-2xl underline">
				Home page
			</a>
		</div>
	);
};
export default Footer;
