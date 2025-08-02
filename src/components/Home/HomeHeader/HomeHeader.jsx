import HeaderImg from './headerImg.jpg'
import {Link} from 'react-router-dom';

function HomeHeader() {
  return (
    // Bosh sarlavha qismi sariq fon bilan va yuqori-pastki padding
    <header className="bg-[#FFC107] py-[20px]">
      <div className="w-[90%] mx-auto">
        {/* Header ichidagi asosiy konteyner: chapda matnlar, o'ngda rasm */}
        <div className="flex items-center justify-between">
          {/* Matn qismi: h1, h2, h3 va tugma */}
          <div className="flex flex-col gap-[20px] items-start w-[40%] 
            max-[840px]:w-full 
            max-[600px]:gap-[10px] 
            max-[340px]:gap-[7px] 
            max-[240px]:gap-[7px]
            max-[400px]:items-center max-[400px]:justify-center max-[400px]:text-center">

            {/* Katta sarlavha */}
            <h1 className="text-[100px] leading-[100px] font-[700] text-black font-[Arial,Helvetica,sans-serif]
              max-[1300px]:text-[80px] max-[1300px]:leading-[80px]
              max-[840px]:text-[60px] max-[840px]:leading-[60px]
              max-[600px]:text-[40px] max-[600px]:leading-[40px]
              max-[340px]:text-[30px] max-[340px]:leading-[30px]
              max-[240px]:text-[20px] max-[240px]:leading-[20px]">
              TIME SCHOOL
            </h1>

            {/* Yordamchi matn */}
            <h2 className="text-white text-[30px] font-[700] font-[Arial,Helvetica,sans-serif]
              max-[1300px]:text-[20px]
              max-[840px]:text-[16px]
              max-[600px]:text-[10px]
              max-[340px]:text-[7px]
              max-[240px]:text-[5px]">
              Biz bilan bilim olish vaqtingizni eng samarali tarzda tashkil qiling.
            </h2>

            {/* Undovli chaqiriq matni */}
            <h3 className="text-[30px] font-[700] font-[Arial,Helvetica,sans-serif]
              max-[1300px]:text-[20px]
              max-[840px]:text-[16px]
              max-[600px]:text-[10px]
              max-[340px]:text-[7px]
              max-[240px]:text-[5px]">
              Hayotingizni o‘zgartirishni bugundan boshlang!
            </h3>

            {/* Tugma: boshlash */}
            <Link to="/form">
              <button className="text-[24px] border-[2px] border-black bg-transparent px-[50px] py-[10px] rounded-[5px] hover:bg-black hover:text-white 
                max-[1300px]:text-[16px] max-[1300px]:px-[40px] max-[1300px]:py-[10px]
                max-[840px]:text-[13px] max-[840px]:px-[30px] max-[840px]:py-[5px]
                max-[600px]:text-[10px] max-[600px]:px-[30px] max-[600px]:py-[5px]
                max-[340px]:text-[7px] max-[340px]:px-[30px] max-[340px]:py-[5px]
                max-[240px]:text-[5px] max-[240px]:px-[10px] max-[240px]:py-[5px]">
                Boshlash
              </button>
            </Link>
          </div>

          {/* O'ng tomonda joylashgan rasm */}
          <img src={HeaderImg} alt="" className="w-[45%] max-[400px]:hidden" />
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
