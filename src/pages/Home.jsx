import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Parallax, Navigation} from "swiper";
import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/navigation";
import { datas } from "../data/data";
import { useDispatch } from "react-redux";
import { setHiet } from "../store/heitSlice";
import { datasJPG } from "../data/data_chapter";
import { datasJPG2 } from "../data/data_chapter2";
import { motion, useScroll, useSpring } from "framer-motion";
import { animateScroll as scroll } from 'react-scroll';
import { fetchData } from "../store/heitSlice";

SwiperCore.use([Parallax, Navigation]);

export function Home() {
   const { id } = useParams();
   const [currentSlide, setCurrentSlide] = useState(parseInt(id) - 1);
   const navigate = useNavigate();
   const [info,setInfo] = useState(datas);
   const sectionRef = useRef(null);
   const dispatch = useDispatch();
   const [pngs,setPngs] = useState(datasJPG);
   const [pngs2,setPngs2] = useState(datasJPG2);
   const [swiper2,setSwiper2] = useState();

      /// Framer motion

   const { scrollYProgress } = useScroll();
   const scaleX = useSpring(scrollYProgress, {
     stiffness: 100,
     damping: 30,
     restDelta: 0.001
   });
 

   const handleSlideChange = (swiper) => {
      const newSlideIndex = swiper.activeIndex;
      setCurrentSlide(newSlideIndex);
      navigate(`/${newSlideIndex + 1}`);
   };

   useEffect(() => {
      if (sectionRef.current) {
         const height = sectionRef.current.getBoundingClientRect().height;
         dispatch(setHiet({height}));
      }
      
   }, [dispatch, sectionRef.current]);

   useEffect(() => {
      setInfo(datas[id-1]);
      setPngs(datasJPG[id-1]);
      setPngs2(datasJPG2[id-1]);
   }, [id]);

   if(swiper2) {
      if(swiper2.enabled === true) {
         swiper2.slideTo(+id-1);
      };
   }

   return <>

      <motion.div className="progress-bar fixed bottom-0 w-full h-2 bg-red z-50 origin-left" style={{ scaleX }} />
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 2 }}
         ref={sectionRef} className="bg-cover duration-1000 bg-no-repeat h-[240vh] " 
         style={{
            backgroundImage: `url(${info.bg})`,
            opacity: 0,
          }}>
         <div className="w-full pt-20 duration-1000">
            <Swiper
               spaceBetween={800}
               slidesPerView={1}
               onSlideChange={handleSlideChange}
               parallax={true}
               speed={1000}
               onSwiper={setSwiper2}
               navigation={true
                  
               }
               className="mySwiper"
               initialSlide={currentSlide}
            >

               {datas.map(item => (
                  <SwiperSlide>
                     <div className="relative md:mt-10 mt-40 md:w-[110vh] w-80 mx-[50%] -translate-x-1/2">
                     <img
                        className="absolute z-10"
                        src={item.left}
                        alt="left"
                        data-swiper-parallax="-500"
                     />
                     <img
                        src={item.right}
                        alt="right"
                        className=""
                        data-swiper-parallax="500"
                     />
                  </div>
                  </SwiperSlide>
               ))}; 
            </Swiper>
         </div>
         <style>
            {`
          .swiper-button-prev,
          .swiper-button-next {
            color: white;
            padding: 0 2rem
          }
        `}
         </style>
         <div className="">
            <div className="text-white font-bold flex flex-col md:flex-row text-center text-clip md:text-sm md:gap-24 absolute md:bottom-6 mx-[50%] -translate-x-1/2 items-center bottom-45 whitespace-nowrap gap-10">
               <div className="text-sm w-40">
                  <p className="mb-2 md:whitespace-nowrap whitespace-normal">ORIGINAL RELEASE</p>

                  <p>{info.oreginal_relise}</p>
               </div>

               <div className="text-sm w-40">
                  <p className="mb-2">COLOR</p>

                  <p>{info.color}</p>
               </div>

               <p className="md:text-9xl text-6xl  transition-all duration-1000">{info.number}</p>

               <div className="text-sm w-40">
                  <p className="mb-2">COLLECTION</p>

                  <p>{info.collection}</p>
               </div>

               <div className="text-sm w-40">
                  <p className="mb-2">LOCATION</p>

                  <p>{info.location}</p>
               </div>

            </div>
         </div>

         <div className="text-white flex justify-center items-center md:m-0 mt-[32rem] ">

            <p className="md:text-6xl text-5xl font-bold font-playfair">{info.name}</p>
         </div>

         <div className="text-white flex justify-center items-center md:mt-20 mt-6 md:text-9xl text-3xl font-bold font-playfair w-3/4 mx-[50%] -translate-x-1/2">
           <p>{info.first_part_header}</p>
         </div>

         <div className="font-opensans md:text-xl text-gray-400 flex md:gap-20 md:mx-[10rem] md:my-20 text-sm gap-2 mx-5 my-4 md:justify-center">
            <p className="md:w-[30rem]">{info.first_description}</p>
            <p className="md:w-[30rem]">{info.second_description}</p>
         </div>
      </motion.div>

      <div className="md:pl-[8vw] px-20 pt-40 font-playfair flex md:flex-row flex-col" id="section">
         <div className="md:w-[28rem]">
            <div className="text-5xl font-bold ">{info.name_first_chapter}</div>
            <div className="flex">
               <div className="flex flex-col w-[5rem] gap-5 py-6  justify-start items-center ">
                  <div className=" border-2  border-black rounded-full h-12 w-12 rotate-90">
                     <p className="flex text-2xl justify-center font-bold pt-0.5">2</p>
                  </div>
                  <p className="rotate-90 mt-6 ">{info.year_first_chapter}</p>
                  
               </div>
               <div className="pt-10 ml-5 md:w-[10rem] w-[20rem]">{info.descr_first_chapter}</div>
            </div>
            
         </div>
         <div className="pt-10 md:w-[60rem] md:grid md:grid-cols-3 my-auto h-[20rem] md:gap-8">
            {pngs.map(item => (
               <div className="ml-12 font-bold">
                  <div className="md:w-[16rem]">
                     <div className="md:w-full md:h-[10rem] md:flex md:object-cover">
                       <img className="mb-5" src={item.png} alt={item.atl} />
                     </div>
                     <p className="mb-20 md:w-[15rem]">{item.description}</p>
                  </div>
               </div>
            ))}
         </div>

      </div>

      <div className="md:pl-[8vw] sm:pl-[10vw] px-20 pt-60 md:p-40 font-playfair flex md:flex-row flex-col" id="section">
         <div className="md:w-[28rem]">
            <div className="text-5xl font-bold ">{info.name_second_chapter}</div>
            <div className="flex">
               <div className="flex flex-col w-[5rem] gap-5 py-6  justify-start items-center ">
                  <div className=" border-2  border-black rounded-full h-12 w-12 rotate-90">
                     <p className="flex text-2xl justify-center font-bold pt-0.5">2</p>
                  </div>
                  <p className="rotate-90 mt-6 ">{info.year_second_chapter}</p>
                  
               </div>
               <div className="pt-10 ml-5 md:w-[12rem] w-[20rem]">{info.descr_second_chapter}</div>
            </div>
            
         </div>
         <div className="pt-10 md:w-[60rem] md:grid md:grid-cols-3 my-auto h-full md:gap-12">
            {pngs2.map(item => (
               <div className="ml-12 font-bold">
                  <div className="md:w-[16rem]">
                     <div className="md:w-[full] md:h-[10rem] md:flex md:object-cover">
                       <img className="mb-5" src={item.png} alt={item.atl} />
                     </div>
                     <p className="mb-20 md:w-[15rem]">{item.description}</p>
                  </div>
               </div>
            ))}
         </div>

      </div>
         <div className="mt-32 h-[13rem] bg-cover bg-no-repeat bg-black" style={{backgroundImage: `url(https://static.nike.com/a/images/vbnsnewodldr511fex2t/air-jordan-1.jpg)`}}>
      </div>

      <div className="md:h-[100vh]">
         <div className="md:pl-[15vw] px-20 pt-40 font-playfair flex md:flex-row flex-col">
            <div className="md:w-[28rem] font-playfair">
               <div className="text-5xl font-bold ">AJ {info.number} VAULT</div>
               <div className="flex">
                  <div className="flex flex-col w-[5rem] gap-5 py-6  justify-start items-center ">
                     <div className=" border-2  border-black rounded-full h-12 w-12 rotate-90">
                        <p className="flex text-2xl justify-center font-bold pt-0.5">2</p>
                     </div>
                     <p className="rotate-90 mt-6 ">Stories</p>

                  </div>
               </div>
            </div>
         </div>

         <div className="mt-20 md:ml-20 md:mr-20 md:gap-[2rem] relative  font-playfair ">
            <div className="flex md:flex-row flex-col justify-center">
               <div className="md:w-[50rem] md:h-[50vh] md:mb-0 mb-10 relative mx-14">
                  <p className=" absolute text-black rotate-90 top-5 -left-12">{info.brand}</p>
                  <p className=" absolute text-black rotate-90 bottom-5 -left-8 ">{info.brand_year}</p>
                  <div className="h-[12rem] bg-cover bg-no-repeat md:h-[30rem]" style={{backgroundImage: `url(${info.vault_img1})`}}></div>
               </div>

               <div className="w-[20rem] md:h-[50vh] relative mx-16">
                  <p className=" absolute text-black rotate-90 top-5 -left-12">{info.brand2}</p>
                  <p className=" absolute text-black rotate-90 bottom-14 -left-8">{info.brand_year2}</p>
                  <div className="h-[28rem] md:w-[23rem] bg-cover bg-no-repeat mr-10" style={{backgroundImage: `url(${info.vault_img2})`}}></div>
               </div>
            </div>
         </div>
      </div>

      <div className="w-100% mt-28 md:mt-0 md:h-[35rem] bg-cover bg-no-repeat" style={{backgroundImage: `url(${info.bg_over})`}}>
               <div className="flex flex-col items-center justify-center h-full">
                  <p className="font-bold font-playfair md:text-7xl md:mt-0 mt-10 text-2xl text-white md:w-[50rem] w-3/4">{info.description_over}</p>
                  <p className="mt-10 md:mb-0 mb-10 text-white font-opensans">MJ</p>
               </div>
      </div>

      <div className="mt-20 mb-1 h-[10rem] w-full bg-red text-white font-playfair flex justify-around text-3xl px-10">
         <div className="flex justify-center items-center gap-3">
         <p className=" w-4 h-10">{+id === 1 ? "" : +id-1  }</p>
            <button id="prev" className="text-5xl" onClick={() => {
               if (+id === 1) return;
               navigate(`/${+id-1}`);
               scroll.scrollToTop();
               
            }}>PREV</button>
         </div>
         <div className=" h-2/3 w-[2px] mt-8 bg-white items-center justify-center"></div>
         <div className="flex justify-center items-center gap-3">

            <button id="next" className="text-5xl" onClick={() => {
               if (+id === 35) return;
               navigate(`/${+id+1}`);
               scroll.scrollToTop();
            }}>NEXT</button>
            <p className=" w-4 h-10">{id < 35 ? +id + 1 : ""}</p>
         </div>
      </div>
   </>
}
