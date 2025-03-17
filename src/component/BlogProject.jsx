import { Search } from "lucide-react";
import Blog from "./Blog";
import { Input } from "@/components/ui/input";
import * as React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
const BlogProject = () => {
	return (
		<section className="max-w-[1440px] mx-[120px] mt-12 ">
			<h3 className="text-xl font-bold">Latest articles</h3>
			<div className="h-[80px] p-6 mt-[32px] mb-[48px] rounded-[16px]  flex justify-between items-center bg-gray-200 gap-4 max-md:flex-col-reverse max-md:h-auto">
				<div className="flex items-center gap-3 max-md:hidden">
					<button className="px-4 py-2 bg-gray-300 rounded-[5px]  ">
						Highlight
					</button>
					<button className="px-4 py-2 border rounded-[5px] cursor-pointer">
						Cat
					</button>
					<button className="px-4 py-2 border rounded-[5px] cursor-pointer">
						Inspiration
					</button>
					<button className="px-4 py-2 border rounded-[5px] cursor-pointer">
						General
					</button>
				</div>
				<Select className="w-full h-[48px]  border-1  border-amber-500">
					<SelectTrigger className=" w-full  h-full rounded-[16px] px-4 py-2 bg-white  hidden max-md:flex ">
						<SelectValue placeholder="Highlight" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="light">Highlight</SelectItem>
						<SelectItem value="dark">Cat</SelectItem>
						<SelectItem value="system">Inspiration</SelectItem>
						<SelectItem value="system">Ganeral</SelectItem>
					</SelectContent>
				</Select>

				<div className="flex items-center w-[30%] h-[48px] relative max-md:w-full ">
					<Input
						type="text"
						placeholder="search"
						className="w-full h-full border rounded-[16px] px-4 py-2 bg-white "
					/>
					<span className="absolute right-3 top-3 text-gray-400">
						<a href="#">
							<Search />
						</a>
					</span>
				</div>
			</div>
			<div className=" grid grid-cols-2 gap-[20px] mb-[48px] max-md:flex max-md:flex-col ">
				<Blog />
			</div>
		</section>
	);
};
export default BlogProject;
