import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';
import instagram from '../../assets/images/instagram.png';

export default function Footer() {
  return (
    <footer className="w-full px-8 flex flex-col md:flex-row gap-[50px] md:gap-[125px] justify-center md:items-center bg-[#0C1F39] py-[80px] md:py-[138px] text-white text-[14px]">
      <div className="flex flex-row justify-between gap-[50px] md:gap-[125px]">

        <div >
          <p className='mb-[18px]'>Navigate</p>
          <ul className="flex flex-col gap-[10px]">
            <li>Home</li>
            <li>Properties</li>
            <li>Company</li>
          </ul>
        </div>

        <div >
          <p className='mb-[18px]'>Support</p>
          <ul className="flex flex-col gap-[10px]">
            <li>Terms and conditions</li>
            <li>FAQs</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col mb-auto'>
        <p className='mb-[18px]'>Social</p>
        <ul className='flex gap-[25px]'>
          <li><img  src={facebook} alt='facebookIcon' width={17}/></li>
          <li><img  src={instagram} alt='instagramIcon' width={17}/></li>
          <li><img  src={twitter} alt='twitterIcon' width={17}/></li>
        </ul>
      </div>
    </footer>
  )
}