import NavbarItem from "./NavbarItem";
import { RxTriangleDown } from "react-icons/rx";
import { BsSearch, BsBell } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import { useCallback, useEffect, useState } from "react";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [visibleAccountMenu, setVisibleAccountMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toogleMobileMenu = useCallback(() => {
    setVisibleMenu((prev) => !prev);
  }, []);

  const toogleAccountMenu = useCallback(() => {
    setVisibleAccountMenu((prev) => !prev);
  }, []);

  function handleResize(e: Event): void {
    if (e.target instanceof Window) {
      if (e.target.innerWidth > 1024) {
        setVisibleMenu(false);
        setVisibleAccountMenu(false);
      }
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      if (window.scrollY > TOP_OFFSET) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed z-40">
      <div
        className={`
        px-4 
        md:px-16
        py-6
        flex
        flex-row
        items-center
        transition
        duration-500
        bg-zinc-900
        bg-opacity-90
        ${
          isScrolled
            ? "backdrop-filter backdrop-blur-sm bg-opacity-100"
            : "backdrop-filter backdrop-blur-sm bg-opacity-0"
        }
        `}
      >
        <img src="/images/logo.png" alt="image logo" className="h-4 lg:h-7" />

        <nav
          className="
        flex-row
        ml-8
        gap-7
        hidden
        lg:flex
        "
        >
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My list" />
          <NavbarItem label="Browse by lenguages" />
        </nav>

        <div
          onClick={toogleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browser</p>
          <RxTriangleDown
            size={22}
            className={`text-white transition ${
              visibleMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={visibleMenu} />
        </div>

        <nav className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>
          <div
            onClick={toogleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-blue.png" alt="image profile" />
            </div>
            <RxTriangleDown
              size={22}
              className={`text-white transition ${
                visibleAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={visibleAccountMenu} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
