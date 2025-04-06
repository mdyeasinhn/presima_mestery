import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const rawQuery = async () => {
    // get all post
    // const posts = await prisma.$queryRaw`SELECT * FROM "posts"`
    // console.log(posts);


    // delete  table 
    await prisma.$queryRaw`TRUNCATE TABLE "category" CASCADE`
}

rawQuery();


