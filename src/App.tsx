import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

function App() {
   return (
      <>
         <div>
            <Header />

            <div className="flex bg-[#465261]">
               <aside className="w-[230px] min-h-screen pt-[78px] bg-[#2B3443]"></aside>

               <div className="px-[25px]">
                  <div className="h-[78px] w-full"></div>
                  <Section1 />
                  <Section2 />
                  <Section2 />
               </div>
            </div>
         </div>
      </>
   );
}

export default App;
