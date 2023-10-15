import { signOut } from "next-auth/react";
import React from "react";
import useCurrentUser from "@/hooks/useCurrentUser";
import { showName } from "@/utils/functions";
import { AiOutlineUser } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data: user } = useCurrentUser();
  const name = showName(user?.name || "");

  if (!visible) return null;
  return (
    <div className="bg-black/50 w-56 absolute top-14 right-0 pt-5 flex-col flex border border-gray-700">
      <div className="flex flex-col gap-3">
        <header className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img
            className="w-8 rounded-md"
            src="/images/default-blue.png"
            alt="logo"
          />
          <p className="text-white text-sm group-hover/item:underline capitalize">
            {name ? name : "Name Profile"}
          </p>
        </header>
        <hr className="bg-gray-500 border-0 h-px mt-2 mb-4" />
        <div
          onClick={() => signOut({ callbackUrl: "/auth" })}
          className="pl-5 text-center text-white hover:underline pb-3 flex items-center justify-start gap-4"
        >
          <BiHelpCircle size={28} />
          Help Center
        </div>
        <div
          onClick={() => signOut({ callbackUrl: "/auth" })}
          className="pl-5 text-center text-white hover:underline pb-3 flex items-center justify-start gap-4"
        >
          <AiOutlineUser size={28} />
          Account
        </div>
        <hr className="bg-gray-500 border-0 h-px mt-2" />
        <div
          onClick={() => signOut({ callbackUrl: "/auth" })}
          className="text-center text-white hover:underline pb-3"
        >
          Sign Out of Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
