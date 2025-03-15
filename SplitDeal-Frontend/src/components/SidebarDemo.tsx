import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import { IconType } from "react-icons";
import {
  FiBarChart,
  FiChevronDown,
  FiChevronsRight,
  FiDollarSign,
  FiHome,
  FiMonitor,
  FiShoppingCart,
  FiTag,
  FiUsers,
} from "react-icons/fi";
import { motion } from "framer-motion";
import Deals from "./Deals";
import ApiUrls from "../Api/ApiUrls";

export const SidebarDemo = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [subCategories, setSubCategories] = useState<{ _id: string; name: string; logoLink?: string }[]>([]);

  useEffect(() => {
    if (selectedCategory) {
      fetchSubCategories(selectedCategory);
    }
  }, [selectedCategory]);

  const fetchSubCategories = async (categoryId: string) => {
    try {
      const response = await fetch(
        `${ApiUrls.getSubCategory}/${categoryId}`
      );
      const data = await response.json();
      setSubCategories(data);
    } catch (error) {
      console.error("Error fetching sub-categories:", error);
    }
  };

  return (
    <div className="flex pt-26">
      <Sidebar subCategories={subCategories} setSelectedCategory={setSelectedCategory} />
      <Deals selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
    </div>
  );
};

export const Sidebar = ({
  subCategories,
  setSelectedCategory,
}: {
  subCategories: { _id: string; name: string; logoLink?: string }[];
  setSelectedCategory: Dispatch<SetStateAction<string | null>>;
}) => {
  const [open, setOpen] = React.useState(true);
  const [selected, setSelected] = React.useState<string | null>(null);

  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2"
      style={{ width: open ? "225px" : "fit-content" }}
    >
      <div className="space-y-1">
        {subCategories.map((subCategory) => (
          <Option
            key={subCategory._id}
            title={subCategory.name}
            iconUrl={subCategory.logoLink}
            selected={selected}
            setSelected={(title) => {
              setSelected(title);
              setSelectedCategory(subCategory._id);
            }}
            open={open}
          />
        ))}
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

const Option = ({
  title,
  iconUrl,
  selected,
  setSelected,
  open,
}: {
  title: string;
  iconUrl?: string;
  selected: string | null;
  setSelected: (title: string) => void;
  open: boolean;
}) => {
  return (
    <motion.button
      layout
      onClick={() => setSelected(title)}
      className={`relative flex h-10 w-full items-center rounded-md transition-colors ${selected === title ? "bg-orange-100 text-orange-800" : "text-slate-500 hover:bg-slate-100"
        }`}
    >
      <motion.div layout className="grid h-full w-10 place-content-center text-lg">
        {iconUrl ? <img src={iconUrl} alt={title} className="w-6 h-6" /> : "🔹"}
      </motion.div>
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-xs font-medium"
        >
          {title}
        </motion.span>
      )}
    </motion.button>
  );
};

const ToggleClose = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100"
    >
      <div className="flex items-center p-2">
        <motion.div layout className="grid size-10 place-content-center text-lg">
          <FiChevronsRight className={`transition-transform ${open && "rotate-180"}`} />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};
