import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalScrollCarouselDemo = () => {
  return (
    <div className="bg-white">
      <div className="flex h-48 items-center justify-center px-16">
      <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">We asked ourselves : </h1>
        <div className="h-1 w-20 bg-orange-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">What if people could connect online to unlock deals together? and That’s how <span className="text-orange-500 font-bold">SplitDeal</span> was born</p>
    </div>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group cursor-pointer relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default HorizontalScrollCarouselDemo;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "https://img.freepik.com/free-photo/smiling-blonde-young-woman-looking-her-friend-pointing-shoes-window-display_23-2147968388.jpg?t=st=1742228736~exp=1742232336~hmac=4158a1544c79e8965805a736bda60bdbb6fb8b0f78e01def7dc426cab70410a6&w=1800",
    title: "FIND",
    id: 1,
  },
  {
    url: "https://img.freepik.com/free-photo/three-friends-holding-shopping-bags-looking-smartphone_23-2147968405.jpg?t=st=1742228830~exp=1742232430~hmac=3f2c9110a0d9812a39a1f49920b11dfc82d59500bedfd63f3feb7ab42373eacd&w=1800",
    title: "Share",
    id: 6,
  },
  {
    url: "https://img.freepik.com/free-photo/screaming-girl-with-shopping-bags-studio-shot_329181-7360.jpg?t=st=1742228642~exp=1742232242~hmac=5d08659b05816428c162dec3c9cf31ab1c6380893b69e4f15ebb23644ac71eec&w=2000",
    title: "CONNECT",
    id: 2,
  },
  {
    url: "https://img.freepik.com/free-photo/woman-sitting-table-with-paper-shopping-bags_171337-14712.jpg?t=st=1742228701~exp=1742232301~hmac=ea441b7af9ce475c43016e17010d41b25f205230136fe9c8ee53c983917051cb&w=2000",
    title: "ENJOY",
    id: 3,
  },
  {
    url: "https://img.freepik.com/free-photo/blurry-girls-holding-shopping-bags_23-2148225655.jpg?t=st=1742228998~exp=1742232598~hmac=0c9686f19d6335a5517a2018ce55a30bc1fa1c168f735f84bb14ff5a11ee2a36&w=2000",
    title: "DEALS",
    id: 4,
  },
  {
    url: "https://img.freepik.com/free-photo/medium-shot-happy-girls-with-red-shopping-bags_23-2148299472.jpg?t=st=1742228464~exp=1742232064~hmac=bcd070bbca84f07062e16894d001a893f93387c95904343134054060a414cc1e&w=1480",
    title: "ON",
    id: 5,
  },
  {
    url: "https://i.ibb.co/4R2kB3sR/image.png",
    title: "🥳",
    id: 7,
  },
];