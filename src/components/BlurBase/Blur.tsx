import blurOneImg from '../../assets/blur-1.png';
import blurTwoImg from '../../assets/blur-2.png';

export function BlurBase() {
  return (
    <>
      <img src={blurOneImg} alt="" className="z-[-3] select-none hidden md:flex fixed bottom-0 left-0" />
      <img src={blurTwoImg} alt="" className="z-[-3] select-none hidden md:flex fixed top-0 right-0" />
    </>
  )
}