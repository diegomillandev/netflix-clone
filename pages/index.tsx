import { signOut, getSession } from "next-auth/react";
import { NextPageContext } from "next";
import useCurrentUser from "@/hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
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

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <h1 className="text-green-600">Netflix Clone</h1>
      <h2 className="text-green-600">Welcome {user?.name}</h2>
      <button
        onClick={() => signOut()}
        className="bg-red-500 px-4 py-2 rounded-lg text-white"
      >
        SingOut
      </button>
    </>
  );
}
