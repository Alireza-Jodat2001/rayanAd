import data from "../data/db.json";

export default function Section1() {
   return (
      <div className="grid grid-cols-3 gap-[20px] py-[20px] h-[247px]">
         {data.section1.map(({ title, desc }, index) => (
            <div
               key={index}
               className="w-[375px] h-[92px] rounded-[5px] bg-[#416375] text-[#6CEFC3] flex justify-center items-center gap-[20px] px-[20px]"
            >
               <div>
                  <div className="w-[50px] h-[50px] bg-[#333232] rounded-[3px]"></div>
               </div>
               <div>
                  <h4 className="text-[15px] mb-[5px]">{title}</h4>
                  <p className="text-[10px]">{desc}</p>
               </div>
            </div>
         ))}
      </div>
   );
}
