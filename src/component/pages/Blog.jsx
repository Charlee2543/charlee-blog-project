import ImgBlog1 from '../../assets/picture/mita1.jpg';
import dataBlog from '@/data';
const Blog = () => {
   return dataBlog.map((blogArray) => (
      <div className="w-[100%] flex flex-col mb-[48px]">
         <img
            src={blogArray.image}
            alt="ImgBlog1"
            className="h-[360px] w-auto object-center object-cover rounded-[16px]"
         />
         <p className=" mt-6 mb-3 py-1 px-4 w-fit text-[#12B279] bg-[#D7F2E9]  text-2xl rounded-full  ">
            {blogArray.category}
         </p>
         <h1 className="mt-2 text-3xl font-semibold ">{blogArray.title}</h1>
         <p className="line-clamp-2 text-[22px] ">{blogArray.description}</p>
         <div className="mt-4 flex items-center text-sm text-gray-500">
            <img className="w-6 h-6 rounded-full" src={ImgBlog1} alt="Author" />
            <span className="ml-2">{blogArray.author}</span>
            <span className="mx-2">|</span>
            <span>{blogArray.date}4</span>
         </div>
      </div>
   ));
};
export default Blog;
