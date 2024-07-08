export default function Modal({
   showModal,
   setShowModal,
   setEditValues,
   editValues,
   taskData,
   setTaskData,
   editIndex,
}) {
   function handleCahngeInput(e) {
      const { name, value } = e.target;
      setEditValues({
         ...editValues,
         [name]: value,
      });
   }

   function handleSave() {
      const data = [...taskData];
      data[editIndex] = editValues;
      setTaskData(data);
      setShowModal(false);
   }

   return (
      // prettier-ignore
      <div className={`fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.8)] z-[99] flex justify-center items-center transition duration-[0.5s] ${showModal ? 'opacity-[1] pointer-events-auto visible' : 'opacity-[0] invisible pointer-events-none'}`}>
         <div className="relative flex flex-col justify-center items-center gap-[20px] w-[70%] h-[500px] rounded-[20px] bg-[#5B6D8C]">
            <input
               className="w-[50%] h-[40px] rounded-[7px] px-[20px]"
               type="text"
               name="riportazh"
               placeholder="رپورتاژ"
               onChange={(e) => handleCahngeInput(e)}
            />
            <input
               className="w-[50%] h-[40px] rounded-[7px] px-[20px]"
               type="text"
               name="date"
               placeholder="تاریخ"
               onChange={(e) => handleCahngeInput(e)}
            />
            <input
               className="w-[50%] h-[40px] rounded-[7px] px-[20px]"
               type="text"
               name="status"
               placeholder="وضعیت"
               onChange={(e) => handleCahngeInput(e)}
            />
            <button
               className="w-[30%] h-[40px] bg-[#4AA888] rounded-[7px]"
               type="submit"
               onClick={() => handleSave()}
            >
               ثبت
            </button>
            <button
               onClick={() => setShowModal(false)}
               className="absolute left-[30px] top-[20px] text-[30px] text-white"
            >
               X
            </button>
         </div>
      </div>
   );
}
