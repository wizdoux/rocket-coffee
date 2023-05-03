import rocketCoffeeImg from '../assets/rocket-coffee.png';
import { BlurBase } from '../components/BlurBase/Blur';
import { Header } from '../components/Header';


const Home = () => {
  return (
    <>
      <Header />
      <main className="h-[calc((100vh-6rem)+1px)] md:h-full flex flex-col items-center justify-between pt-10 ">
        <div className="md:hidden flex flex-col items-center mb-[98px]">
          <p className="font-semibold text-3xl text-center max-w-[373px]">
            O café que fará seu código decolar para o próximo nível.
          </p>
          <button className="px-[30px] py-[10px] border rounded-md border-button font-bold text-[11px] mt-[88px]">
            PEGAR MEU CAFÉ  &gt;
          </button>
        </div>
        <div
          className="z-10 relative text-[50px] leading-[68px] md:text-8xl font-bold text-center">
          <h1 className="">Great Coffee</h1>
          <h2 className="sub-Title text-black">&lt;GreatCode/&gt;</h2>
        </div>
        <div className="relative md:hidden bottom-0">
          <img src={rocketCoffeeImg} alt="blur-1" className="z-[-10] select-none md:absolute bottom-0 max-w-[800px] w-full " />
        </div>
        <img src={rocketCoffeeImg} alt="blur-1" className="z-[-10] hidden md:block select-none md:absolute bottom-0 max-w-[800px] w-full " />
      </main>
      <BlurBase />
    </>
  );
}

export default Home;