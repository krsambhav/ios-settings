import "./App.css";

function App() {
  return (
    <div className="App w-screen h-screen flex flex-row justify-center items-center">
      <div className="screen w-[300px] h-[550px] shadow-2xl bg-[#f2f1f6]">
        <div className="settings-title w-[100%] mt-8 ml-5 text-xl">
          Settings
        </div>
        <div className="search-bar w-[100%] flex flex-row justify-center mt-5">
          <input type="text" name="search-bar" id="search-bar" className="w-[90%] bg-[#dedde3] rounded-md text-xs outline-none px-2 py-1"  placeholder="Search"/>
        </div>
        <div className="icloud-section w-[100%] flex flex-row pl-[15px] mt-5 gap-3">
          <div className="image w-14">
            <img src="https://www.kumarsambhav.me/static/media/memoji.e287bb88e62f389a80ef.jpeg" alt="Jack" className="rounded-full" />
          </div>
          <div className="name-details">
          <div className="name w-[90%] font-thin">
            Jack's iPhone
          </div>
          <div className="other w-[90%] font-thin text-[10px]">
            Apple ID, iCloud+, Media & Purchases
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
