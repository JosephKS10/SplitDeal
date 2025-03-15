import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-orange-500 font-medium">
          Better shopping every day
        </span>
        <h3 className="flex  text-2xl md:text-4xl font-semibold">
          with <img src="https://res.cloudinary.com/dehtc9uyy/image/upload/v1741969203/SplitDealLogo_wtfs6f.png" height={150} width={200} />
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
        Introducing our cutting-edge collaborating deals project—a game-changing platform that redefines how partnerships and business opportunities come together.
        </p>
        <button className="bg-orange-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-orange-600 active:scale-95">
          Find a class
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
    {
      id: 1,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/200px-Samsung_Logo.svg.png",
    },
    {
      id: 2,
      src: "https://au.tommy.com/media/logo/stores/1/Center-together-logo-cropped.gif",
    },
    {
      id: 3,
      src: "https://www.calvinklein.com.au/static/version1739928074/frontend/Netstarter/calvinklein2/en_GB/images/logo.svg",
    },
    {
      id: 4,
      src: "https://www.lg.com/content/dam/lge/common/logo/logo-lg-100-44.svg",
    },
    {
      id: 5,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYablQBdUce6WUhEaxCGu-DAW6LDFKiDIzlQ&s",
    },
    {
      id: 6,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/200px-Logo_NIKE.svg.png",
    },
    {
      id: 7,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/200px-Adidas_Logo.svg.png",
    },
    {
      id: 8,
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Puma_logo.svg/200px-Puma_logo.svg.png",
    },
    {
      id: 9,
      src: "data:image/png;base64,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",
    },
    {
      id: 10,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Zara_Logo.svg/200px-Zara_Logo.svg.png",
    },
  ];

const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
      <motion.div
        key={sq.id}
        layout
        transition={{ duration: 1.5, type: "spring" }}
        className="w-32 h-32" // fixed square size using Tailwind classes
        style={{
          backgroundImage: `url(${sq.src})`,
          backgroundSize: "contain", // adjust to ensure the entire image is visible
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></motion.div>
    ));
  };
const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;