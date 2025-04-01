import React from 'react'
import americano from "../assets/americano.png";
import espresso from "../assets/espresso.png";
import cappuccino from "../assets/cappuccino.png";
import macchiato from "../assets/Macchiato.png";
import Flat_White from "../assets/Flat_White.png";
import bestCoffe from "../assets/best_coffee.png";
const Menu = () => {
   return (
      <>
         {/* Menu */}
         <section className="w-full h-[840px] mt-6 flex justify-center">
            <div className="w-[1240px] h-[800px] pt-16">
               {/* title */}
               <h1 className="text-center text-[#C99E71] text-[18px]">Menu</h1>
               <p className="text-center text-[48px] righteous-regular">Coffee popular menu</p>
               <div className=" flex justify-evenly w-full h-[600px] mt-5 pt-7">
                  {/* 1 */}
                  <div className="space-y-8">
                     {/* americano */}

                     <div className="flex items-center justify-around w-[460px] h-[110px] border-1 border-[#32323D]">
                        <div className="flex items-center gap-4 w-[360px] h-22">
                           <img className="w-[72px] h-[72px]" width="72px" height="72px" src={americano} alt="" />
                           <h1 className="text-[24px] righteous-regular">Americano rosted gred</h1>
                        </div>
                        <p className="text-[#C99E71] text-[18px] font-bold">$12:00</p>
                     </div>
                     {/* Espresso */}

                     <div className="flex items-center justify-around w-[460px] h-[110px] border-1 border-[#32323D]">
                        <div className="flex items-center gap-4 w-[360px] h-22">
                           <img className="w-[72px] h-[72px]" width="72px" height="72px" src={espresso} alt="" />
                           <h1 className="text-[24px] righteous-regular ">Espresso rosted gred</h1>
                        </div>
                        <p className="text-[#C99E71] text-[18px] font-bold">$14:00</p>
                     </div>

                     {/* Late */}
                     <div className="flex items-center justify-around w-[460px] h-[110px] border-1 border-[#32323D]">
                        <div className="flex items-center gap-4 w-[360px] h-22">
                           <img className="w-[72px] h-[72px]" width="72px" height="72px" src={bestCoffe} alt="" />
                           <h1 className="text-[24px] righteous-regular">Late rosted gred</h1>
                        </div>
                        <p className="text-[#C99E71] text-[18px] font-bold">$10:00</p>
                     </div>

                     {/* Cappuccino  */}
                     <div className="flex items-center justify-around w-[460px] h-[110px] border-1 border-[#32323D]">
                        <div className="flex items-center gap-4 w-[360px] h-22">
                           <img className="w-[72px] h-[72px]" width="72px" height="72px" src={bestCoffe} alt="" />
                           <h1 className="text-[24px] righteous-regular">Cappuccino rosted gred</h1>
                        </div>
                        <p className="text-[#C99E71] text-[18px] font-bold">$12:00</p>
                     </div>
                  </div>
                  {/* 2 */}
                  <div className="space-y-8">
                     {/* Cold Brew */}

                     <div className="flex items-center justify-around w-[460px] h-[110px] border-1 border-[#32323D]">
                        <div className="flex items-center gap-4 w-[360px] h-22">
                           <img className="w-[72px] h-[72px]" width="72px" height="72px" src={cappuccino} alt="" />
                           <h1 className="text-[24px] righteous-regular">Cold Brew rosted gred</h1>
                        </div>
                        <p className="text-[#C99E71] text-[18px] font-bold">$16:00</p>
                     </div>
                     {/* Macchiato */}

                     <div className="flex items-center justify-around w-[460px] h-[110px] border-1 border-[#32323D]">
                        <div className="flex items-center gap-4 w-[360px] h-22">
                           <img className="w-[72px] h-[72px]" width="72px" height="72px" src={macchiato} alt="" />
                           <h1 className="text-[24px] righteous-regular">Macchiato rosted gred</h1>
                        </div>
                        <p className="text-[#C99E71] text-[18px] font-bold">$18:00</p>
                     </div>

                     {/* Flat_White */}
                     <div className="flex items-center justify-around w-[460px] h-[110px] border-1 border-[#32323D]">
                        <div className="flex items-center gap-4 w-[360px] h-22">
                           <img className="w-[72px] h-[72px]" width="72px" height="72px" src={Flat_White} alt="" />
                           <h1 className="text-[24px] righteous-regular">Flat White rosted gred</h1>
                        </div>
                        <p className="text-[#C99E71] text-[18px] font-bold">$21:00</p>
                     </div>

                     {/* Cortado   */}
                     <div className="flex items-center justify-around w-[460px] h-[110px] border-1 border-[#32323D]">
                        <div className="flex items-center gap-4 w-[360px] h-22">
                           <img className="w-[72px] h-[72px]" width="72px" height="72px" src={bestCoffe} alt="" />
                           <h1 className="text-[24px] righteous-regular">Cortado  rosted gred</h1>
                        </div>
                        <p className="text-[#C99E71] text-[18px] font-bold">$13:00</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Menu