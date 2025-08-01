import React,{useEffect,useRef, useState} from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"
import {Link}  from 'react-router-dom'
import book from '../img/kitob.jpg'
import desktop from '../img/desktop.png'
import en from '../img/en.png'
import excel from '../img/excel.png'
import korea from '../img/korea.png'
import toy2 from '../img/sariq.jpg'
import correct from '../img/correct.png'
import video from '../img/video.png'
import certificate from '../img/certificate.png'
import file from '../img/file.png'


const subjects = [
    { title: "IT kursi", img: excel },
    { title: "kompyuter savodxonligi", img: excel },
    { title: "Ingliz tili", img: excel },
    { title: "Koreys tili", img: excel },
    { title: "Rus tili", img: excel },
    { title: "Mental arifmetika", img: excel },
    { title: "Matematika", img: excel },
    { title: "Ona tili", img: excel },
  ];


function Courses(){
 
  const sliderRef = useRef(null);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrameId;

    const scroll = () => {
      if (!isUserScrolling) {
        slider.scrollLeft += 1;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isUserScrolling]);

  const handleUserScroll = (direction) => {
    const slider = sliderRef.current;
    setIsUserScrolling(true);
    if (direction === "left") {
      slider.scrollLeft -= 300;
    } else {
      slider.scrollLeft += 300;
    }

    clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      setIsUserScrolling(false);
    }, 3000);
  };


    return(
        <>
            <div className="w-[90%] mx-auto">
            <section className="w-full flex flex-col md:flex-row justify-between items-center text-center gap-6 md:gap-0">
                <h2 className="text-[50px] sm:text-5xl md:text-6xl lg:text-[96px] font-semibold text-[#FFC107]">
                Bizning Kurslar
                </h2>
                <img
                src={book}
                alt="book-img"
                className="w-[350px] pt-[50px] sm:w-[350px] md:w-[450px] lg:w-[522px]"/>
            </section>
            </div>

            {/* second section */}
       
            <div className="pt-[30px] w-[90%] mx-auto">
  <h1 className="text-[50px] sm:text-[50px] md:text-[55px] lg:text-[60px] text-[#FFC107] font-semibold text-center md:text-left">
    Asosiy kurslar
  </h1>

  <div className="w-full pt-[50px] flex flex-col lg:flex-row gap-10">
    {/* Left Column */}
    <div className="w-full lg:w-1/2 flex flex-col items-center gap-8">
      {[
        {
          img: desktop,
          title: "IT kursi",
          desc: "Zamonaviy texnologiyalarni egallang IT bo'yicha kuchli mutaxassis bo'ling!",
        },
        {
          img: en,
          title: "Ingliz tili",
          desc: "Ingliz tilini noldan mukammalgacha o‘rganing!",
        },
        {
          img: excel,
          title: "Kompyuter savodxonligi",
          desc: "Kompyuter bilan ishlashni o‘rganing — zamonaviy dunyoda ishonch bilan harakat qiling!",
        },
        {
          img: korea,
          title: "Koreys tili",
          desc: "Koreys tilini o‘rganing — madaniyat va imkoniyatlar eshigini oching!",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-[90%] h-auto bg-[#FFC107] flex flex-col md:flex-row items-center justify-center md:justify-evenly rounded-[15px] p-4 md:p-6 text-start"
        >
          <img
            src={item.img}
            alt="course-img"
            className="w-[60%] sm:w-[40%] md:w-[30%] mb-4 md:mb-0"
          />
          <div className="w-full md:w-1/2">
            <h3 className="font-semibold text-[22px] sm:text-[26px] md:text-[30px] mb-2">
              {item.title}
            </h3>
            <p className="text-[14px] sm:text-[15px] font-semibold">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Right Column */}
    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6">
      <div className="text-[#FFC107] text-[22px] sm:text-[28px] md:text-[32px] lg:text-[34px] font-semibold leading-relaxed text-center lg:text-left">
        <h3>odamlar nimani ko’proq o’rganishni istaydi?</h3>
        <h3>1-IT dasturlash kursi</h3>
        <h3>2-Ingliz tili kursi</h3>
        <h3>3-Kompyuter savodxonligi kursi</h3>
      </div>
      <img src={toy2} alt="yellow-toy" className="w-[90%] md:w-[80%] lg:w-full" />
    </div>
  </div>
</div>

        {/* third ssection */}
        <div className="relative w-full overflow-hidden bg-black py-10">
  <h2 className="text-4xl font-bold text-yellow-400 mb-10 text-center">
    Bizning barcha kurslarimiz
  </h2>

  {/* Slider */}
  <div
    ref={sliderRef}
    className="flex gap-10 overflow-x-scroll scroll-smooth no-scrollbar"
    style={{
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    }}
  >
    {[...subjects, ...subjects].map((subject, i) => (
      <div
        key={i}
        className="min-w-[400px] h-[250px] bg-yellow-400 rounded-xl flex-shrink-0 flex flex-col justify-between items-center p-4 shadow-md"
      >
        <img src={subject.img} alt={subject.title} className="w-30 h-20" />
        <h3 className="text-lg font-semibold text-center text-black">
          {subject.title}
        </h3>

        <Link to={`/info/${encodeURIComponent(subject.title)}`}>
          <button className="bg-black text-white px-14 py-2 rounded hover:bg-gray-800">
            Batafsil
          </button>
        </Link>
      </div>
    ))}
  </div>

  {/* Buttons below slider aligned to right */}
  <div className="mt-6 flex justify-end gap-4 px-4">
    <button
      className="bg-yellow-400 p-3 rounded-full hover:bg-yellow-500"
      onClick={() => handleUserScroll("left")}
    >
      <FaChevronLeft />
    </button>
    <button
      className="bg-yellow-400 p-3 rounded-full hover:bg-yellow-500"
      onClick={() => handleUserScroll("right")}
    >
      <FaChevronRight />
    </button>
  </div>
</div>

    {/* fourth section */}

    <div className="pt-[70px] w-[90%] mx-auto pb-[100px]" >
  <h1 className="text-[#FFC107] font-semibold text-[50px] sm:text-[35px] md:text-[40px] pb-[100px] sm:pb-[120px] md:pb-[150px] text-center md:text-left">
    Nima uchun bizni tanlashadi?
  </h1>

  <div className="w-full flex flex-wrap justify-center md:justify-evenly gap-[40px] sm:gap-[50px] md:gap-[70px]">
    <div className="flex flex-col justify-center items-center text-center w-full sm:w-[80%] md:w-[45%] lg:w-[40%] bg-[#FFC107] rounded-[10px]">
      <img className="pt-[30px] w-[25%] sm:w-[20%] md:w-[15%]" src={correct} alt="correct-image" />
      <h2 className="pt-[30px] font-extrabold text-[22px] sm:text-[26px] md:text-[30px]">Tajribali o'qituvchilar</h2>
      <p className="pt-[20px] font-bold text-[14px] sm:text-[15px] md:text-[16px]">O'z sohasining mutaxassislari tomonidan dars beriladi</p>
      <Link to="/form"><button className="mt-[30px] mb-[20px] bg-black text-white rounded-[8px] px-[50px] sm:px-[60px] md:px-[80px] py-[15px] font-extrabold text-[16px] sm:text-[17px] md:text-[larger]">Boshlash</button></Link>
    </div>

    <div className="flex flex-col justify-center items-center text-center w-full sm:w-[80%] md:w-[45%] lg:w-[40%] bg-[#FFC107] rounded-[10px]">
      <img className="pt-[30px] w-[25%] sm:w-[20%] md:w-[15%]" src={video} alt="video-image" />
      <h2 className="pt-[30px] font-extrabold text-[22px] sm:text-[26px] md:text-[30px]">Qulay o‘rganish</h2>
      <p className="pt-[20px] font-bold text-[14px] sm:text-[15px] md:text-[16px]">Har qanday vaqtda va joyda o‘rganish imkoniyati</p>
      <Link to="/form"><button className="mt-[30px] mb-[20px] bg-black text-white rounded-[8px] px-[50px] sm:px-[60px] md:px-[80px] py-[15px] font-extrabold text-[16px] sm:text-[17px] md:text-[larger]">Boshlash</button></Link>
    </div>

    <div className="flex flex-col justify-center items-center text-center w-full sm:w-[80%] md:w-[45%] lg:w-[40%] bg-[#FFC107] rounded-[10px]">
      <img className="pt-[30px] w-[25%] sm:w-[20%] md:w-[15%]" src={certificate} alt="certificate-image" />
      <h2 className="pt-[30px] font-extrabold text-[22px] sm:text-[26px] md:text-[30px]">Sertifikat olish</h2>
      <p className="pt-[20px] font-bold text-[14px] sm:text-[15px] md:text-[16px]">Kursni muvaffaqiyatli tugatganlarga rasmiy sertifikat taqdim etiladi</p>
      <Link to="/form"><button className="mt-[30px] mb-[20px] bg-black text-white rounded-[8px] px-[50px] sm:px-[60px] md:px-[80px] py-[15px] font-extrabold text-[16px] sm:text-[17px] md:text-[larger]">Boshlash</button></Link>
    </div>

    <div className="flex flex-col justify-center items-center text-center w-full sm:w-[80%] md:w-[45%] lg:w-[40%] bg-[#FFC107] rounded-[10px]">
      <img className="pt-[30px] w-[25%] sm:w-[20%] md:w-[15%]" src={file} alt="file-image" />
      <h2 className="pt-[30px] font-extrabold text-[22px] sm:text-[26px] md:text-[30px]">Amaliy loyihalar orqali o‘rganish</h2>
      <p className="pt-[20px] font-bold text-[14px] sm:text-[15px] md:text-[16px]">Nazariyani amalda sinab ko‘rib, haqiqiy tajriba orttirasiz</p>
      <Link to="/form"><button className="mt-[30px] mb-[20px] bg-black text-white rounded-[8px] px-[50px] sm:px-[60px] md:px-[80px] py-[15px] font-extrabold text-[16px] sm:text-[17px] md:text-[larger]">Boshlash</button></Link>
    </div>
  </div>
</div>

        </>
    )
}
export default Courses;