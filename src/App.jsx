import NavBar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import BlogProject from "./component/BlogProject";
function App() {
	return (
		<div className=" flex flex-col items-center">
			<NavBar />
			<HeroSection />
			<BlogProject />
		</div>
	);
}

export default App;
