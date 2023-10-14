import { PrismaClient } from "@prisma/client";

declare global {
  namespace globalThis {
    var primasdb: PrismaClient;
  }
}
