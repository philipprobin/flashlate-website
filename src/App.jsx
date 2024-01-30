import HeaderDescription from "./components/header-description";
import Newsletter from "./components/newsletter";
import AppleAppStoreButton from "./components/apple-app-store-button";
import GooglePlayStoreButton from "./components/google-play-store-button";
import home from "./assets/screenshots/home.png";
import conjugation from "./assets/screenshots/conjugation.png";
import community from "./assets/screenshots/communityDeck.png";
import "./global.css";


function App() {
  return (
      <div className="bg-customGreyBgColor min-h-screen p-2 md:p-20 text-customBlackFont font-myCustomFont">
        <div className="container mx-auto grid h-full w-full grid-cols-1 place-items-center lg:grid-cols-2 ">
          {/*Block 1*/}
          <div className="col-span-1 m-4">
            <HeaderDescription/>
          </div>
          <div>
            <img src={home} alt="home" className="w-96 h-auto m-8"/>
          </div>
          {/*Block 2*/}
          <div>
            <img src={conjugation} alt="recipe" className="w-96 h-auto m-8"/>
          </div>
          <div className="col-span-1 m-4">
            <h1 className="block antialiased tracking-normal text-4xl sm:text-5xl leading-tight  ">
              <span className="text-customTeal">Conjugate</span> any verb in any language
            </h1>
          </div>
          {/*Block 3*/}
          <div className="col-span-1 m-4">
            <h1 className="block antialiased tracking-normal text-4xl sm:text-5xl leading-tight">
              <span className="text-customTeal">Practice</span> with our Community Decks
            </h1>

          </div>
          <div>
            <img src={community} alt="search" className="w-96 h-auto m-8"/>
          </div>
        </div>

        <Newsletter/>

        <div className="flex flex-col sm:flex-row items-center justify-center">
          <AppleAppStoreButton/>
          <GooglePlayStoreButton/>
        </div>

      </div>
  );
}

export default App;
