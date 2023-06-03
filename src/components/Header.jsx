import { useState,useEffect } from "react"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { animateScroll as scroll } from 'react-scroll';
import { useNavigate } from "react-router-dom";


export function Header () {

   const [headerPoint, setHeaderPoint] = useState(false);
   const navigate = useNavigate();

   const handleHeader = () => {
      setHeaderPoint(!headerPoint) 
   };
   const sectionHeight = useSelector((state) => state.heit.sectionHeight);


   useEffect(() => {
      const logo = document.getElementById('logo');
  
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const triggerHeight = sectionHeight*2; // высота, при которой меняется цвет
  
        if (scrollTop > triggerHeight) {
          logo.setAttribute('fill', '#000000');
        } else {
          logo.setAttribute('fill', '#ffffff');
        }
      };
  
      window.addEventListener('scroll', handleScroll);

      navigate('/1');
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

   return <>
      <div>

      <div className="z-10 fixed transition-all duration-1000 bg-[#1c1c1c] w-full h-screen overflow-y-scroll overflow-hidden" style={{top:headerPoint ? '0px' : '-100vh'}}>
            <div className="p-[25px] flex items-center">
               <a className="mr-12" href="https://www.nike.com/">
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/images/ui/nav-nike-swoosh.png" alt="nike_array" />
               </a>
               <a className="text-grey  mr-12 font-playfair transition-all duration-100
               hover:text-white hover:underline hover:underline-offset-4 hover:decoration-rose-800 hidden md:block" href="https://www.nike.com/jordan"> JORDAN.COM</a>
               <a className="text-grey font-playfair transition-all duration-100
               hover:text-white hover:underline hover:underline-offset-4 hover:decoration-rose-800 hidden md:block" href="https://www.nike.com/jordan"> AIR JORDAN BLOG</a>
            </div>

            <div className="grid md:grid-cols-9 md:grid-rows-4 md:mx-auto md:my-28 md:h-3/6 md:w-5/6 grid-cols-4 row-auto mt-40 mx-10 gap-3">
               <Link to="1" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj1.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ I</p>
                  </div>
               </Link>
               <Link to="2"  className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj2.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ II</p>
                  </div>
               </Link>
               <Link to="3" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj3.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ III</p>
                  </div>
               </Link>
               <Link to="4" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj4.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ IV</p>
                  </div>
               </Link>
               <Link to="5" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj5.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ V</p>
                  </div>
               </Link>
               <Link to="6" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj6.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ VI</p>
                  </div>
               </Link>
               <Link to="7" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj7.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ VII</p>
                  </div>
               </Link>
               <Link to="8" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj8.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ VIII</p>
                  </div>
               </Link>
               <Link to="9" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj9.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ IX</p>
                  </div>
               </Link>
               <Link to="10" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj10.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ X</p>
                  </div>
               </Link>
               <Link to="11" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj11.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XI</p>
                  </div>
               </Link>
               <Link to="12" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj12.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XII</p>
                  </div>
               </Link>
               <Link to="13" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj13.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XII</p>
                  </div>
               </Link>
               <Link to="14" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj14.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XIV</p>
                  </div>
               </Link>
               <Link to="15" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj15.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XV</p>
                  </div>
               </Link>
               <Link to="16" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj16.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XVI</p>
                  </div>
               </Link>
               <Link to="17" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj17.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XVII</p>
                  </div>
               </Link>
               <Link to="18" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj18.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XVIII</p>
                  </div>
               </Link>
               <Link to="19" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj19.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XIX</p>
                  </div>
               </Link>
               <Link to="20" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj20.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XX</p>
                  </div>
               </Link>
               <Link to="21" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj21.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XXI</p>
                  </div>
               </Link>
               <Link to="22" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj22.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XXII</p>
                  </div>
               </Link>
               <Link to="23" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj23.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XXIII</p>
                  </div>
               </Link>
               <Link to="24" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj24.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XXIV</p>
                  </div>
               </Link>
               <Link to="25" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj25.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XXV</p>
                  </div>
               </Link>
               <Link to="26" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj26.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XXVI</p>
                  </div>
               </Link>
               <Link to="27" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj27.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XXVII</p>
                  </div>
               </Link>
               <Link to="28" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj28.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XXVIII</p>
                  </div>
               </Link>
               <Link to="29" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj29.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XXIX</p>
                  </div>
               </Link>
               <Link to="30" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj30.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XXX</p>
                  </div>
               </Link>
               <Link to="31" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj31.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XXXI</p>
                  </div>
               </Link>
               <Link to="32" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj32.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XXXII</p>
                  </div>
               </Link>
               <Link to="33" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/_teaser/img/aj33.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XXXIII</p>
                  </div>
               </Link>
               <Link to="34" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://www.jordan.com/collection/content/dam/jordan/air-jordan-collection/images/aj34/aj34.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XXXIV</p>
                  </div>
               </Link>
               <Link to="35" className=" relative" onClick={()=> 
               {
                  handleHeader();
                  scroll.scrollToTop()
               }}>
                  <img src="https://static.nike.com/a/images/w_1536,c_limit/963a806b-3f06-4612-953f-b1796fde1358/image.png" alt="1" />
                  <div className="absolute left-0 top-0 font-bold font-playfair text-smw-full h-full w-full transition-all duration-300 text-dark-grey hover:text-white">
                     <p className="absolute md:top-20 md:left-10 left-6 top-16">AJ XXXV</p>
                  </div>
               </Link>
             
            </div>
         </div>
         <div 
            className="z-10 fixed top-[50px] mx-[50%] -translate-x-[50%] cursor-pointer" onClick={()=> 
                  {
                     handleHeader();
                  }}>
            <svg width="66px"height="66px" viewBox="0 0 66 62">
               <g className="transition-all duration-1000" id="logo" fill={headerPoint ? "#ffffff" : "#000000"}><path d="M36.7131076,4.08258758 C36.6906076,3.94608758 36.6796076,3.81008758 36.6741076,3.67358758 C36.5876076,1.72958758 38.0736076,0.0900875806 40.0001076,0.00358758064 C41.9206076,-0.0834124194 43.5451076,1.42258758 43.6321076,3.35958758 C43.7161076,5.30258758 42.2236076,6.94258758 40.3031076,7.02858758 C40.1856076,7.03158758 40.0596076,7.03158758 39.9481076,7.02458758 C39.8681076,7.04558758 39.8221076,7.05208758 39.7526076,7.10808758 C39.5451076,7.41808758 40.2446076,7.37458758 39.7361076,8.72158758 C39.7361076,8.72158758 39.7301076,8.87158758 39.6731076,9.02108758 C39.6241076,9.53858758 39.3831076,11.0740876 39.3331076,11.9005876 C39.4326076,12.0175876 39.4591076,12.0775876 39.4396076,12.3675876 C39.3866076,12.7565876 39.2746076,13.7100876 39.1121076,14.3200876 C38.9781076,14.8430876 38.7591076,14.9400876 38.5916076,15.0635876 C38.3206076,16.1505876 38.2311076,17.0465876 37.5806076,18.3555876 C37.4986076,19.3560876 37.4201076,19.6250876 37.2011076,20.1120876 C37.1386076,21.5885876 37.2346076,21.8120876 36.1881076,24.1205876 C35.9081076,25.2115876 36.1296076,25.9710876 36.3631076,27.1175876 C36.6146076,28.2895876 37.3606076,28.8010876 37.4456076,29.9970876 C37.6371076,32.8200876 37.5251076,34.7360876 36.8686076,36.9290876 L37.3606076,38.1905876 C37.9986076,38.5100876 39.5881076,39.3720876 38.6601076,40.6490876 C39.9006076,41.3485876 41.7826076,42.1050876 43.3111076,43.4980876 C43.9271076,44.0415876 44.5776076,44.6375876 45.1556076,45.3310876 C46.2906076,45.5420876 46.1656076,45.6300876 46.9936076,46.1705876 C49.4256076,47.7710876 53.3236076,50.9175876 55.5671076,53.1335876 C55.9576076,53.3725876 56.1156076,53.5490876 56.4296076,53.7255876 C56.4796076,53.8230876 56.4921076,53.8455876 56.4811076,53.8750876 C56.3636076,54.1515876 56.3691076,54.1590876 56.2606076,54.3795876 C56.3836076,54.5190876 56.6106076,54.6585876 56.7466076,54.7820876 C56.8776076,54.8290876 56.8776076,54.7655876 57.1026076,54.7165876 C57.3831076,54.9950876 57.7361076,55.2215876 57.8611076,55.2155876 C58.2576076,55.1255876 58.1881076,55.2055876 58.5281076,54.8400876 C58.6536076,54.7195876 58.8481076,54.8490876 58.8481076,54.8490876 C58.9781076,54.7030876 59.2521076,54.4195876 59.6121076,54.2160876 C59.9016076,54.0525876 60.4471076,54.0525876 60.4471076,54.0525876 C60.6281076,54.0550876 60.5881076,54.2460876 60.5721076,54.3015876 C60.3641076,54.4055876 59.9251076,54.5115876 59.6766076,54.6885876 C59.1296076,55.2280876 58.6926076,55.9685876 58.6926076,55.9685876 C59.7706076,55.8495876 60.4206076,56.1355876 61.3146076,56.0520876 C61.8006076,56.0355876 62.1591076,56.0775876 62.6806076,55.7185876 C62.6806076,55.7185876 63.1826076,55.3785876 63.6246076,55.2030876 C64.0606076,55.0225876 64.4626076,55.1390876 64.8301076,55.4230876 C65.0906076,55.7325876 65.2486076,55.7385876 64.8321076,56.1560876 C64.6836076,56.3190876 64.4666076,56.4980876 64.1916076,56.7550876 C63.7036076,57.2180876 63.0571076,57.8285876 62.3836076,58.3355876 C61.7041076,58.8385876 60.9321076,59.2955876 60.4531076,59.4945876 C59.2411076,60.3310876 59.5291076,60.1115876 58.5686076,60.9440876 C58.4491076,61.0480876 58.1291076,61.2340876 57.9741076,61.3285876 C57.5976076,61.5640876 57.4856076,61.3570876 57.2551076,60.9020876 C57.2551076,60.9020876 57.1511076,60.7340876 56.9776076,60.3675876 C56.7886076,59.9715876 56.6526076,59.5205876 56.7136076,59.5350876 C56.4886076,59.4985876 55.5181076,58.2885876 55.5251076,58.0340876 C55.3136076,57.9785876 54.4366076,57.0750876 54.4091076,56.9045876 L53.6241076,56.2360876 C52.7066076,56.4055876 52.5121076,55.8225876 50.1446076,54.0355876 C49.8681076,54.0190876 49.4466076,53.8595876 48.8451076,53.3865876 C47.7791076,52.4765876 45.2211076,50.4170876 44.7826076,50.1725876 C44.3136076,49.9205876 43.7491076,49.6735876 43.4126076,49.3735876 C42.8876076,49.2640876 42.6071076,49.2035876 42.3466076,49.1205876 C42.0816076,49.0360876 41.8381076,48.9360876 41.1681076,48.8300876 C40.0731076,48.6605876 38.9446076,48.1710876 37.8681076,47.5945876 C37.3606076,47.3365876 36.9176076,47.1975876 36.4756076,46.9980876 C35.4946076,46.5450876 34.6526076,46.1450876 33.9991076,45.9715876 C33.7491076,45.9380876 32.5606076,45.5450876 31.9436076,45.1585876 C31.7286076,45.0380876 31.6031076,44.9280876 31.4646076,44.8920876 C31.1346076,44.8040876 30.9206076,44.9280876 30.7691076,44.9780876 C29.9536076,45.3770876 29.1906076,45.7245876 28.4846076,46.0840876 C27.8276076,46.4215876 27.2216076,46.7675876 26.5801076,47.1165876 C25.9991076,47.4365876 25.3331076,47.7305876 24.6466076,48.0375876 C24.6466076,48.0375876 22.6861076,48.9695876 21.6231076,49.3195876 C20.6926076,50.0505876 18.7861076,51.3075876 17.6271076,51.9265876 C17.0531076,52.1795876 15.9371076,52.8530876 15.4221076,52.9995876 C15.1286076,53.2285876 14.0791076,53.9425876 13.2541076,54.5330876 C12.6206076,54.9860876 12.1411076,55.3685876 12.1411076,55.3685876 C11.7716076,55.6880876 11.7961076,55.8495876 11.1081076,55.5325876 C10.9176076,55.6880876 10.7661076,55.7795876 10.6401076,55.8685876 C10.1326076,56.2220876 10.0921076,56.1325876 9.91060757,56.1145876 C9.55760757,56.4160876 9.51760757,56.2520876 9.20460757,56.5955876 C9.00010757,56.8985876 9.20460757,56.8320876 8.78210757,56.9690876 C8.69010757,57.0015876 8.65010757,57.1115876 8.57760757,57.1680876 C8.23060757,57.4390876 8.21110757,58.2325876 7.40310757,58.2690876 C6.92360757,58.5915876 7.03260757,59.0015876 6.67960757,58.9750876 C6.68960757,59.3280876 6.01960757,59.8180876 5.90110757,59.8150876 C4.86460757,60.1485876 4.81160757,59.3775876 3.56110757,59.9170876 C3.39960757,59.9880876 3.15810757,60.1840876 2.85210757,60.2375876 C2.30360757,60.3280876 1.64710757,60.2015876 1.25310757,59.8740876 C0.636107571,59.3690876 0.0786075707,58.4080876 0.0786075707,58.4080876 C-0.105392429,57.9185876 0.0131075707,57.6225876 0.653607571,57.1890876 C0.917607571,57.0225876 0.969607571,56.9025876 1.40560757,56.8820876 C1.63060757,56.8055876 1.56410757,56.9315876 1.96110757,56.8025876 C2.18510757,56.7250876 2.18510757,56.7820876 2.64060757,56.7550876 C2.74660757,56.6855876 2.89110757,56.6655876 3.08860757,56.6050876 C3.45260757,56.4955876 3.80560757,56.3720876 3.80560757,56.3720876 C3.80560757,56.3720876 3.90110757,56.2845876 4.24360757,56.3245876 C4.54110757,56.2120876 4.84110757,56.0380876 4.99610757,55.9895876 C4.97110757,55.5195876 5.02310757,55.5420876 5.24010757,55.3620876 C5.51210757,55.1360876 5.56060757,55.1725876 5.75560757,55.3225876 C5.84160757,55.2785876 5.88060757,55.2615876 5.87110757,55.1880876 C5.84810757,54.9490876 5.64310757,54.8290876 5.72310757,54.2890876 C5.63410757,54.0730876 5.50410757,53.8055876 5.54010757,53.6465876 C5.58410757,53.4760876 5.63010757,53.3925876 5.73560757,53.3425876 C5.84810757,53.2865876 5.88060757,53.3630876 5.94110757,53.4355876 C6.03910757,53.5630876 6.11810757,53.9290876 6.11810757,53.9290876 C6.14560757,54.3430876 6.25710757,54.8860876 6.67360757,54.5960876 C6.91710757,54.3555876 6.97960757,53.7025876 7.46560757,53.8525876 L7.80910757,54.1695876 C8.10560757,53.8995876 8.12510757,53.8955876 8.30360757,53.7895876 C8.30360757,53.7895876 8.03310757,53.4995876 8.28060757,53.2895876 C8.44860757,53.1395876 8.65310757,53.0395876 9.02260757,52.6500876 C10.0256076,51.5870876 10.5411076,51.1165876 11.6241076,50.2670876 C13.7761076,48.5705876 16.2041076,47.4030876 17.7486076,46.8330876 C18.2571076,46.2080876 18.7526076,45.7980876 19.8606076,45.7215876 C21.2266076,43.5185876 23.7946076,41.5860876 24.3756076,41.2825876 C24.8646076,40.4350876 25.0691076,40.5325876 25.6891076,40.3755876 C26.1846076,39.9960876 26.2971076,39.9960876 26.5211076,39.5925876 C26.7586076,38.7490876 26.1186076,36.4665876 27.9071076,36.3970876 C28.2961076,35.8640876 28.1976076,35.9895876 28.6331076,35.4875876 C28.3626076,34.7705876 28.2636076,34.1700876 28.1976076,33.6560876 C28.1876076,33.5920876 27.5041076,33.0860876 27.7191076,32.4400876 C27.4326076,32.0800876 26.9046076,31.2365876 26.7391076,30.8425876 C26.6631076,30.8425876 26.5936076,30.8130876 26.5076076,30.7965876 C26.4216076,30.7865876 26.3101076,30.7865876 26.1846076,30.7695876 C25.8836076,31.4865876 25.5836076,31.5330876 25.0826076,31.6830876 C24.1476076,33.5530876 23.8221076,34.3525876 21.2796076,35.8570876 C20.2636076,36.9515876 19.9106076,38.1930876 19.9136076,38.1730876 C19.7356076,38.5395876 19.7816076,39.0630876 19.8676076,39.3430876 C19.7226076,39.7500876 19.7581076,39.7890876 19.7581076,39.7890876 C19.8081076,39.9460876 19.9441076,40.1555876 20.1186076,40.2060876 C20.4161076,40.2880876 20.7156076,40.2880876 20.6926076,40.6255876 C20.6401076,41.0420876 20.0916076,40.9655876 19.8351076,40.9090876 C18.8446076,40.7215876 19.1751076,40.0725876 18.5276076,40.2790876 C18.0251076,40.5855876 17.8216076,41.5355876 17.0266076,41.3915876 C16.9201076,41.3190876 16.9571076,41.1090876 17.0356076,40.9630876 C17.1521076,40.7295876 17.3561076,40.5380876 17.2411076,40.4490876 C16.7196076,40.5990876 15.6696076,40.9190876 15.6696076,40.9190876 C15.1746076,41.0420876 14.6426076,40.7820876 15.1346076,40.4680876 C15.3591076,40.3890876 15.6831076,40.2880876 16.0816076,40.0390876 C16.0816076,40.0390876 16.2971076,39.7695876 15.9011076,39.8955876 C15.4716076,40.0390876 14.8451076,40.1185876 14.3896076,40.0555876 C14.3896076,40.0555876 13.4621076,39.9045876 13.3431076,39.8280876 C13.2276076,39.7550876 13.1216076,39.4595876 13.4121076,39.4690876 C13.7821076,39.4830876 14.7121076,39.3960876 15.4356076,39.2220876 C15.7886076,39.0965876 16.4556076,38.7160876 16.8311076,38.5425876 C16.8311076,38.5425876 17.2466076,37.9630876 17.4716076,37.8530876 C17.8481076,37.4330876 18.1641076,37.1900876 18.5046076,36.7575876 C18.8446076,36.1030876 19.1946076,35.0610876 20.2971076,33.4600876 C20.7986076,32.7225876 21.4291076,31.8645876 22.2146076,31.1030876 C22.2146076,31.1030876 22.4421076,29.8570876 23.4586076,28.9935876 C23.6891076,28.4770876 24.0366076,27.8750876 24.3826076,27.3175876 C24.5146076,27.1010876 24.6426076,26.9150876 24.7651076,26.7080876 C25.0886076,26.2270876 25.4321076,25.3310876 26.6406076,25.2210876 C26.6406076,25.2210876 27.1616076,24.8515876 27.3661076,24.5840876 C27.6821076,24.3255876 27.6206076,23.9075876 27.8776076,23.6245876 C27.5041076,23.2410876 26.5476076,22.5050876 26.4751076,21.5190876 C26.4021076,20.4720876 26.7921076,19.6220876 27.4326076,19.0060876 C28.1456076,18.3225876 28.8841076,17.9935876 29.7686076,18.0705876 C30.8706076,18.2655876 31.0756076,18.6395876 31.4186076,19.0155876 C31.7481076,19.3760876 31.8811076,19.1550876 32.0121076,19.5635876 C32.9371076,19.8385876 32.8871076,19.7260876 32.8611076,20.4185876 C32.9961076,20.6185876 33.2336076,20.8060876 33.2206076,21.2050876 C33.5506076,20.5595876 33.6166076,20.4415876 34.4651076,19.7425876 C34.6796076,19.1630876 34.8246076,18.5925876 35.0161076,18.0095876 C35.1941076,17.4730876 35.4086076,16.9230876 35.5776076,16.5075876 C35.4386076,15.3195876 35.7886076,15.1300876 36.2711076,14.1035876 C36.1951076,13.9600876 36.2116076,13.9200876 36.2516076,13.6905876 C36.4461076,13.0030876 36.7466076,12.1075876 36.9311076,11.5170876 C36.9311076,11.5170876 36.9901076,11.2875876 37.2276076,11.2700876 C37.4596076,10.5320876 37.8016076,9.14508758 37.8621076,8.86158758 C38.0986076,8.08508758 37.9676076,7.82908758 37.8151076,7.38158758 C37.7661076,7.23808758 37.7956076,7.03458758 37.7036076,6.87308758 C37.4596076,6.40508758 37.1951076,5.80558758 37.0171076,5.37908758 C36.9011076,5.10558758 36.7326076,4.08258758 36.7326076,4.08258758 C36.5821076,3.55908758 36.7131076,4.08258758 36.7131076,4.08258758"></path></g></svg>
               
         </div>
     
      </div>
   </>
}