import imgMe from "../assets/picture/xgfy0xnvyemkklcqodkg.jpg";
const AboutMe = () => {
	return (
		<div className="mt-8 flex flex-col md:flex-row items-center gap-8">
			<div className="text-left md:w-1/2">
				<h3 className="text-2xl font-bold">Stay Informed, Stay Inspired</h3>
				<p className="mt-2 text-gray-600">
					Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
					Inspiration and Information.
				</p>
			</div>
			<img
				src={imgMe}
				alt="Author"
				className="w-64 h-80 object-cover rounded-lg shadow-md"
			/>
			<div className="text-left md:w-1/2">
				<p className="text-gray-500">~Author</p>
				<h4 className="text-xl font-semibold">Pongsakon M</h4>
				<p className="text-gray-600 mt-2">
					I am a pet enthusiast and freelance writer who specializes in animal
					behavior and care. With a deep love for cats, I enjoy sharing insights
					on feline companionship and wellness.
				</p>
				<p className="text-gray-600 mt-4">
					When I'm not writing, I spend time volunteering at my local animal
					shelter, helping cats find loving homes.
				</p>
			</div>
		</div>
	);
};
export default AboutMe;
