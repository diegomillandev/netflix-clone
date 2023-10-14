import { PrismaClient } from "@prisma/client";

const client = global.primasdb || new PrismaClient();

if (process.env.NODE_ENV === "production") global.primasdb = client;

export default client;
