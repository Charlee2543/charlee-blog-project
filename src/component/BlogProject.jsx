import Blog from "./Blog";
const BlogProject = () => {
	return (
		<section className="max-w-4xl mx-auto mt-12">
			<h3 className="text-xl font-bold">Latest articles</h3>
			<div className="flex justify-between ">
				<div className="mt-4 flex gap-1">
					<button className="px-4 py-2 bg-gray-300 rounded-full">
						Highlight
					</button>
					<button className="px-4 py-2 border rounded-full cursor-pointer">
						Cat
					</button>
					<button className="px-4 py-2 border rounded-full cursor-pointer">
						Inspiration
					</button>
					<button className="px-4 py-2 border rounded-full cursor-pointer">
						General
					</button>
				</div>
				<div className="w-[30%] mt-4 relative">
					<input
						type="text"
						className="w-full border rounded-full px-4 py-2"
						placeholder="Search"
					/>
					<span className="absolute right-3 top-2 text-gray-400">
						<a href="#">🔍</a>
					</span>
				</div>
			</div>
			<div className=" grid grid-cols-2 gap-2">
				<Blog />
			</div>
		</section>
	);
};
export default BlogProject;
