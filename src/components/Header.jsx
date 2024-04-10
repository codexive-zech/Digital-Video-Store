import avatar from "../assets/avatar.png";
import { HiHome, HiMagnifyingGlass, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiDotsVertical } from "react-icons/hi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import HeaderItems from "./HeaderItems";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserLocalDB from "../utils/UserLocalDB";
import logoImg from "../assets/LogoImg.png";
const menu = [
  {
    name: "HOME",
    icon: HiHome,
    link: "/",
  },
  {
    name: "SEARCH",
    icon: HiMagnifyingGlass,
    link: "/search",
  },

  {
    name: "MOVIES",
    icon: HiPlayCircle,
    link: "/movies",
  },
  {
    name: "TV Shows",
    icon: HiTv,
    link: "/tvshows",
  },
  {
    name: "Login",
    icon: CiLogin,
    link: "/login",
  },
  {
    name: "Sign Up",
    icon: AiOutlineUsergroupAdd,
    link: "/signup",
  },
];
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const avatarLink = UserLocalDB.getUser() ? "/me" : "/login";

  return (
    <div className=" flex items-center justify-between p-5">
      <div className=" flex items-center gap-8">
        <div className=" flex items-center">
          <img
            src={logoImg}
            className=" w-[80px] h-30 md:h-14 lg:h-10 md:w-[115px] object-cover"
            alt=""
          />
        </div>

        {/* Desktop Menu */}
        <div className=" hidden md:flex gap-8">
          {menu.map((item, index) => {
            if (
              (item.name === "Login" || item.name === "Sign Up") &&
              UserLocalDB.getUser()
            ) {
              return null;
            }

            return (
              <HeaderItems
                key={index}
                name={item.name}
                Icon={item.icon}
                link={item.link}
              />
            );
          })}
        </div>
        {/*End of Desktop Menu  */}
        {/* Mobile Menu */}
        <div className="  flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index <= 1 && (
                <HeaderItems
                  key={index}
                  name={""}
                  Icon={item.icon}
                  link={item.link}
                />
              )
          )}
          {/* Three Dot Icon */}
          <div className=" md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItems name={""} Icon={HiDotsVertical} />
            {/* Dropdown Menu */}
            {toggle && (
              <div className=" absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index > 1 && (
                      <HeaderItems
                        key={index}
                        name={item.name}
                        Icon={item.icon}
                        link={item.link}
                      />
                    )
                )}
              </div>
            )}
            {/* End of Dropdown Menu */}
          </div>
          {/* End of Three Dot Icon */}
        </div>
        {/*End of Mobile Menu */}
      </div>

      <Link to={avatarLink}>
        <img src={avatar} className=" w-[40px] rounded-full" alt="" />
      </Link>
    </div>
  );
};

export default Header;
