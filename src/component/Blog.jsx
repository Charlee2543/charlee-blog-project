import ImgBlog1 from "../assets/picture/mita1.jpg";
import ImgBlog2 from "../assets/picture/mita2.jpg";
import ImgBlog3 from "../assets/picture/mita3.jpg";
import ImgBlog4 from "../assets/picture/mita4.jpg";
import ImgBlog5 from "../assets/picture/mita5.jpg";
import ImgBlog6 from "../assets/picture/mita6.jpg";
const Blog = () => {
	const ObjectCard = [
		{
			imageTitle: ImgBlog1,
			tag: "tag",
			title: "title",
			article:
				"Dive into the curious world of cat behavior, exploring why cats knead,purr, and chase imaginary prey. This article helps pet owners decodetheir feline's actions and understand how their instincts as hunters shape their daily routines.",
			picturePost: "https://via.placeholder.com/40",
			namePost: "PongsakonM.",
			datePost: "11 September 2024",
		},
		{
			imageTitle: ImgBlog2,
			tag: "tag",
			title: "title",
			article:
				"Dive into the curious world of cat Cats have captivated human hearts for thousands of years. Whether lounging in a sunny spot or playfully chasing a string, these furry companions bring warmth and joy to millions of homes. But what makes cats so special? Let’s dive into the unique traits, behaviors, and quirks that make cats endlessly fascinating., exploring why cats knead,purr, and chase imaginary prey. This article helps pet owners decodetheir feline's actions and understand how their instincts as hunters shape their daily routines.",
			picturePost: "https://via.placeholder.com/40",
			namePost: "PongsakonM.",
			datePost: "11 September 2024",
		},
		{
			imageTitle: ImgBlog3,
			tag: "tag",
			title: "title",
			article:
				"This article explores strategies to maintain motivation when faced with personal or professional challenges. From setting small goals to practicing mindfulness and surrounding yourself with positive influences, it provides actionable tips to reignite your passion and keep moving forward.",
			picturePost: "https://via.placeholder.com/40",
			namePost: "PongsakonM.",
			datePost: "11 September 2024",
		},
		{
			imageTitle: ImgBlog4,
			tag: "tag",
			title: "title",
			article:
				"Discover the fascinating science behind the cat's purr, including its potential healing properties for both cats and humans. Learn how this unique sound is produced and the emotional and physical benefits it brings to both species.",
			picturePost: "https://via.placeholder.com/40",
			namePost: "PongsakonM.",
			datePost: "11 September 2024",
		},
		{
			imageTitle: ImgBlog5,
			tag: "tag",
			title: "title",
			article:
				"Discover practical ways to nurture creativity in your everyday life. Whether it's through journaling, taking breaks, or exploring new hobbies, this article offers simple yet effective habits to help you tap into inspiration and stay creatively charged.",
			picturePost: "https://via.placeholder.com/40",
			namePost: "PongsakonM.",
			datePost: "11 September 2024",
		},
		{
			imageTitle: ImgBlog6,
			tag: "tag",
			title: "title",
			article:
				"This guide offers essential tips on keeping your cat in peak health. Covering topics like proper nutrition, regular vet visits, grooming, and mental stimulation, it’s a must-read for cat owners who want to ensure their pets live long, happy lives.",
			picturePost: "https://via.placeholder.com/40",
			namePost: "PongsakonM.",
			datePost: "11 September 2024",
		},
	];
	return ObjectCard.map((blogArray) => (
		<div className="w-[100%] flex flex-col">
			<img
				src={blogArray.imageTitle}
				alt="ImgBlog1"
				className="h-[360] w-auto"
			/>
			<p>{blogArray.tag}</p>
			<h1>{blogArray.title}</h1>
			<p className="line-clamp-2 ">{blogArray.article}</p>
			<div className="mt-4 flex items-center text-sm text-gray-500">
				<img
					className="w-6 h-6 rounded-full"
					src={blogArray.picturePost}
					alt="Author"
				/>
				<span className="ml-2">{blogArray.namePost}</span>
				<span className="mx-2">|</span>
				<span>{blogArray.datePost}4</span>
			</div>
		</div>
	));
};
export default Blog;
