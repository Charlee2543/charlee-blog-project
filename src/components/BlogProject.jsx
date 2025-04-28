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
import { useState } from 'react';
// import { Divide } from 'lucide-react';
import dataBlog from '../dataBlog';

const BlogProject = () => {
   const [categoryBlog, setCategoryBlog] = useState('Highlight');
   // เปลี่ยนtage
   const changeCategory = (inputCatagory) => {
      setCategoryBlog(inputCatagory);
   };
   const allCatagory = ['Highlight'];
   // เช็คมีtag อะไรบ้าง
   dataBlog.forEach((data) => {
      //forEach จะทำงานในfunchtion โดยไม่มีค่าที่ return ออกมา
      if (!allCatagory.includes(data.category)) {
         allCatagory.push(data.category);
      }
   });

   return (
      <div className="max-w-[1440px] mx-[120px] mt-12 ">
         <h3 className="text-xl font-bold">Latest articles</h3>
         <section className="h-[80px] p-6 mt-[32px] mb-[48px] rounded-[16px]  flex justify-between items-center bg-gray-200 gap-4 max-md:flex-col-reverse max-md:h-auto">
            <div className="flex items-center gap-3 max-md:hidden">
               {allCatagory.map((categoryBotton) => {
                  return (
                     <button
                        className={`selectCategory ${
                           categoryBlog === categoryBotton ? 'selectTag' : ''
                        }`}
                        key={categoryBotton}
                        onClick={() => changeCategory(categoryBotton)}
                     >
                        {categoryBotton}
                     </button>
                  );
               })}
            </div>
            <Select
               className="w-full h-[48px]  border-1  border-amber-500"
               value={categoryBlog}
               onValueChange={(event) => {
                  console.log('event: ', event);
                  return changeCategory(event);
               }}
            >
               <SelectTrigger className=" w-full  h-full rounded-[16px] px-4 py-2 bg-white  hidden max-md:flex ">
                  <SelectValue>{categoryBlog}</SelectValue>
               </SelectTrigger>
               <SelectContent>
                  {allCatagory.map((categoryBotton) => {
                     return (
                        <SelectItem value={categoryBotton} key={categoryBotton}>
                           {categoryBotton}
                        </SelectItem>
                     );
                  })}
               </SelectContent>
            </Select>

            <div className="flex items-center w-[30%] min-w-[100px] h-[48px] relative max-md:w-full ">
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
