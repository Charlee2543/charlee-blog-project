import AboutMe from '../components/AboutMe';
import BlogProject from '../components/BlogProject';

const HeroSection = () => {
   return (
      <main className="max-w-[1440px] mx-[120px] py-12 text-center">
         {/* <h2 className="text-3xl font-bold">Blog Pongsakon Meichom</h2> */}
         <AboutMe />
         <BlogProject />
      </main>
   );
};
export default HeroSection;
