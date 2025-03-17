import Blog from "./Blog";
const BlogProject = () => {
	return (
		<section className="max-w-[1440px] mx-[120px] mt-12 ">
			<h3 className="text-xl font-bold">Latest articles</h3>
			<div className="h-[80px] p-6 mt-[32px] mb-[48px]  flex justify-between items-center bg-gray-200">
				<div className="flex items-center gap-3 ">
					<button className="px-4 py-2 bg-gray-300 rounded-[5px]">
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
				<div className="w-[30%] relative">
					<input
						type="text"
						className="w-full border rounded-full px-4 py-2 bg-white"
						placeholder="Search"
					/>
					<span className="absolute right-3 top-2 text-gray-400">
						<a href="#">🔍</a>
					</span>
				</div>
			</div>
			<div className=" grid grid-cols-2 gap-[20px] mb-[48px]">
				<Blog />
			</div>
		</section>
	);
};
export default BlogProject;
