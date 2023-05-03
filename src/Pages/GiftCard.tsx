import { Header } from "../components/Header"
import { ItemsGiftCard } from "../components/ItemsGiftCard";

import { Popover } from '@headlessui/react'
import { ButtonClose } from "../components/ButtonClose";
import { BlurBase } from "../components/BlurBase/Blur";

const GiftCard = () => {

  function convertPrice(price: number) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)
  }

  return (
    <>
      <Header />
      <main>
        <section className="md:my-10 mx-auto grid grid-cols-menu p-4 gap-4 max-w-5xl snap-y snap-mandatory scroll-smooth overflow-auto md:max-h-full max-h-[calc(100vh-6rem)]">
          {
            ItemsGiftCard.map((item, index) => {
              return (
                <Popover className="relative">
                  <Popover.Button key={index} className="snap-always snap-center px-5 pb-5 flex flex-col hover:justify-center w-full h-[500px] bg-secondary border-2 border-terciary rounded-md gap-4 group hover:pt-6 transition-all duration-1000 ">
                    <picture className="w-full h-full  group-hover:hidden ">
                      <img src={item.img} alt={item.description} className="w-full max-h-96 h-full object-cover " />
                    </picture>
                    <h2 className="text-text-color text-center text-4xl">{item.name}</h2>
                    <p className="text-text-color text-right text-2xl underline underline-offset-4 decoration-primary">{convertPrice(item.price)}</p>
                    <div className="hidden group-hover:flex flex-col text-center gap-4">
                      <p className="text-text-color text-center  text-2xl ">{item.description}</p>
                    </div>
                  </Popover.Button>
                  <Popover.Overlay className="fixed inset-0 bg-black z-[100] opacity-20" />
                </Popover>
              )
            })
          }
        </section>
      </main>
      <BlurBase />
    </>
  )
}

export default GiftCard;
