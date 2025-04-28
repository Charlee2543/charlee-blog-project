import Button from '../components/common/Button';
import { useState } from 'react';
import { AlignJustify } from 'lucide-react';
const NavBar = () => {
   const [state, setState] = useState(false);
   // console.log(state);
   const setMenu = () => setState(!state);
   return (
      <header className="bg-white shadow-md py-6 px-[120px] flex justify-between items-center w-full max-md:px-6">
         <a href="#" className="text-xl font-bold">
            PM
         </a>
         <nav>
            <AlignJustify
               onClick={setMenu}
               className="hidden max-md:flex cursor-pointer"
            />
            <div
               className={`${
                  state ? ` max-md:inline` : 'max-md:hidden'
               } relative `}
            >
               <div
                  className={`flex gap-2 max-md:gap-6 max-md:px-6 max-md:py-10  max-md:flex-col  max-md:w-[100vw]   max-md:absolute right-[-56px] top-[10px]  max-md:bg-white rounded-[8px]  max-md:border-1 max-md:border-[#5c5c5c33] max-md:shadow-[5px_5px_5px_rgba(0,0,0,0.25)] `}
               >
                  <Button link="#" nameButton="Login" />
                  <Button
                     link="#"
                     nameButton="Sign up"
                     className="text-white bg-black "
                  />
               </div>
            </div>
         </nav>
      </header>
   );
};
export default NavBar;
