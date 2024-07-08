import { useState } from "react";
import data from "../data/db.json";

export default function SliderSection() {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [showBtn, setShowBtn] = useState({
      nextBtnShow: true,
      prevBtnShow: false,
   });
   const slideWidth = 274 + 30;

   function nextSlideHandle() {
      if (currentIndex < data.sliderInfo.length - 4) {
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

   return (
      <div className="bg-[#5B6D8C] text-[#6CEFC3] rounded-[3px] h-[187px] pr-[20px] flex justify-between items-center gap-[70px] mb-[20px] relative">
         {/* fade */}
         <div className="absolute left-0 top-0 w-[69px] h-full bg-[url(/images/slider-icon/fade-slider.png)] z-[1]"></div>

         <div className="grid justify-items-center items-center h-full w-[110px] py-[10px]">
            <div className="text-[14px]">بک لینک با تخفیف</div>
            <img
               src="/images/slider-icon/persent.png"
               alt="persent-images"
               className="w-[107px] h-[104px]"
            />
            <div className="text-[14px]">۲۴:۲۴:۲۴</div>
         </div>

         <div className="w-[961px] h-[150px] overflow-x-hidden pr-[15px] relative flex justify-start items-center">
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
               className="h-full flex justify-start items-center gap-[30px] transition duration-[0.4s]"
            >
               {data.sliderInfo.map(
                  (
                     { title, desc, persent, realPrice, persentPrice },
                     index
                  ) => (
                     <div
                        key={index}
                        className="bg-[#416375] w-[274px] h-[149px] rounded-[5px] p-[15px] flex flex-col justify-between"
                     >
                        <div className="flex justify-center items-start gap-[15px] mb-auto">
                           <div className="min-w-[44px] h-[44px] bg-[#333232] rounded-[3px]"></div>
                           <div>
                              <h4 className="text-[14px]">{title}</h4>
                              <p className="leading-[26px] text-[10px]">
                                 {desc}
                              </p>
                           </div>
                        </div>
                        <div className="flex items-end justify-between">
                           <div className="rounded-[14px] bg-[#4DA88A] text-[#A5FFE1] w-[54px] h-[25px] flex justify-center items-center text-[13px]">
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
   );
}
