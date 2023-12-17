import bars from '../../assets/images/bars.svg';
import login from '../../assets/images/Login.svg';
import signup from '../../assets/images/Signup.svg';
import globe from '../../assets/images/fi-sr-globe.svg';

export default function Header() {
  return (
    <header className="h-[81px] p-6 md:p-8 flex flex-row gap-[64px] items-center justify-end shadow-lg">
      <p className='hidden md:block'><img src={globe} alt='globeIcon' width={24}/></p>
      <p className='hidden md:block'><img src={login} alt='globeIcon' width={64}/></p>
      <p className='hidden md:block'><img src={signup} alt='globeIcon' width={84}/></p>
      <p ><img  src={bars} alt='barsIcon' width={34}/></p>
    </header>
  )
}