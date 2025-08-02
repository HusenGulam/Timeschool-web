import HomeRegisterImg from './HomeRegisterImg.png';
import {Link} from 'react-router-dom';

export default function HomeRegister() {
  return (
    <section className='w-[100%]'>
      <div className="flex justify-between items-center max-[550px]:flex-col max-[550px]:gap-[10px] max-[270px]:gap-[5px]">
          <div className="flex flex-col gap-[20px] w-[30%] max-[1050px]:w-full max-[550px]:text-center max-[270px]:gap-[5px]">
            <h1 className="text-[50px] font-bold leading-[60px] text-[#FFC107] font-[Arial] max-[900px]:text-[40px] max-[550px]:text-[25px] max-[550px]:leading-[25px] max-[270px]:text-[20px] max-[270px]:leading-[20px]">
              Biz bilan bogʻlaning
            </h1>
            <p className="text-[24px] font-bold text-[#999] font-[Arial] max-[900px]:text-[16px] max-[550px]:text-[13px] max-[270px]:text-[8px]">
              Savollaringiz bormi? Biz yordam berishdan mamnunmiz!
            </p>
            <Link to="/form">
              <button className="text-[24px] font-bold text-black bg-[#FFC107] px-[30px] py-[10px] rounded-[10px] font-[Arial] max-[900px]:text-[15px] max-[900px]:px-[20px] max-[270px]:text-[10px] max-[270px]:p-[10px] max-[270px]:w-[50%] max-[270px]:mx-auto">
                Bog’lanish
              </button>
            </Link>
          </div>
          <img
            src={HomeRegisterImg}
            alt=""
            className="w-[50%] max-[500px]:w-full"
          />
        </div>
    </section>
  );
}
