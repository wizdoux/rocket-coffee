import { Header } from "../components/Header"
import { BlurBase } from "../components/BlurBase/Blur";

const Lojas = () => {
  return (
    <>
      <Header />
      <main className="m-auto md:p-10 p-5 flex items-center justify-center h-[calc(100vh-7rem)] max-w-[1000px] ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.2319741133297!2d-49.648157224862366!3d-27.211865776470063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dfb9ade46240d3%3A0x65e4ed672aecf6a6!2sResidencial%20Acalanto!5e0!3m2!1spt-PT!2sbr!4v1683130004420!5m2!1spt-PT!2sbr"
          className="w-full h-full border-2 border-button rounded-md"
          loading="lazy"
        >
        </iframe>
      </main>
      <BlurBase />
    </>
  )
}


export default Lojas;