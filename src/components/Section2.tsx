import data from '../data/db.json';

export default function Section2() {
   return (
      <div className="bg-[#5B6D8C] text-[#6CEFC3] rounded-[3px] h-[187px] pr-[20px] flex justify-between items-center gap-[70px] mb-[20px]">
         <div className="grid justify-items-center items-center h-full w-[110px] py-[10px]">
            <div className="text-[14px]">بک لینک با تخفیف</div>
            <img
               src="/images/slider-icon/persent.png"
               alt="persent-images"
               className="w-[107px] h-[104px]"
            />
            <div className="text-[14px]">۲۴:۲۴:۲۴</div>
         </div>

         <div className="flex-1 h-[150px] flex justify-start items-center gap-[30px] relative after:content-[''] after:absolute after:left-0 after:w-[28px] after:h-[28px] after:bg-[url(/images/slider-icon/left-arrow.svg)] before:absolute before:right-0 before:content-[''] before:w-[28px] before:h-[28px] before:bg-[url(/images/slider-icon/right-arrow.svg)] before:translate-x-[50%]">
            {data.sliderInfo.map(
               ({ title, desc, persent, realPrice, persentPrice }, index) => (
                  <div
                     key={index}
                     className="bg-[#416375] w-[274px] h-[149px] rounded-[5px] p-[15px] flex flex-col justify-between"
                  >
                     <div className="flex justify-center items-start gap-[15px] mb-auto">
                        <div className="min-w-[44px] h-[44px] bg-[#333232] rounded-[3px]"></div>
                        <div>
                           <h4 className="text-[14px]">{title}</h4>
                           <p className="leading-[26px] text-[10px]">{desc}</p>
                        </div>
                     </div>
                     <div className="flex justify-between items-end">
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
      </div>
   );
}
