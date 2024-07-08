import data from '../data/db.json';

export default function Sidebar({ showSidebar }) {
   return (
      // prettier-ignore
      <div className={`w-[230px] min-h-screen pt-[78px] translate-x-[100%] bg-[#2B3443] text-[#8694A5] transition duration-[0.4s] ${showSidebar ? 'translate-x-0' : 'translate-x-[100%]'}`}>
         <ul className='sticky top-[79px]'>
            {data.sidebarInfo.map(
               ({ title, subMenu, icon, iconActive }, index) => (
                  <li key={index} className="">
                     <a
                        href="#"
                        className="w-full h-full flex justify-between items-center px-[15px] [&_.icon]:hover:opacity-0 hover:bg-[#2E6452] transition duration-[0.4s] hover:text-[#6CEFC3]"
                     >
                        <div className="flex justify-start items-center gap-[15px]">
                           <div
                              className="w-[30px] h-[30px] relative bg-contain bg-center bg-no-repeat transition duration-[0.4s]"
                              style={{ backgroundImage: `url(${iconActive})` }}
                           >
                              <div
                                 className="icon absolute z-[1] left-0 top-0 w-full h-full bg-contain bg-center bg-no-repeat transition duration-[0.4s]"
                                 style={{ backgroundImage: `url(${icon})` }}
                              ></div>
                           </div>
                           <div className="text-[15px] h-[43px] flex justify-center items-center">
                              {title}
                           </div>
                        </div>
                        {subMenu && (
                           <div className="w-[10px] h-[5px] bg-[url(/images/header-icon/chevron-bottom.svg)] bg-cover bg-center"></div>
                        )}
                     </a>
                  </li>
               )
            )}
         </ul>
      </div>
   );
}
