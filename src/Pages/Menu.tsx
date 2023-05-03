import { Header } from "../components/Header";
import { ItemsMenu } from "../components/ItemsMenu";

import { Popover } from '@headlessui/react'
import { ButtonClose } from "../components/ButtonClose";
import { BlurBase } from "../components/BlurBase/Blur";

const Menu = () => {

  function convertPrice(price: number) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)
  }

  return (
    <>
      <Header />
      <main>
        <section className="md:my-10 mx-auto grid grid-cols-menu p-4 gap-4 max-w-5xl snap-y snap-mandatory scroll-smooth overflow-auto md:max-h-full max-h-[calc(100vh-6rem)]">
          {
            ItemsMenu.map((item, index) => {
              return (
                <Popover className="relative">
                  <Popover.Button key={index} className="snap-always snap-center px-5 pb-5 flex flex-col hover:justify-center w-full h-[500px] bg-secondary border-2 border-terciary rounded-md gap-4 group hover:pt-6 transition-all duration-1000 ">
                    <picture className="w-full h-full  group-hover:hidden ">
                      <img src={item.img} alt={item.description} className="w-full max-h-96 h-full object-cover " />
                    </picture>
                    <h2 className="text-text-color text-center text-4xl">{item.name}</h2>
                    <div className="hidden group-hover:flex flex-col text-center gap-4">
                      <p className="text-text-color text-center  text-2xl ">{item.description}</p>
                      <p className="text-text-color text-right text-2xl underline underline-offset-4 decoration-primary">{convertPrice(item.price)}</p>
                    </div>
                  </Popover.Button>
                  <Popover.Overlay className="fixed inset-0 bg-black z-[100] opacity-20" />
                  <Popover.Panel className="bg-secondary rounded-md gap-2 inset-0 fixed md:inset-x-1/4 md:inset-y-1/4 z-[105] flex flex-col md:flex-row items-center pt-9 md:p-6 p-4">
                    <div className="absolute flex flex-col top-2 right-2">
                      <ButtonClose />
                    </div>
                    <picture className="h-full w-full md:w-[70%] ">
                      <img src={item.img} alt={item.description} className=" rounded-md w-full h-full object-cover" />
                    </picture>
                    <div className="flex flex-col gap-4">
                      <h2 className="text-text-color text-center text-4xl">{item.name}</h2>
                      <div className="flex flex-col text-center gap-4">
                        <p className="text-text-color text-center  text-2xl ">{item.description}</p>
                        <p className="text-text-color text-right text-2xl underline underline-offset-4 decoration-primary">{convertPrice(item.price)}</p>
                      </div>
                    </div>
                  </Popover.Panel>
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

export default Menu;