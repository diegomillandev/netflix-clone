import React from "react";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) return null;

  return (
    <nav
      className="
    bg-black/50
      w-56 
      absolute
      top-8
      left-0
      flex-col
      border
      border-gray-700
      flex
    "
    >
      <ul className="flex flex-col">
        <li className="text-white text-center py-3 hover:bg-zinc-600/60">
          Home
        </li>
        <li className="text-white text-center py-3 hover:bg-zinc-600/60">
          Series
        </li>
        <li className="text-white text-center py-3 hover:bg-zinc-600/60">
          Films
        </li>
        <li className="text-white text-center py-3 hover:bg-zinc-600/60">
          New & Popular
        </li>
        <li className="text-white text-center py-3 hover:bg-zinc-600/60">
          My list
        </li>
        <li className="text-white text-center py-3 hover:bg-zinc-600/60">
          Browse by lenguages
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
