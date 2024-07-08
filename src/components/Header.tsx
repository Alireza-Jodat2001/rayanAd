import { useState } from 'react';

export default function Header({ setShowSidebar }) {
   const [showNotif, setShowNotif] = useState(false);
   const [selectValue, setSelectValue] = useState('اسم پنل');
   const [showSelect, setShowSelect] = useState(false);

   return (
      <header className="bg-[#2B3443] h-[78px] w-full flex justify-between items-center text-[#6CEFC3] px-[30px] fixed top-0 left-0 z-[2]">
         <button onClick={() => setShowSidebar(prevState => !prevState)}>
            <img
               src="/images/header-icon/menu-icons.svg"
               alt="menu-icons"
               className="w-[30px] h-[14px]"
            />
         </button>

         <div className="flex justify-center gap-[30px] items-center">
            <img
               src="/images/header-icon/profile.png"
               alt="profile-image"
               className="w-[52px] h-[52px]"
            />
            <div className="relative h-fit text-[20px] after:content-[''] w-fit after:absolute after:z-[1] after:left-[15px] after:top-[50%] after:translate-y-[-50%] after:w-[16px] after:h-[8px] after:bg-[url(/images/header-icon/chevron-bottom.svg)] after:bg-center after:bg-cover">
               <div
                  onClick={() => setShowSelect(!showSelect)}
                  className="border cursor-pointer border-[#6CEFC3] bg-transparent rounded-[18px] w-[197px] h-[50px] p-[10px] flex justify-between items-center"
               >
                  {selectValue}
               </div>
               {/* prettier-ignore */}
               <div className={`absolute w-[252px] cursor-pointer left-0 top-[60px] transition duration-[0.5s] ${showSelect ? 'opacity-[1] pointer-events-auto visible' : 'opacity-[0] invisible pointer-events-none'}`}>
                  <div
                     onClick={() => {
                        setSelectValue('مدیریت اکانت ها')
                        setShowSelect(false)
                     }}
                     className="bg-[#323E54] w-full h-[56px] flex justify-center items-center rounded-tl-[30px] border-b-2 border-[#568199]"
                  >
                     مدیریت اکانت ها
                  </div>
                  <div
                     onClick={() => {
                        setSelectValue('خروج از اکانت')
                        setShowSelect(false)
                     }}
                     className="bg-[#323E54] rounded-b-[30px] w-full h-[56px] flex justify-center items-center"
                  >
                     خروج از اکانت
                  </div>
               </div>
            </div>
            <div className="text-[16px]">
               <span>موجودی کیف پول:</span>
               <span>۵۰۰,۰۰۰ تومان</span>
            </div>
         </div>

         <div className="flex justify-center items-center gap-[25px]">
            <div className="relative">
               <button className="flex items-center">
                  <img
                     src="/images/header-icon/alarm.svg"
                     alt="alar-icon"
                     className="w-[25px] h-[27px]"
                     onClick={() => setShowNotif(!showNotif)}
                  />
               </button>
               {/* prettier-ignore */}
               <div className={`absolute w-[229px] h-[227px] rounded-[7px] overflow-hidden left-0 mt-[25px] border border-[#6CEFC3] transition duration-[0.5s] ${showNotif ? 'opacity-[1] pointer-events-auto visible' : 'opacity-[0] invisible pointer-events-none'}`}>
                  <div className="bg-[#2E6452] py-[7px] px-[10px]">
                     اعلان های شما
                  </div>
                  <div className="bg-[#2B3443] h-[187px] flex flex-col justify-between">
                     <div className="bg-[#B2DECE] text-black p-[10px]">
                        <h4 className="text-[13px] font-bold mb-[5px]">
                           فرستنده: پشتیبانی
                        </h4>
                        <p className="text-[10px] text-nowrap w-full text-ellipsis overflow-hidden">
                           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                           چاپ، و با استفاده از طراحان گرافیک است
                        </p>
                     </div>
                     <div className="p-[5px]">
                        <button className="bg-[#6D9984] text-[#D0FFF1] text-[13px] w-full h-[30px] rounded-[4px]">
                           همه ی پیام ها
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex justify-center items-center">
               <span className="font-bold text-[24px]">RayanAd</span>
               <img
                  src="/images/header-icon/logo.png"
                  alt="logo"
                  className="w-[50px] h-[50px]"
               />
            </div>
         </div>
      </header>
   );
}
