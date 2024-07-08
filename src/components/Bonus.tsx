import { useState } from "react";
import data from "../data/db.json";

export default function Bonus() {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [bonusCard, setBonusCard] = useState(data.bonusSliderInfo);
   const [searchValue, setSearchValue] = useState("");
   const slideWidth = 292 + 15;
   const [showBtn, setShowBtn] = useState({
      nextBtnShow: true,
      prevBtnShow: false,
   });

   function nextSlideHandle() {
      if (currentIndex < data.sliderInfo.length - 6) {
         setCurrentIndex(currentIndex + 1);
         setShowBtn({ ...showBtn, nextBtnShow: true, prevBtnShow: true });
      } else {
         setCurrentIndex(currentIndex + 1);
         setShowBtn({ ...showBtn, nextBtnShow: false });
      }
   }

   function prevSlideHandle() {
      if (currentIndex > 0) {
         setShowBtn({ nextBtnShow: true, prevBtnShow: true });
         setCurrentIndex(currentIndex - 1);

         if (currentIndex - 1 == 0)
            setShowBtn({ ...showBtn, prevBtnShow: false });
      }
   }

   function findLabel(title) {
      setCurrentIndex(0);
      setShowBtn({ ...showBtn, nextBtnShow: false, prevBtnShow: false });
      const filteredBonus = data.bonusSliderInfo.filter((item) =>
         item.title.includes(title)
      );
      setBonusCard(filteredBonus);
   }

   return (
      <div className="h-[271px] bg-[#5B6D8C] text-[#6CEFC3] flex justify-start gap-[15px] mb-[15px] relative">
         {/* fade */}
         <div className="absolute left-0 top-0 w-[69px] h-full bg-[url(/images/slider-icon/fade-slider.png)] z-[1]"></div>

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
                     <a
                        key={index}
                        className="cursor-pointer"
                        onClick={() => findLabel(title)}
                     >
                        {title}
                     </a>
                  ))}
               </nav>
               <form className="w-[226px] h-[32px] rounded-[7px] bg-[#2B3443] text-[#6CEFC3] flex justify-start items-center gap-[10px]">
                  <button
                     onClick={(e) => {
                        e.preventDefault();
                        findLabel(searchValue);
                     }}
                     className="pr-[10px]"
                  >
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
                     value={searchValue}
                     onChange={(e) => setSearchValue(e.target.value)}
                  />
               </form>
            </div>

            <div className="w-[933px] overflow-x-hidden h-[292px] flex justify-start items-center gap-[30px] relative pr-[15px]">
               {/* next btn */}
               {showBtn.nextBtnShow && (
                  <button
                     onClick={() => nextSlideHandle()}
                     className="absolute right-0 content-[''] w-[28px] h-[28px] bg-[url(/images/slider-icon/right-arrow.svg)] z-[1]"
                  ></button>
               )}

               {/* slide container */}
               <div
                  style={{
                     transform: `translateX(${currentIndex * slideWidth}px)`,
                  }}
                  className="h-full flex justify-start items-center gap-[10px] transition duration-[0.4s]"
               >
                  {bonusCard.map(
                     (
                        {
                           title,
                           desc,
                           persent,
                           realPrice,
                           persentPrice,
                           bonus,
                        },
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
                           <div className="flex items-end justify-between">
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

               {/* prev btn */}
               {showBtn.prevBtnShow && (
                  <button
                     onClick={() => prevSlideHandle()}
                     className="content-[''] absolute left-0 z-[2] w-[28px] h-[28px] bg-[url(/images/slider-icon/left-arrow.svg)]"
                  ></button>
               )}
            </div>
         </div>
      </div>
   );
}
