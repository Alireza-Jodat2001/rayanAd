import data from '../data/db.json';

export default function Section3() {
   return (
      <div className="h-[271px] bg-[#5B6D8C] text-[#6CEFC3] flex justify-start gap-[60px] mb-[15px]">
         <div className="w-[213px] grid justify-items-center">
            <h2 className="font-bold text-[32px] w-[174px]">
               جوایز باشگاه مشتریان
            </h2>
            <img
               src="/images/bonus-icon/clients.png"
               alt="clients-icon"
               className="w-[213px] h-[156px]"
            />
         </div>

         <div className="pt-[10px] flex flex-col flex-1">
            <div className="flex justify-start items-center gap-[30px]">
               <nav className="flex justify-center items-center gap-[30px] text-[13px]">
                  {data.bonusLabel.map(({ title }, index) => (
                     <a key={index} href="#">
                        {title}
                     </a>
                  ))}
               </nav>
               <form className="w-[226px] h-[32px] rounded-[7px] bg-[#2B3443] text-[#6CEFC3] flex justify-start items-center gap-[10px]">
                  <button className="pr-[10px]">
                     <img
                        src="/images/bonus-icon/search.svg"
                        className="w-[17px] h-[17px]"
                        alt="search-icon"
                     />
                  </button>
                  <input
                     type="text"
                     className="bg-transparent placeholder:text-[#6CEFC3] text-[13px] focus:outline-none"
                     placeholder="جستجو کنید"
                  />
               </form>
            </div>
            <div className="flex-1 h-[150px] flex justify-start items-center gap-[30px] relative after:content-[''] after:absolute after:left-0 after:w-[28px] after:h-[28px] after:bg-[url(/images/slider-icon/left-arrow.svg)] before:absolute before:right-0 before:content-[''] before:w-[28px] before:h-[28px] before:bg-[url(/images/slider-icon/right-arrow.svg)] before:translate-x-[50%]">
               {data.bonusSliderInfo.map(
                  (
                     { title, desc, persent, realPrice, persentPrice, bonus },
                     index
                  ) => (
                     <div
                        key={index}
                        className="bg-[#416375] w-[292px] h-[191px] rounded-[5px] p-[15px] flex flex-col justify-between"
                     >
                        <div className="w-[48px] h-[22px] bg-[#4DA88A] text-[#A5FFE1] flex justify-center items-center gap-[5px] rounded-[14px] mr-auto text-[12px]">
                           {bonus}
                           <img
                              src="/images/bonus-icon/cup.svg"
                              alt="cup-icon"
                              className="w-[16px] h-[16px]"
                           />
                        </div>
                        <div className="flex justify-center items-start gap-[15px] mb-auto">
                           <div className="min-w-[59px] h-[48px] bg-[#333232] rounded-[3px]"></div>
                           <div>
                              <h4 className="text-[14px]">{title}</h4>
                              <p className="leading-[26px] text-[10px]">
                                 {desc}
                              </p>
                           </div>
                        </div>
                        <div className="flex justify-between items-end">
                           <div className="flex flex-col items-start">
                              <div className="rounded-[14px] bg-[#4DA88A] text-[#A5FFE1] w-[34px] h-[15px] flex justify-center items-center text-[10px]">
                                 {persent}
                              </div>
                              <div>
                                 <div className="text-[10px] relative w-[48px]">
                                    {realPrice}
                                    <div className="absolute bg-[url(/images/slider-icon/line-persent.png)] bg-cover bg-center w-full h-full z-[1] top-0 left-0"></div>
                                 </div>
                                 <div className="text-[14px]">
                                    {persentPrice} تومان
                                 </div>
                              </div>
                           </div>
                           <button className="text-[#EDEDED] text-[13px] bg-[#4AA888] w-[70px] h-[30px] rounded-[3px]">
                              دریافت
                           </button>
                        </div>
                     </div>
                  )
               )}
            </div>
         </div>
      </div>
   );
}
