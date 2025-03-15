import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

const tabs = ["Home", "Search", "About", "FAQ"];

const ChipTabs = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className="p-3 flex rounded-xl border-neutral-300  items-center flex-wrap gap-5">
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
}: {
  text: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-white hover:bg-orange-300"
      } text-sm transition-colors rounded-md relative`}
    >
      <span className="relative px-3 py-1  rounded-lg text-neutral-600 text-xl cursor-pointer z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-orange-200 to-orange-400 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

export default ChipTabs;