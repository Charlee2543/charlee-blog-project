import NavBar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import BlogProject from "./component/BlogProject";
import Footer from "./component/Footer";
function App() {
	return (
		<div className=" flex flex-col items-center">
			<NavBar />
			<HeroSection />
			<BlogProject />
			<Footer />
		</div>
	);
}

export default App;
