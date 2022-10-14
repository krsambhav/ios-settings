import "./App.css";
import { IoMdAirplane, IoMdBluetooth } from "react-icons/io";
import { MdSignalWifi4Bar, MdVpnKey } from "react-icons/md";
import { BsFillMoonFill, BsFillSimFill } from "react-icons/bs";
import { RiHotspotFill, RiTimerFlashFill } from "react-icons/ri";
import { AiFillBell } from "react-icons/ai";
import { HiSpeakerphone } from "react-icons/hi";

function App() {
  return (
    <div className="App w-screen h-screen flex flex-row justify-center items-center">
      <div className="screen w-[300px] h-[550px] shadow-2xl bg-[#f2f1f6]">
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
                <AiFillBell />
              </div>
              <div className="text">General</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
