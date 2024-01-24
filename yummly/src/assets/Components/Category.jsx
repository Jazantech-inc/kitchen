import React from "react";
import { NavLink } from "react-router-dom";
import indian from "/Images/indian.png"
import america from "/Images/american.webp"
import thai from "/Images/thai.png"
import japanese from "/Images/japanese.png"
import italian from "/Images/italian.webp"
import Mexican from "/Images/mexican.webp"
import Southern from "/Images/southern.webp"
import French from "/Images/french.png"
import Chinese from "/Images/chinese.png"
import Cajun from "/Images/cajun.png"
import Mediterranean from "/Images/mediterranean.png"
import Greek from "/Images/greek.png"
import Spanish from "/Images/spanish.png"
import German from "/Images/german.png"
import Irish from "/Images/irish.png"
import European from "/Images/european.webp"
import African from "/Images/african.jpg"
import British from "/Images/british.jpg"
import Caribbean from "/Images/Caribbean.jpg"
import EasternEuropean from "/Images/EasternEuropean.jpg"
import Korean from "/Images/Korean.jpg"
import LatinAmerican from "/Images/LatinAmerican.jpg"
import MiddleEastern from "/Images/MiddleEastern.jpg"
import Nordic from "/Images/Nordic.jpg"
import Vietnamese from "/Images/Vietnamese.jpg"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css/skyblue';

const Category = () => {
    return (
        <div className="relative">
            <h1 className="absolute -top-10 left-0 font-medium font-serif text-lg mm:left-3 mm:-top-9 mm:font-semibold lm:left-16 sm:-top-20 sm:left-20 sm:text-3xl md:left-36 md:text-3xl lg:text-2xl lg:left-36 lxl:-top-20 lxl:left-56 ">What's your favourite cuisines?</h1>
        <div className="List  flex justify-center items-center mt-36 sm:mt-72 ">
            <Splide
                options={{
                    
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    autoplay:false,
                    width:"100%",
                    height:"100%",
                    wheel:true,
                    mediaQuery:"min",
                    breakpoints:{
                        1240:{
                            perPage:8,
                            gap:'1rem',
                            arrows:true,
                        },
                        1024:{
                            perPage:7,
                            gap:'5rem'
                        },
                        768:{
                            perPage:6,
                            gap:'1rem'
                            
                        },
                        640:{
                            perPage:5,
                            gap:"1rem"
                        },
                        425:{
                            perPage:4,
                            gap:"7rem"
                        },
                        375:{
                            perPage:4,
                            gap:"7rem"
                        },
                        320:{
                            perPage:3,
                            gap:'3rem'
                        },
                      
                       
                    },
                }}
            >
                <SplideSlide>
            <NavLink
                to={"/cuisine/Indian"}
                className="flex flex-col justify-center relative items-center rounded-full  w-28 h-28 cursor-pointer "
            >
                <img src={indian} alt="Indian"  />
                <h4 className="text-white absolute top-10 text-base">Pakistan</h4>
            </NavLink>
            </SplideSlide>
            <SplideSlide>
            <NavLink
                to={"/cuisine/American"}
                className="flex flex-col justify-center items-center relative rounded-full  w-28 h-28 cursor-pointer  "
            >
                <img src={america} alt="American"  />
                <h4 className="text-white text-base absolute top-10">American</h4>
            </NavLink>
            </SplideSlide>
            <SplideSlide>
            <NavLink
                to={"/cuisine/Thai"}
                className="flex flex-col justify-center items-center relative rounded-full  w-28 h-28 cursor-pointer  "
            >
                <img src={thai} alt="Thai" />
                <h4 className="text-white text-base absolute top-10">Thai</h4>
            </NavLink>
            </SplideSlide>

            <SplideSlide>
            <NavLink
                to={"/cuisine/Japanese"}
                className="flex flex-col justify-center items-center relative rounded-full b w-28 h-28 cursor-pointer "
            >
                <img src={japanese} alt="Japanese" />
                <h4 className="text-white text-base absolute top-10">Japanese</h4>
            </NavLink>
            </SplideSlide>

            <SplideSlide>
            <NavLink
                to={"/cuisine/Italian"}
                className="flex flex-col justify-center items-center relative rounded-full b w-28 h-28 cursor-pointer "
            >
                <img src={italian} alt="Italian" />
                <h4 className="text-white text-base absolute top-10">italian</h4>
            </NavLink>
            </SplideSlide>

            <SplideSlide>
            <NavLink
                to={"/cuisine/Mexican"}
                className="flex flex-col justify-center items-center relative rounded-full b w-28 h-28 cursor-pointer "
            >
                <img src={Mexican} alt="Mexican" />
                <h4 className="text-white text-base absolute top-10">Mexican</h4>
            </NavLink>
            </SplideSlide>

            <SplideSlide>
            <NavLink
                to={"/cuisine/Southern"}
                className="flex flex-col justify-center items-center relative rounded-full b w-28 h-28 cursor-pointer "
            >
                <img src={Southern} alt="Southern" />
                <h4 className="text-white text-base absolute top-10">Southern</h4>
            </NavLink>
            </SplideSlide>

            <SplideSlide>
            <NavLink
                to={"/cuisine/French"}
                className="flex flex-col justify-center items-center relative rounded-full b w-28 h-28 cursor-pointer "
            >
                <img src={French} alt="French" />
                <h4 className="text-white text-base absolute top-10">French</h4>
            </NavLink>
            </SplideSlide>

            <SplideSlide>
            <NavLink
                to={"/cuisine/Chinese"}
                className="flex flex-col justify-center items-center relative rounded-full b w-28 h-28 cursor-pointer "
            >
                <img src={Chinese} alt="Chinese" />
                <h4 className="text-white text-base absolute top-10">Chinese</h4>
            </NavLink>
            </SplideSlide>

            <SplideSlide>
            <NavLink
                to={"/cuisine/Cajun"}
                className="flex flex-col justify-center items-center relative rounded-full b w-28 h-28 cursor-pointer "
            >
                <img src={Cajun} alt="Cajun" />
                <h4 className="text-white text-base absolute top-10">Cajun</h4>
            </NavLink>
            </SplideSlide>

            <SplideSlide>
            <NavLink
                to={"/cuisine/Mediterranean"}
                className="flex flex-col justify-center items-center relative rounded-full b w-28 h-28 cursor-pointer "
            >
                <img src={Mediterranean} alt="Mediterranean" />
                <h4 className="text-white text-base absolute top-10">Mediterranean</h4>
            </NavLink>
            </SplideSlide>

            <SplideSlide>
            <NavLink
                to={"/cuisine/Greek"}
                className="flex flex-col justify-center items-center relative rounded-full b w-28 h-28 cursor-pointer "
            >
                <img src={Greek} alt="Greek" />
                <h4 className="text-white text-base absolute top-10">Greek</h4>
            </NavLink>
            </SplideSlide>

            <SplideSlide>
            <NavLink
                to={"/cuisine/Spanish"}
                className="flex flex-col justify-center items-center relative rounded-full b w-28 h-28 cursor-pointer "
            >
                <img src={Spanish} alt="Spanish" />
                <h4 className="text-white text-base absolute top-10">Spanish</h4>
            </NavLink>
            </SplideSlide>

            <SplideSlide>
            <NavLink
                to={"/cuisine/German"}
                className="flex flex-col justify-center items-center relative rounded-full b w-28 h-28 cursor-pointer "
            >
                <img src={German} alt="German" />
                <h4 className="text-white text-base absolute top-10">German</h4>
            </NavLink>
            </SplideSlide>

            <SplideSlide>
            <NavLink
                to={"/cuisine/Irish"}
                className="flex flex-col justify-center items-center relative rounded-full b w-28 h-28 cursor-pointer "
            >
                <img src={Irish} alt="Irish" />
                <h4 className="text-white text-base absolute top-10">Irish</h4>
            </NavLink>
            </SplideSlide>

            <SplideSlide>
            <NavLink
                to={"/cuisine/African"}
                className="flex flex-col justify-center items-center relative rounded-full b w-28 h-28 cursor-pointer "
            >
                <img src={African} alt="African" className="rounded-full w-28 h-28 " />
                <div className="z-50 absolute w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.5)] rounded-full  "></div>
                <h4 className="text-white text-base absolute top-10 z-50">African</h4>
            </NavLink>
            </SplideSlide>

            <SplideSlide>
            <NavLink
                to={"/cuisine/British"}
                className="flex flex-col justify-center items-center relative rounded-full b w-28 h-28 cursor-pointer "
            >
                <img src={British} alt="British"className="rounded-full w-28 h-28 " />
                <div className="z-50 absolute w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.5)] rounded-full  "></div>
                <h4 className="text-white text-base absolute top-10 z-50">British</h4>
            </NavLink>
            </SplideSlide>

            <SplideSlide>
            <NavLink
                to={"/cuisine/Caribbean"}
                className="flex flex-col justify-center items-center relative rounded-full b w-28 h-28 cursor-pointer "
            >
                <img src={Caribbean} alt="Caribbean" className="rounded-full w-28 h-28 "  />
                <div className="z-50 absolute w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.5)] rounded-full  "></div>
                <h4 className="text-white text-base absolute top-10 z-50">Caribbean</h4>
            </NavLink>
            </SplideSlide>

            <SplideSlide>
            <NavLink
                to={"/cuisine/Eastern European"}
                className="flex flex-col justify-center items-center relative rounded-full b w-28 h-28 cursor-pointer "
            >
                <img src={EasternEuropean} alt="Eastern European" className="rounded-full w-28 h-28 "  />
                <div className="z-50 absolute w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.5)] rounded-full  "></div>
                <h4 className="text-white text-base absolute top-6 left-6 z-50">Eastern European</h4>
            </NavLink>
            </SplideSlide>

            <SplideSlide>
            <NavLink
                to={"/cuisine/European"}
                className="flex flex-col justify-center items-center relative rounded-full b w-28 h-28 cursor-pointer "
            >
                <img src={European} alt="European" />
                <h4 className="text-white text-base absolute top-10">European</h4>
            </NavLink>
            </SplideSlide>

            <SplideSlide>
            <NavLink
                to={"/cuisine/Korean"}
                className="flex flex-col justify-center items-center relative rounded-full b w-28 h-28 cursor-pointer "
            >
                <img src={Korean} alt="Korean" className="rounded-full w-28 h-28 "  />
                <div className="z-50 absolute w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.5)] rounded-full  "></div>
                <h4 className="text-white text-base absolute top-10 z-50">Korean</h4>
            </NavLink>
            </SplideSlide>

            <SplideSlide>
            <NavLink
                to={"/cuisine/Latin American"}
                className="flex flex-col justify-center items-center relative rounded-full b w-28 h-28 cursor-pointer "
            >
                <img src={LatinAmerican} alt="Latin American" className="rounded-full w-28 h-28 "  />
                <div className="z-50 absolute w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.5)] rounded-full  "></div>
                <h4 className="text-white text-base absolute top-10 z-50">Latin American</h4>
            </NavLink>
            </SplideSlide>

            <SplideSlide>
            <NavLink
                to={"/cuisine/Middle Eastern"}
                className="flex flex-col justify-center items-center relative rounded-full b w-28 h-28 cursor-pointer "
            >
                <img src={MiddleEastern} alt="Middle Eastern" className="rounded-full w-28 h-28 "  />
                <div className="z-50 absolute w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.5)] rounded-full  "></div>
                <h4 className="text-white text-base absolute top-10 z-50">Middle Eastern</h4>
            </NavLink>
            </SplideSlide>

            <SplideSlide>
            <NavLink
                to={"/cuisine/Nordic"}
                className="flex flex-col justify-center items-center relative rounded-full b w-28 h-28 cursor-pointer "
            >
                <img src={Nordic} alt="Nordic" className="rounded-full w-28 h-28 "  />
                <div className="z-50 absolute w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.5)] rounded-full  "></div>
                <h4 className="text-white text-base absolute top-10 z-50">Nordic</h4>
            </NavLink>
            </SplideSlide>

            <SplideSlide>
            <NavLink
                to={"/cuisine/Vietnamese"}
                className="flex flex-col justify-center items-center relative rounded-full b w-28 h-28 cursor-pointer "
            >
                <img src={Vietnamese} alt="Vietnamese" className="rounded-full w-28 h-28 object-cover "  />
                <div className="z-50 absolute w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.5)] rounded-full  "></div>
                <h4 className="text-white text-base absolute top-10 z-50">Vietnamese</h4>
            </NavLink>
            </SplideSlide>



            </Splide>
        </div>
        </div>
    );
};

export default Category;
