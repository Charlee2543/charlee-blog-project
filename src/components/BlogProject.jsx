import { Search } from 'lucide-react';
import Blog from './Blog';
import { Input } from '@/components/ui/input';
import * as React from 'react';
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select';
// import { Divide } from 'lucide-react';
import dataBlog from '../dataBlog';
const BlogProject = () => {
   const categoryBlog = ['Highlight'];
   dataBlog.forEach((data) => {
      //forEach จะทำงานในfunchtion โดยไม่มีค่าที่ return ออกมา
      if (!categoryBlog.includes(data.category)) {
         // console.log(
         //    data.category,
         //    ' : ',
         //    categoryBlog.includes(data.category)
         // );
         categoryBlog.push(data.category);
      }
   });
   // console.log('categoryBlog: ', categoryBlog);
   return (
      <div className="max-w-[1440px] mx-[120px] mt-12 ">
         <h3 className="text-xl font-bold">Latest articles</h3>
         <section className="h-[80px] p-6 mt-[32px] mb-[48px] rounded-[16px]  flex justify-between items-center bg-gray-200 gap-4 max-md:flex-col-reverse max-md:h-auto">
            {categoryBlog.map((categoryBotton) => {
               return (
                  <div className="flex items-center gap-3 max-md:hidden">
                     <button className="selectCategory">
                        {categoryBotton}
                     </button>
                  </div>
               );
            })}
            <Select className="w-full h-[48px]  border-1  border-amber-500">
               <SelectTrigger className=" w-full  h-full rounded-[16px] px-4 py-2 bg-white  hidden max-md:flex ">
                  <SelectValue placeholder="Highlight" />
               </SelectTrigger>
               <SelectContent>
                  {categoryBlog.map((categoryBotton) => {
                     return (
                        <SelectItem value={categoryBotton}>
                           {categoryBotton}
                        </SelectItem>
                     );
                  })}
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
         </section>
         <section className=" grid grid-cols-2 gap-[20px] mb-[48px] max-md:flex max-md:flex-col ">
            <Blog />
         </section>
      </div>
   );
};
export default BlogProject;
