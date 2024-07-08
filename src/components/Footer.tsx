export default function Footer() {
   return (
      <div className="h-[352px] bg-[#5B6D8C] p-[20px]">
         <h3 className="text-[#6CEFC3] text-[24px] mb-[70px]">
            گزارش آماری رتبه کلمات کلیدی
         </h3>
         <div className="flex justify-center items-center gap-[20px]">
            <div className="w-[204px] h-[154px] bg-[url(/images/footer/folder.png)] bg-contain bg-center"></div>
            <div className="text-[#6CEFC3]">
               <p className="text-[16px] mb-[10px]">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
               </p>
               <p className="text-[14px] mb-[20px]">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
               </p>
               <div className="flex gap-[15px] pr-[20px]">
                  <button className="w-[96px] h-[30px] text-white text-[13px] bg-[#4AA888] rounded-[3px]">
                     خرید رپورتاژ
                  </button>
                  <span> یا </span>
                  <button className="w-[96px] h-[30px] text-white text-[13px] bg-[#4AA888] rounded-[3px]">
                     خرید رپورتاژ
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
