import React from "react";
import { useState, useEffect } from "react";
// import { useEffect } from "react";
import coffeeImg from "../assets/coffe1.png"; // Импортируем картинку
import bestCoffe from "../assets/best_coffee.png";
import plase_coffee from "../assets/place_to_get.png";
import proper from "../assets/proper_rousting.png";
import dobleCoffee from "../assets/doble_coffee.png";
import BagPacking from "../assets/BagPackingCoffee.png";
import star from "../assets/star.png";
import star1 from "../assets/star1.png";
import men from "../assets/men.png";
import women from "../assets/women.png";
import map from "../assets/map.png";
import americano from "../assets/americano.png";
import espresso from "../assets/espresso.png";
import cappuccino from "../assets/cappuccino.png";
import macchiato from "../assets/Macchiato.png";
import Flat_White from "../assets/Flat_White.png";
// other
import { Link } from "react-router-dom";
const HomeNavigationButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Показываем кнопку после прокрутки на 400px
      setVisible(scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`fixed left-0 bottom-0 w-full transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="flex justify-end pb-17 pr-5">
        <svg onClick={goToHome} xmlns="http://www.w3.org/2000/svg" viewBox="1 1 100 100" width='40px' height='40px'>
          {/* <!-- Black square background --> */}
          <rect width="100" height="100" rx="70" ry="70" fill="#C99E71" />

          {/* <!-- White upward arrow --> */}
          <path d="M25 60 L50 30 L75 60" stroke="#14110E" stroke-width="8" stroke-linecap="round" strokeLinejoin="round" fill="none" />
        </svg>
        {/* <span>Back Home</span> */}
      </div>
    </div>
  );
};


const Section = () => {

  return (
    <section className="w-full h-[5200px]">

      {/* section 1 */}
      <section
        className="w-full h-[800px] bg-gray-300 bg-cover bg-center object-cover"
        style={{ backgroundImage: `url(${coffeeImg})` }}
      >
        {/* title */}
        <div id="home">
          <ul className="py-[200px] px-[140px] space-y-10">
            <h1 className="text-white righteous-regular text-[72px] tracking-wide font-bold leading-20 transition duration-700 ease-in-out transform hover:scale-105 hover:shadow-lg">
              Enjoy Your <br /> Morning Coffee.
            </h1>
            <ol className="text-[20px] text-gray-600 font-thin capitalize ">  {/* transition duration-700 ease-in-out transform hover:scale-105 hover:shadow-lg */}
              The coffee is brewed by first roasting the green coffee <br /> beans over hot coals in a brazier. Given to Opportunity
            </ol>
            <button className="bg-[#C99E71] w-[130px] h-[50px] transition duration-700 hover:bg-[#b8885c] hover:scale-105">
              <Link to={'/test_coffee'}>
                TEST COFFEE
              </Link>
            </button>
          </ul>
        </div>
      </section>


      {/* section 2  --  cart */}
      <section id="cart" className="w-full h-[1200px] flex justify-center">
        <div className="w-[1240px] h-[1200px]">
          {/* card body 1 */}
          <div className="flex justify-evenly mt-14">
            {/* card1 */}
            <div className="w-[350px] h-[462px] transition duration-700 ease-in-out transform hover:scale-105 hover:shadow-lgtransition">
              <ul className="flex py-[12px] px-3 gap-1 text-[24px] hover:underline underline-offset-2 hover:text-[#c69b6e] font-bold">
                <ol className="text-[#C99E71]">01</ol>
                <ol className="righteous-regular">Best Coffee Flavour</ol>
              </ul>
              <img src={bestCoffe} alt="" />
            </div>
            {/* card2 */}
            <div className="w-[350px] h-[462px] transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
              <ul className="flex py-[12px] px-3 gap-1 text-[24px] hover:text-[#c69b6e] font-bold">
                <ol className="text-[#C99E71]">02</ol>
                <ol className="righteous-regular">Place to get lost</ol>
              </ul>
              <img src={plase_coffee} alt="" />
            </div>
            {/* card3 */}
            <div className="w-[350px] h-[462px] transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
              <ul className="flex py-[12px] px-3 gap-1 text-[24px] hover:text-[#c69b6e] font-bold">
                <ol className="text-[#C99E71]">03</ol>
                <ol className="righteous-regular">Proper Roasting</ol>
              </ul>
              <img src={proper} alt="" />
            </div>
          </div>
          {/* card body 2 */}
          <div className="flex mt-30 justify-evenly">
            <div className="space-y-[30.6px]">
              <img className="w-[298px] h-[302px]" src={plase_coffee} alt="" />
              <img className="w-[298px] h-[302px]" src={bestCoffe} alt="" />
            </div>
            <img className="w-[298px] h-[635px]" src={dobleCoffee} alt="" />
            {/* Our history card */}
            <ul className="w-[450px] h-[500px] transition duration-700 ease-in-out mt-16 bg-[#1C1814] flex flex-col justify-center space-y-3 text-left pl-6 hover:scale-105 hover:shadow-lg">
              <li className="text-[#C99E71] text-[18px]">Our history</li>
              <ol className="righteous-regular text-[48px] leading-[52px]">
                Create a <br /> new story with us
              </ol>
              <p className="text-[16px] font-thin text-gray-400 capitalize leading-[22px]">
                mauris rhoncus in imperdiet placerat. vestibu emismd <br /> nisl suscipit
                ligula volutpat, a feugiat urna maximus. <br /> curabitur massa nibh tincidunt.
                donec et nibh maximus, est <br /> eu, mattis nunc. praesent ut quam quis quam venen <br />
                atis fringilla. morbi vestibulum id tellus commodo mattis. <br /> aliquam erat volutpat.
              </p>
            </ul>
          </div>
        </div>
      </section>


      {/* section-3 || popular product */}
      <section id="product" className="w-full h-[710px] flex flex-col items-center mt-30">
        {/* small-cart-section */}
        <div className=" w-[1240px] h-[700px] ">
          <h1 className="text-[#C99E71] text-[18px] text-center pt-12">Popular Product</h1>

          {/* add cart */}
          <div className="flex justify-around mt-14 uppercase righteous-regular">
            {/* cart 1 -- brazil coffee gred */}
            <div className="flex flex-col space-y-5 items-center justify-center w-[340px] h-[500px] text-center">
              <img src={BagPacking} alt="" />
              <p className="text-[25px]">brazil coffee gred</p>
              <button className=" w-[150px] h-[50px] bg-[#C99E71]">
                {/* add to cart */}
                <Link className="flex justify-center items-center capitalize" to={'/add_cart'}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="white" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
                    <path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
                    <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="white" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
                  </svg>
                  add to cart
                </Link>
              </button>
            </div>

            {/* cart 2 -- brazil coffee gred */}
            <div className="flex flex-col space-y-3 items-center justify-center w-[340px] h-[500px] text-center">
              <img src={BagPacking} alt="" />
              <h1 className="flex items-center text-[#C99E71]">Coffee
                <span className="flex ml-2">
                  <img className="w-[20px] h-[20px]" src={star} alt="" />
                  <img className="w-[20px] h-[20px]" src={star} alt="" />
                  <img className="w-[20px] h-[20px]" src={star} alt="" />
                  <img className="w-[20px] h-[20px]" src={star1} alt="" />
                </span>
              </h1>
              <p className="text-[25px]">brazil coffee gred</p>
              <p className="">Price - <span className="text-[#C99E71] hover:underline underline-offset-2">$320.00/</span> $358</p>
            </div>

            {/* cart 3 -- brazil coffee gred */}
            <div className="flex flex-col space-y-3 items-center justify-center w-[340px] h-[500px] text-center">
              <img src={BagPacking} alt="" />
              <h1 className="flex items-center text-[#C99E71]">Coffee
                <span className="flex ml-2">
                  <img className="w-[20px] h-[20px]" src={star} alt="" />
                  <img className="w-[20px] h-[20px]" src={star} alt="" />
                  <img className="w-[20px] h-[20px]" src={star} alt="" />
                  <img className="w-[20px] h-[20px]" src={star1} alt="" />
                </span>
              </h1>
              <p className="text-[25px]">brazil coffee gred</p>
              <p className="">Price - <span className="text-[#C99E71] hover:underline underline-offset-2">$340.00/</span> $378</p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <button className="w-[200px] h-[50px] bg-[#C99E71] capitalize mt-6 righteous-regular transform transition-all duration-300 hover:scale-105">
          <Link to="/view_Product">View all product</Link>
        </button>
      </div>
      {/* Menu */}
      <section id="menu" className="w-full h-[840px] mt-6 flex justify-center">
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
      {/* Testimonial */}
      <section id="testimonial" className="w-full h-[640px] pt-6 flex justify-center">
        <div className="w-[1240px] h-[610px] pt-16">
          {/* Отзыв */}
          <h1 className="text-center text-[#C99E71] text-[18px]">Testimonial</h1>
          <p className="text-center text-[48px] righteous-regular">Says our customers</p>
          {/* other */}
          <div>
            {/* 1 */}
            <div className="flex justify-evenly mt-14">
              {/* comment 1 */}
              <div className="bg-[#1C1814] w-[500px] h-[270px] pt-7">
                <div className="flex justify-evenly items-center">
                  <img className="w-[129px] h-[139px]" src={men} width="129px" height="139px" alt="" />
                  <p className="text-[16px] text-gray-500  capitalize">Education WP is a special build for effective <br /> education & Learning Management System <br /> site. Education WP is the next generation & <br /> one of the best education WordPress themes <br /> which all the strength of eLearning WP..</p>
                </div>
                <div className="mt-7 ml-4.5 w-[460px] flex justify-between items-center">
                  {/* title */}
                  <ul>
                    <ol className="text-[18px]">John Smith</ol>
                    <ol className="text-gray-500 text-[14px]">Product Designer</ol>
                  </ul>
                  {/* star */}
                  <div className="">
                    <svg width="116" height="20" viewBox="0 0 116 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FAA61A" />
                      <path d="M34 0L36.2451 6.90983H43.5106L37.6327 11.1803L39.8779 18.0902L34 13.8197L28.1221 18.0902L30.3673 11.1803L24.4894 6.90983H31.7549L34 0Z" fill="#FAA61A" />
                      <path d="M58 0L60.2451 6.90983H67.5106L61.6327 11.1803L63.8779 18.0902L58 13.8197L52.1221 18.0902L54.3673 11.1803L48.4894 6.90983H55.7549L58 0Z" fill="#FAA61A" />
                      <path d="M82 0L84.2451 6.90983H91.5106L85.6327 11.1803L87.8779 18.0902L82 13.8197L76.1221 18.0902L78.3673 11.1803L72.4894 6.90983H79.7549L82 0Z" fill="#FAA61A" />
                      <path d="M106 0L108.245 6.90983H115.511L109.633 11.1803L111.878 18.0902L106 13.8197L100.122 18.0902L102.367 11.1803L96.4894 6.90983H103.755L106 0Z" fill="#FAA61A" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* comment 2 */}
              <div className="bg-[#1C1814] w-[500px] h-[270px] pt-7">
                <div className="flex justify-evenly items-center">
                  <img className="w-[129px] h-[139px]" src={women} width="129px" height="139px" alt="" />
                  <p className="text-[16px] text-gray-500">Education WP is a special build for effective <br /> education & Learning Management System <br /> site. Education WP is the next generation & <br /> one of the best education WordPress themes <br /> which all the strength of eLearning WP..</p>
                </div>
                <div className="mt-7 ml-4.5 w-[460px] flex justify-between items-center">
                  {/* title */}
                  <ul>
                    <ol className="text-[18px]">Brett Lee</ol>
                    <ol className="text-gray-500 text-[14px]">User Experience Designer</ol>
                  </ul>
                  {/* star */}
                  <div className="">
                    <svg width="116" height="20" viewBox="0 0 116 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FAA61A" />
                      <path d="M34 0L36.2451 6.90983H43.5106L37.6327 11.1803L39.8779 18.0902L34 13.8197L28.1221 18.0902L30.3673 11.1803L24.4894 6.90983H31.7549L34 0Z" fill="#FAA61A" />
                      <path d="M58 0L60.2451 6.90983H67.5106L61.6327 11.1803L63.8779 18.0902L58 13.8197L52.1221 18.0902L54.3673 11.1803L48.4894 6.90983H55.7549L58 0Z" fill="#FAA61A" />
                      <path d="M82 0L84.2451 6.90983H91.5106L85.6327 11.1803L87.8779 18.0902L82 13.8197L76.1221 18.0902L78.3673 11.1803L72.4894 6.90983H79.7549L82 0Z" fill="#FAA61A" />
                      <path d="M106 0L108.245 6.90983H115.511L109.633 11.1803L111.878 18.0902L106 13.8197L100.122 18.0902L102.367 11.1803L96.4894 6.90983H103.755L106 0Z" fill="#FAA61A" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* cursor */}
            <div className="flex justify-between items-center mt-4 w-[1080px] h-[80px] ml-20">
              <ul className="space-y-4">
                <ol className="text-[#C99E71]">2/6 People</ol>
                <ol className="flex flex-col justify-center bg-[#1C1814] w-[120px] rounded-[10px] h-[6px]">
                  <p className="bg-[#C99E71] w-[50px] rounded-[10px] h-[4px]"></p>
                </ol>
              </ul>
              <div className="flex gap-3">
                {/* cursor left */}
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* <!-- Левая кнопка --> */}
                  <circle cx="25" cy="25" r="20" fill="black" />
                  <path d="M35 25H15" stroke="white" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
                  <path d="M22 32L15 25L22 18" stroke="white" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
                </svg>
                {/* cursor right */}
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* <!-- Правая кнопка --> */}
                  <circle cx="25" cy="25" r="20" fill="#C49A6C" />
                  <path d="M15 25H35" stroke="black" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
                  <path d="M28 18L35 25L28 32" stroke="black" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Reservation ---  Бронирование */}
      <section id="reservation" className="w-full h-[640px] mt-33 pt-5 flex justify-center">
        <div className=" w-[1040px] flex bg-gray-800 h-[600px]">
          <img className="" src={map} width='537' alt="" />
          {/* title */}
          <div className="w-[537px] h-[600px] bg-[#1C1814]">
            <ul className="text-center pt-27">
              <h1 id="reservation" className="text-[18px] text-[#C99E71] ">
                Reservation
              </h1>
              <p className="text-[42px]  righteous-regular">
                Booking a table
              </p>
            </ul>
            <div action="" className="flex flex-col items-center pt-6 space-y-9 ">
              {/* data */}
              <input
                className="w-[260px] h-[44px] text-[16px] px-4 py-2 border rounded-lg bg-[#1E1B18] border-[#C99E71] text-[#EADBC8] placeholder-[#A68A64] focus:outline-none focus:ring-2 focus:ring-[#C99E71] transition-all duration-300"
                type="text"
                placeholder="Enter Date"
              />
              {/* time */}
              <input
                className="w-[260px] h-[44px] text-[16px] px-4 py-2 border rounded-lg bg-[#1E1B18] border-[#C99E71] text-[#EADBC8] placeholder-[#A68A64] focus:outline-none focus:ring-2 focus:ring-[#C99E71] transition-all duration-300"
                type="text"
                placeholder="Enter number of People"
              />
              {/* phone_number */}
              <input
                className="w-[260px] h-[44px] text-[16px] px-4 py-2 border rounded-lg bg-[#1E1B18] border-[#C99E71] text-[#EADBC8] placeholder-[#A68A64] focus:outline-none focus:ring-2 focus:ring-[#C99E71] transition-all duration-300"
                type="text"
                placeholder="Phone Number"
              />
            </div>
            <button className="bg-[#C99E71] w-[160px] h-[45px] ml-42.5 mt-10">
              <p className="text-[23px] righteous-regular"><Link to={'/order'}>Order</Link></p>
            </button>
          </div>
        </div>
      </section>

      {/* navigate home page */}

      <HomeNavigationButton />
    </section>
  );
};

export default Section;
