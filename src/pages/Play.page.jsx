import React from "react";
import DefaultLayoutHoc from "../layout/Default.Layout";

//Components
import Poster from "../Components/Poster/Poster.Component";
import PlayFilter from "../Components/PlayFilters/PlayFilters.Component";

const PlayPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full  flex flex-col-reverse lg:flex-row-reverse gap-4">
          <div className="lg:w-3/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Plays in Pune</h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-9-4-t-6-10-37.jpg"
                  title="So Rude of Me "
                  subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-suhani-shah-kahaani-india-tour-0-2022-8-29-t-12-36-14.jpg"
                  title="suhani-shah-kahaani"
                  subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-daddy-kool-by-atul-khatri-0-2022-8-16-t-10-37-17.jpg"
                  title="daddy kool"
                  subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sunburn-arena-ft-dj-snake-delhi-ncr-0-2022-8-19-t-11-31-17.jpg"
                  title="sunburn-arena"
                  subtitle="Comedy Shows | Hindi, English | 16yrs + | 1hr 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyNCBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00047780-blladzvrpg-portrait.jpg"
                  title="Marathi bana"
                  subtitle="Comedy Shows | Marathi | 16yrs + | 1hr 30mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNSBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00323772-dutzxeyzcn-portrait.jpg"
                  title="Krushna Villa"
                  subtitle="Drama | Marathi | 16yrs + | 1hr 30mins"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <PlayFilter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
            </div>
            <div>
              <PlayFilter
                title="Language"
                tags={["English", "Hindi", "Tamil"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayoutHoc(PlayPage);
