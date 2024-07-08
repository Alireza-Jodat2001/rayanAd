import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskSection from "./components/TaskSection";
import Footer from "./components/Footer";
import SliderSection from "./components/SliderSection";
import Bonus from "./components/Bonus";
import CreateSection from "./components/CreateSection";

function App() {
   const [showSidebar, setShowSidebar] = useState(true);

   return (
      <>
         <div>
            <Header setShowSidebar={setShowSidebar} />

            <div className="flex bg-[#465261]">
               <Sidebar showSidebar={showSidebar} />

               <div className="px-[25px]">
                  <div className="h-[78px] w-full"></div>
                  <CreateSection />
                  <SliderSection />
                  <SliderSection />
                  <Bonus />
                  <TaskSection />
                  <Footer />
               </div>
            </div>
         </div>
      </>
   );
}

export default App;
