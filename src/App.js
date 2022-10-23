import "./App.css";
import { IoIosAppstore, IoIosBatteryFull, IoIosWallet, IoMdAirplane, IoMdBluetooth, IoMdHeart, IoMdMail } from "react-icons/io";
import { MdCloud, MdCompareArrows, MdContacts, MdEditCalendar, MdEmergency, MdFiberManualRecord, MdLinearScale, MdMessage, MdMusicNote, MdNotes, MdPhone, MdPrivacyTip, MdRecordVoiceOver, MdShortcut, MdSignalWifi4Bar, MdTagFaces, MdTranslate, MdTv, MdVpnKey, MdWallpaper } from "react-icons/md";
import { BsCalendarEventFill, BsCameraVideoFill, BsCompassFill, BsFillDisplayFill, BsFillMoonFill, BsFillSimFill, BsToggles } from "react-icons/bs";
import { RiHotspotFill, RiLockPasswordFill, RiTimerFlashFill, RiVirusLine } from "react-icons/ri";
import { AiFillBell, AiOutlineStock } from "react-icons/ai";
import { HiSpeakerphone } from "react-icons/hi";
import {IoAccessibility, IoSettings} from 'react-icons/io5'
import {FaIcons, FaSafari} from 'react-icons/fa';
import {SiGooglemaps} from 'react-icons/si';

function App() {
  return (
    <div className="App w-screen h-screen flex flex-row justify-center items-center">
      <div className="screen w-[300px] h-[600px] pb-[20px] overflow-scroll shadow-2xl bg-[#f2f1f6]">
        <div className="settings-title w-[100%] mt-8 ml-5 text-xl">
          Settings
        </div>
        <div className="search-bar w-[100%] flex flex-row justify-center mt-5">
          <input
            type="text"
            name="search-bar"
            id="search-bar"
            className="w-[90%] bg-[#dedde3] rounded-md text-xs outline-none px-2 py-1"
            placeholder="Search"
          />
        </div>
        <div className="icloud-section w-[90%] mx-auto py-2 rounded-md flex flex-row pl-[15px] mt-5 gap-3 bg-white">
          <div className="image w-[50px] h-[50px]">
            <img
              src="https://www.liveabout.com/thmb/D4sWEMjpo8wXqcQJJ5mGbsPBxII=/1500x1200/filters:no_upscale():max_bytes(150000):strip_icc()/peter_2008_v2F_hires1-56a00f083df78cafda9fdcb6.jpg"
              alt="Jack"
              className="rounded-full"
            />
          </div>
          <div className="name-details">
            <div className="name w-[90%] font-thin">Peter Griffin</div>
            <div className="other w-[90%] font-thin text-[10px]">
              Apple ID, iCloud+, Media & Purchases
            </div>
          </div>
        </div>
        <div className="first-row w-[90%] pb-2 bg-white mx-auto mt-3 rounded-md font-thin text-xs flex flex-col gap-1 pl-3 pt-2">
          <div className="row flex flex-col gap-2 items-center w-[100%]">
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <IoMdAirplane />
              </div>
              <div className="text">Airplane Mode</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <MdSignalWifi4Bar />
              </div>
              <div className="text flex flex-row gap-28">
                <div className="left">Wi-Fi</div>
                <div className="right">Not Connected</div>
              </div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <IoMdBluetooth />
              </div>
              <div className="text flex flex-row gap-[150px]">
                <div className="left">Bluetooth</div>
                <div className="right">On</div>
              </div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <BsFillSimFill />
              </div>
              <div className="text flex flex-row gap-[140px]">
                <div className="left">Mobile Data</div>
                <div className="right">Jio</div>
              </div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <RiHotspotFill />
              </div>
              <div className="text flex flex-row gap-[140px]">
                <div className="left">Personal Hotspot</div>
              </div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <MdVpnKey />
              </div>
              <div className="text flex flex-row gap-[140px]">
                <div className="left">VPN</div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-row w-[90%] pb-2 bg-white mx-auto mt-3 rounded-md font-thin text-xs flex flex-col gap-1 pl-3 pt-2">
          <div className="row flex flex-col gap-2 items-center w-[100%]">
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <AiFillBell />
              </div>
              <div className="text">Notifications</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <HiSpeakerphone />
              </div>
              <div className="text">Sounds & Haptics</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <BsFillMoonFill />
              </div>
              <div className="text">Focus</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <RiTimerFlashFill />
              </div>
              <div className="text">Screen Time</div>
            </div>
          </div>
        </div>
        <div className="second-row w-[90%] pb-2 bg-white mx-auto mt-3 rounded-md font-thin text-xs flex flex-col gap-1 pl-3 pt-2">
          <div className="row flex flex-col gap-2 items-center w-[100%]">
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <IoSettings />
              </div>
              <div className="text">General</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <BsToggles />
              </div>
              <div className="text">Control Centre</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <BsFillDisplayFill />
              </div>
              <div className="text">Display & Brightness</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <FaIcons />
              </div>
              <div className="text">Home Screen</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <IoAccessibility />
              </div>
              <div className="text">Accessibility</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <MdWallpaper />
              </div>
              <div className="text">Wallpaper</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <MdRecordVoiceOver />
              </div>
              <div className="text">Siri & Search</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <MdTagFaces />
              </div>
              <div className="text">Face ID & Passcode</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <MdEmergency />
              </div>
              <div className="text">Emergency SOS</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <RiVirusLine />
              </div>
              <div className="text">Exposure Notifications</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <IoIosBatteryFull />
              </div>
              <div className="text">Battery</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <MdPrivacyTip />
              </div>
              <div className="text">Privacy & Security</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <IoIosAppstore />
              </div>
              <div className="text">App Store</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <IoIosWallet />
              </div>
              <div className="text">Wallet</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <RiLockPasswordFill />
              </div>
              <div className="text">Passwords</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <IoMdMail />
              </div>
              <div className="text">Mail</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <MdContacts />
              </div>
              <div className="text">Contacts</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <BsCalendarEventFill />
              </div>
              <div className="text">Calendar</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <MdNotes />
              </div>
              <div className="text">Notes</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <MdEditCalendar />
              </div>
              <div className="text">Reminders</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <MdFiberManualRecord />
              </div>
              <div className="text">Voice Memos</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <MdPhone />
              </div>
              <div className="text">Phone</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <MdMessage />
              </div>
              <div className="text">Messages</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <BsCameraVideoFill />
              </div>
              <div className="text">FaceTime</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <FaSafari />
              </div>
              <div className="text">Safari</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <AiOutlineStock />
              </div>
              <div className="text">Stocks</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <MdCloud />
              </div>
              <div className="text">Weather</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <MdTranslate />
              </div>
              <div className="text">Translate</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <SiGooglemaps />
              </div>
              <div className="text">Maps</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <BsCompassFill />
              </div>
              <div className="text">Compass</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <MdLinearScale />
              </div>
              <div className="text">Measure</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <MdShortcut />
              </div>
              <div className="text">Shortcuts</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <IoMdHeart />
              </div>
              <div className="text">Health</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <MdMusicNote />
              </div>
              <div className="text">Music</div>
            </div>
            <div className="menu flex flex-row gap-2 items-center w-[100%]">
              <div className="icon">
                <MdTv />
              </div>
              <div className="text">TV</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
