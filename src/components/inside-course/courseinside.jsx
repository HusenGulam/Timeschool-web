import { useParams } from "react-router-dom";
import React, {useState} from "react";
import user from '../img/user.png'

// Course data
const subjectDetails = {
  "IT kursi": {
    description: "IT kursi orqali siz zamonaviy texnologiyalarni o‘rganasiz.",
    img: (user),
    duration: "Bu kurs 4 bosqichdan iborat. Har bir bosqich 1.5 oy davom etadi.",
  },
  "kompyuter savodxonligi": {
    description: "Kompyuter asoslarini noldan o‘rganish uchun ajoyib kurs.",
    img: (user),
    duration: "Bu kurs 3 bosqichdan iborat. Har biri 1 oy davom etadi.",
  },
  "Ingliz tili": {
    description: "Ingliz tilini tez va samarali o‘rganish uchun darslar.",
    img: (user),
    duration: "Bu kurs 6 bosqichdan iborat. Har bir bosqich 2 oy davom etadi.",
  },
  "Koreys tili": {
    description: "Koreys tili kursi sizga asosiy grammatikani va kundalik so‘zlashuvni o‘rgatadi.",
    img: (user),
    duration: "Bu kurs 5 bosqichdan iborat. Har biri 1.5 oy davom etadi.",
  },
  "Rus tili": {
    description: "Rus tilini o‘rganib, muloqot qilish va matnlar bilan ishlash imkoniyatiga ega bo‘ling.",
    img: (user),
    duration: "Bu kurs 4 bosqichdan iborat. Har biri 2 oy davom etadi.",
  },
  "Mental arifmetika": {
    description: "Bolalar uchun aqliy hisoblash ko‘nikmalarini rivojlantiruvchi kurs.",
    img: (user),
    duration: "Bu kurs 6 bosqichdan iborat. Har biri 1 oy davom etadi.",
  },
  "Matematika": {
    description: "Maktab va oliy ta’limga tayyorlov uchun to‘liq matematika kursi.",
    img: (user),
    duration: "Bu kurs 5 bosqichdan iborat. Har biri 1.5 oy davom etadi.",
  },
  "Ona tili": {
    description: "Ona tilini mukammal o‘rganish va imlo qoidalarini chuqur tushunish uchun kurs.",
    iimg: (user),
    duration: "Bu kurs 3 bosqichdan iborat. Har biri 1 oy davom etadi.",
  }
};

const teachersData = {
  "Ingliz tili": {
    name: "Dilnoza Xolmatova",
    experience: "6 yil",
    students: "230+",
    success: "180+",
  },
  "Matematika": {
    name: "Baxtiyor Mamatqulov",
    experience: "10 yil",
    students: "320+",
    success: "250+",
  },
  "Rus tili": {
    name: "Anna Ivanovna",
    experience: "7 yil",
    students: "180+",
    success: "140+",
  },
  "IT kursi": {
    name: "Alisher Komilov",
    experience: "5 yil",
    students: "300+",
    success: "240+",
  },
  "kompyuter savodxonligi": {
    name: "Sardor Qodirov",
    experience: "4 yil",
    students: "200+",
    success: "160+",
  },
  "Koreys tili": {
    name: "Lee Hana",
    experience: "6 yil",
    students: "150+",
    success: "110+",
  },
  "Mental arifmetika": {
    name: "Mukhayyo Xusanova",
    experience: "3 yil",
    students: "100+",
    success: "90+",
  },
  "Ona tili": {
    name: "Mavluda Omonova",
    experience: "8 yil",
    students: "180+",
    success: "130+",
  },
};



function InfoPage() {

  const [showModal, setShowModal] = useState(false);
const [selectedTeacher, setSelectedTeacher] = useState(null);

  const { subject } = useParams();
  const decodedSubject = decodeURIComponent(subject);
  const data = subjectDetails[decodedSubject];

  if (!data) {
    return (
      <div className="p-10 text-red-600 text-center text-xl">
        Kurs topilmadi: {decodedSubject}
      </div>
    );
  }

  return (
    <div className="p-10 text-white">
      {/* Course title */}
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">
        Kurs turi: {decodedSubject}
      </h1>

      {/* Teachers section */}
      <div className=" p-40 mb-10">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">
          Bu kursdan dars beruvchilar:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
  <div
    key={i}
    className="bg-black border-2 border-yellow-400 rounded-md p-10 flex flex-col items-center">
    
    {/* Image */}
    <img
      src={data.img}
      alt={`${decodedSubject} ustoz ${i + 1}`}
      className="w-20  object-cover mb-4 rounded-full border-2 border-yellow-400"
    />

    {/* Name */}
    <h3 className="text-lg font-bold mb-4">Palonchi</h3>

    {/* Button */}
    <button
  onClick={() => {
    const teacher = teachersData[decodedSubject];

    setSelectedTeacher(teacher);
    setShowModal(true);
  }}
  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded"
>
  To‘liq ma’lumot
</button>



  </div>
))}

        </div>
      </div>

      {/* Duration section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-2 text-yellow-400">
          Bu kurs qancha davom etadi:
        </h2>
        <p className="text-white text-lg">{data.duration}</p>
      </div>


      {showModal && selectedTeacher && (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
    <div className="bg-yellow-400 text-black p-10 rounded-lg w-[90%] max-w-2xl relative">

      <button
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 text-2xl font-bold hover:text-red-500"
      >
        &times;
      </button>

      <h1 className="text-3xl font-bold mb-6 text-center">
        {selectedTeacher.name}
      </h1>

      <div className="grid grid-cols-2 gap-4 text-lg mb-6">
        <div className="font-semibold">Tajriba:</div>
        <div>{selectedTeacher.experience}</div>

        <div className="font-semibold">O‘quvchilar soni:</div>
        <div>{selectedTeacher.students}</div>

        <div className="font-semibold">Yaxshi natija bilan:</div>
        <div>{selectedTeacher.success}</div>
      </div>

      <button className="mt-4 w-full bg-black text-yellow-400 font-bold py-3 rounded hover:bg-yellow-800 transition">
        Kursga yozilish
      </button>
    </div>
  </div>
)}

    </div>

    
  );
}

export default InfoPage;
