import { useState } from 'react';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Sidebar from './components/Sidebar';
import Section3 from './components/Section3';
import TaskSection from './components/TaskSection';
import Footer from './components/Footer';

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
                  <Section1 />
                  <Section2 />
                  <Section2 />
                  <Section3 />
                  <TaskSection />
                  <Footer />
               </div>
            </div>
         </div>
      </>
   );
}

export default App;
