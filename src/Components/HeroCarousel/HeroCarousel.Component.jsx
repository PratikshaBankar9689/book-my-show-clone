import React, { useState } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.Component";

const HeroCarousel = () => {
  const [images, setImage] = useState([
    {
      adult: false,
      backdrop_path: "/cOF0InT1qQVUeNjqxjF7gtEtL5L.jpg",
      genre_ids: [53],
      id: 985939,
      original_language: "en",
      original_title: "Fall",
      overview:
        "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
      popularity: 5456.118,
      poster_path: "/spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
      release_date: "2022-08-11",
      title: "Fall",
      video: false,
      vote_average: 7.4,
      vote_count: 1300,
    },
    {
      adult: false,
      backdrop_path: "/y2Ca1neKke2mGPMaHzlCNDVZqsK.jpg",
      genre_ids: [28, 35, 53],
      id: 718930,
      original_language: "en",
      original_title: "Bullet Train",
      overview:
        "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
      popularity: 5396.345,
      poster_path: "/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg",
      release_date: "2022-07-03",
      title: "Bullet Train",
      video: false,
      vote_average: 7.5,
      vote_count: 1592,
    },

    {
      adult: false,
      backdrop_path: "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
      genre_ids: [16, 878, 28],
      id: 610150,
      original_language: "ja",
      original_title: "ドラゴンボール超 スーパーヒーロー",
      overview:
        "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
      popularity: 5953.989,
      poster_path: "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
      release_date: "2022-06-11",
      title: "Dragon Ball Super: Super Hero",
      video: false,
      vote_average: 8,
      vote_count: 1426,
    },
    {
      adult: false,
      backdrop_path: "/rgZ3hdzgMgYgzvBfwNEVW01bpK1.jpg",
      genre_ids: [28, 53],
      id: 429473,
      original_language: "en",
      original_title: "Lou",
      overview:
        "A young girl is kidnapped during a powerful storm. Her mother joins forces with her mysterious neighbour to set off in pursuit of the kidnapper. Their journey will test their limits and expose the dark secrets of their past.",
      popularity: 3737.89,
      poster_path: "/djM2s4wSaATn4jVB33cV05PEbV7.jpg",
      release_date: "2022-09-23",
      title: "Lou",
      video: false,
      vote_average: 6.5,
      vote_count: 223,
    },
    {
      adult: false,
      backdrop_path: "/5hoS3nEkGGXUfmnu39yw1k52JX5.jpg",
      genre_ids: [28, 12, 14],
      id: 960704,
      original_language: "ja",
      original_title: "鋼の錬金術師 完結編 最後の錬成",
      overview:
        "The Elric brothers’ long and winding journey comes to a close in this epic finale, where they must face off against an unworldly, nationwide threat.",
      popularity: 3068.271,
      poster_path: "/AeyiuQUUs78bPkz18FY3AzNFF8b.jpg",
      release_date: "2022-06-24",
      title: "Fullmetal Alchemist: The Final Alchemy",
      video: false,
      vote_average: 6.9,
      vote_count: 36,
    },
    {
      adult: false,
      backdrop_path: "/rqgeBNWXas1yrAyXxwi9CahfScx.jpg",
      genre_ids: [53],
      id: 985939,
      original_language: "en",
      original_title: "Fall",
      overview:
        "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights.",
      popularity: 6731.327,
      poster_path: "/9f5sIJEgvUpFv0ozfA6TurG4j22.jpg",
      release_date: "2022-08-11",
      title: "Fall",
      video: false,
      vote_average: 7.4,
      vote_count: 346,
    },
    {
      adult: false,
      backdrop_path: "/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg",
      genre_ids: [14, 28, 35],
      id: 616037,
      original_language: "en",
      original_title: "Thor: Love and Thunder",
      overview:
        "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
      popularity: 2249.741,
      poster_path: "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
      release_date: "2022-07-06",
      title: "Thor: Love and Thunder",
      video: false,
      vote_average: 6.8,
      vote_count: 4102,
    },
  ]);

  const settingsLG = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  const settings = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((images, index) => (
            <div className="w-full h-56 md:h-80 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((images, index) => (
            <div className="w-full h-96 px-2 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
