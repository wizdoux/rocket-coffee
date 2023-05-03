import logoMobileImg from '../../assets/logo-mobile.svg'
import logoDesktopImg from '../../assets/logo-desktop.svg';
import { Menu } from '../Menu';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="snap-center flex relative z-20 justify-between items-center w-full max-w-[918px] mx-auto px-[26px] pt-9 pb-[26px] md:pt-0 md:pb-0 md:mt-[50px]">
      <a href="https://www.rocketseat.com.br/">
        <img src={logoDesktopImg} alt="Logo" className="hidden md:flex h-[50px] w-[43px] " />
        <img src={logoMobileImg} alt="Logo" className="flex md:hidden h-[32.78px] w-[171px] " />
      </a>
      <ul className="md:flex gap-8 hidden font-medium">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Menu">Menu</Link>
        </li>
        <li>
          <Link to="/GiftCard">Vale presente</Link>
        </li>
        <li>
          <Link to="/Lojas">Lojas</Link>
        </li>
      </ul>
      <a href="/src/assets/pegar-meu-cafe.gif">
        <button type="button" className="md:flex hidden border border-primary py-[11px] px-[38px] font-extrabold rounded-md text-[11px] ">PEGAR MEU CAFÉ</button>
      </a>
      <Menu />
    </header>
  )
}