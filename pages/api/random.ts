import { NextApiRequest, NextApiResponse } from "next";

import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  if (method !== "GET") return res.status(405).end();

  try {
    await serverAuth(req);

    const movieCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);

    const randomMovie = await prismadb.movie.findFirst({
      take: 1,
      skip: randomIndex,
    });

    return res.status(200).json(randomMovie);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
