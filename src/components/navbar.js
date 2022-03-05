import * as React from "react";

// const NavbarPage = () => {
//   return (
//     <nav class="bg-orange border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
//       <div class="container mx-auto px-10 flex flex-wrap justify-between items-center mx-auto">
//         <a href="#" class="flex items-center">
//           <span class="self-center text-xl font-semibold whitespace-nowrap text-white">
//             Afif Makarim
//           </span>
//         </a>
//         <div class="w-full md:block md:w-auto">
//           <ul class="text-white flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
//             <li>
//               <a
//                 href="#"
//                 class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 Works
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 Blog
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

const NavbarPage = () => {
  return (
    <nav className="bg-orange mx-auto px-2 py-2.5 text-white">
      <div className="nav-wrapper flex justify-around">
        <div className="logo sm:hidden">
          <a href="#">Afif Makarim</a>
        </div>
        <div className="navigation flex gap-x-8">
          <a className="hover:text-gray" href="#skillPage">
            About
          </a>
          <a className="hover:text-gray" href="#projects">
            Works
          </a>
          <a
            className="hover:text-gray"
            target="_blank"
            href="http://rojoinferno.com/"
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPage;
