import AppleAppStoreButton from "./apple-app-store-button";
import GooglePlayStoreButton from "./google-play-store-button";
import FBanner from '../assets/f_banner.svg';

// racfe

const HeaderDescription = () => {
    return (
        <div className="flex flex-col items-left col-span-1 m-2">

            <h1 className="antialiased tracking-normal leading-tight text-customBlackFont">
              <span className="flex items-end text-6xl sm:text-8xl"> {/* Adjust font size as needed */}
                  <img
                      src={FBanner}
                      alt="Flashlate - Your Language Translator App"
                      style={{height: '1.2em', marginRight: '0.1em'}} // Adjust height and margin as needed
                  />
                lashlate.
              </span>
                <span className="block text-4xl sm:text-6xl"> {/* New line and smaller font size */}
                    Your Language Translator App
                  </span>
            </h1>
            {/* this is a comment*/}
            <div>
                <p className="block antialiased text-xl font-myCustomFontRegular leading-relaxed text-inherit mb-7 mt-2 md:pr-16 xl:pr-28">
                    The App that translates everything for you
                </p>
            </div>
            <h6 className="block antialiased tracking-normal text-base  leading-relaxed">
                Get the App
            </h6>

            <div className="flex flex-col sm:flex-row">
                <AppleAppStoreButton/>
                <GooglePlayStoreButton/>

            </div>
        </div>
    );
};

export default HeaderDescription;
