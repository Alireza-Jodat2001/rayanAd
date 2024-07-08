import { useEffect, useState } from "react";
import data from "../data/db.json";
import Modal from "./Modal";

export default function TaskSection() {
   const [showModal, setShowModal] = useState(false);
   const [editIndex, setEditIndex] = useState();
   const [taskData, setTaskData] = useState(data.taskInfo);
   const [editValues, setEditValues] = useState({
      riportazh: "",
      date: "",
      status: "",
   });

   function handleEdit(index) {
      setEditIndex(index);
      setEditValues(data.taskInfo[index]);
      setShowModal(true);
   }

   function handleDelete(index) {
      const data = taskData;
      const newData = data.filter((_, i) => i !== index);
      setTaskData(newData);
   }

   return (
      <>
         <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            setEditValues={setEditValues}
            editValues={editValues}
            taskData={taskData}
            setTaskData={setTaskData}
            editIndex={editIndex}
         />

         <div className="flex justify-between items-start mb-[15px]">
            <div className="bg-[#5B6D8C] w-[823px] h-[504px]">
               <div className="p-[15px] flex justify-between flex-col items-start h-[148px] mb-[20px]">
                  <div className="flex items-start justify-between w-full">
                     <h3 className="text-[#6CEFC3] text-[24px]">
                        فعالیت های اخیر
                     </h3>

                     <div className="relative w-[218px] h-[32px] text-[13px] bg-[#2B3443] rounded-[12px]">
                        <div className="absolute z-[0] w-[109px] h-[32px] bg-[#6CEFC3] right-0 top-0 rounded-[12px] text-[#2B3443]"></div>
                        <button className="absolute z-[1] w-[50%] h-[32px] right-0">
                           سفارش ها
                        </button>
                        <button className="absolute z-[1] w-[50%] h-[32px] left-0 text-[#7294CD]">
                           کمپین ها
                        </button>
                     </div>
                  </div>
                  <nav className="flex justify-center items-center gap-[60px] text-[13px] text-[#6CEFC3] border-b-2 border-b-[#5B6D8C] font-bold">
                     {data.tsksLabel.map(({ title }, index) => (
                        <a key={index} href="#">
                           {title}
                        </a>
                     ))}
                  </nav>
               </div>
               <table className="text-[#FFF] text-[15px] w-full mb-[40px]">
                  <thead>
                     <tr
                        style={{ borderBottom: "1px solid #6CEFC3" }}
                        className="flex justify-around items-center bg-[#2B3443] h-[41px]"
                     >
                        <th className="flex-1 text-center">رپورتاژ</th>
                        <th className="flex-1 text-center">
                           تاریخ پیشنهادی انتشار
                        </th>
                        <th className="flex-1 text-center">وضعیت</th>
                        <th className="flex-1 text-center">عملیات</th>
                     </tr>
                  </thead>

                  <tbody>
                     {taskData.map(({ riportazh, date, status }, index) => (
                        <tr
                           key={index}
                           style={{ borderBottom: "1px solid #6CEFC3" }}
                           className="bg-[#4F5B70] w-full flex h-[41px] items-center"
                           data-index={index}
                        >
                           <td className="flex-1 text-center">{riportazh}</td>
                           <td className="flex-1 text-center">{date}</td>
                           <td className="flex-1 text-center">{status}</td>
                           <td className="flex flex-1 text-center justify-center items-center gap-[5px]">
                              <button
                                 onClick={() => handleEdit(index)}
                                 className="w-[22px] h-[22px] bg-[url(/images/task-icon/edit.svg)] bg-contain bg-no-repeat"
                                 data-index={index}
                              ></button>
                              <button
                                 onClick={() => handleDelete(index)}
                                 className="w-[22px] h-[22px] bg-[url(/images/task-icon/trash.svg)] bg-contain bg-no-repeat"
                              ></button>
                              <button className="w-[22px] h-[22px] bg-[url(/images/task-icon/checkmark.svg)] bg-contain bg-no-repeat"></button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
               <div className="flex justify-end items-center px-[20px]">
                  <button className="h-[30px] bg-[#4AA888] text-[#FFF] rounded-[3px] px-[15px]">
                     مشاهده ی همه ی رپورتاژ ها
                  </button>
               </div>
            </div>

            <div className="bg-[#5B6D8C] w-[326px] h-[504px] text-[13px] p-[20px] flex flex-col justify-between">
               <h2 className="text-[24px] text-[#6CEFC3]">آخرین تیکت ها</h2>
               <div className="flex flex-col items-center justify-center gap-[15px]">
                  <img src="/images/task-icon/tiket.png" alt="no-tiket" />
                  <h3 className="text-[#6CEFC3] text-[24px]">
                     تیکت فعالی ندارید!
                  </h3>
               </div>
               <div className="flex flex-col gap-[5px]">
                  <button className="w-full text-white text-[13px] bg-[#4AA888] h-[30px]">
                     ثبت تیکت جدید
                  </button>
                  <button className="w-full text-white text-[13px] bg-[#4AA888] h-[30px]">
                     مشاهده ی همه ی تیکت ها
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}
