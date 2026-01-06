import logo from '../assets/TestLogo.svg'
import homeIcon from '../assets/home_FILL0_wght300_GRAD0_opsz24.svg'
import groubIcon from '../assets/group_FILL0_wght300_GRAD0_opsz24.svg'
import calendarIcon from '../assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg'
import chatIcon from '../assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg'
import creditIcon from '../assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg'
import user from '../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png'
import settings from '../assets/settings_FILL0_wght300_GRAD0_opsz24.svg'
import more from '../assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg'




export default function Navbar() {
  return <>
    <header className='flex items-center justify-between  py-2 px-6 rounded-[70px] bg-white'>
        <img src={logo} alt="logo" className='w-40'/>
        <nav>
            <ul className='flex text-[#072635] font-manrope font-bold text-[14px] gap-3'>
                <li className='cursor-pointer'>
                    <a href="" className=' px-2.5 py-1.5 flex items-center gap-1.5'>
                        <span>
                            <img src={homeIcon} alt="homeIcon" className='size-4'/>
                        </span>
                        Overview
                    </a>
                </li>
                <li className='cursor-pointer '>
                    <a  href="" className='bg-[#01F0D0] rounded-[41px] px-2.5 py-1.5 flex items-center gap-1.5'>
                        <span>
                            <img src={groubIcon} alt="groubIcon" className='size-4'/>
                        </span>
                        Patients
                    </a>
                </li>
                <li className='cursor-pointer'>
                    <a href="" className=' px-2.5 py-1.5 flex items-center gap-1.5'>
                        <span>
                            <img src={calendarIcon} alt="calendarIcon" className='size-4'/>
                        </span>
                        Schedule
                    </a>
                </li>
                <li className='cursor-pointer'>
                    <a href="" className=' px-2.5 py-1.5 flex items-center gap-1.5'>
                        <span>
                            <img src={chatIcon} alt="chatIcon" className='size-4'/>
                        </span>
                        Message
                    </a>
                </li>
                <li className='cursor-pointer'>
                    <a href="" className=' px-2.5 py-1.5 flex items-center gap-1.5'>
                        <span>
                            <img src={creditIcon} alt="creditIcon" className='size-4'/>
                        </span>
                        Transactions
                    </a>
                </li>

                

                
            </ul>
        </nav>
        <div className="flex items-center gap-2">
            {/* User Profile Section */}
            <img src={user} alt="user" className='size-11'/>
            <div className="text-[14px] border-r-2 pr-3 border-[#f3f2f2]">
                <p className='text-[#072635] font-bold'>Dr. Jose Simmons</p>
                <p className='text-[#707070]'>General Practitioner</p>
            </div>
            <div className="flex gap-2 ml-1">
                <button>
                    <img src={settings} alt="settings" />
                </button>
                <button>
                    <img src={more} alt="more" />
                </button>
            </div>
        </div>
    </header>
  </>
}
