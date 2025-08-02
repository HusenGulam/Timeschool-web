
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeRegister from "./HomeRegister/HomeRegister";
import HomeTeachers from "./HomeTeachers/homeTeachers";
import HomeWhyTimeSchool from "./HomeWhyTimeSchool/HomeWhyTimeSchool";

function Home() {
  return (
    <>
        <HomeHeader />
        <main className="bg-black py-[50px]">
         
                <div className="container">
                  <HomeWhyTimeSchool />
                  <HomeTeachers />
                  <HomeRegister />
                </div>
        </main>
    </>
  );
}

export default Home;
