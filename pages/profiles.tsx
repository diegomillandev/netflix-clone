import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import userCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from "next/router";
import { showName } from "@/utils/functions";

export async function getServerSideProps(context: NextPageContext) {
  const sesion = await getSession(context);

  if (!sesion) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const Profiles = () => {
  const router = useRouter();
  const { data: user } = userCurrentUser();
  const name = showName(user?.name || "");

  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">
          Who is Watching?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div className="" onClick={() => router.push("/")}>
            <div className="group flex-row w-44 mx-auto">
              <div className=" w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                <img src="/images/default-blue.png" alt="" />
              </div>
              <div className="mt-2 text-gray-400 text-2xl text-center group-hover:text-white capitalize">
                {name ? name : "Name Profile"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
