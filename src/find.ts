import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const main = async () => {
    //find all
    const getAllFromDB = await prisma.post.findMany();


    // find first and find first or throw error
    const findFirst = await prisma.post.findFirstOrThorw({
        where: {
            id: 1
        }
    })
    //  console.log({findFirst});

    // find unique and find unique and or thorw errr
    const findUnique = await prisma.post.findUniqueOrThrow({
        where: {
            id: 1
        }
    })
    console.log({findUnique})

};

main();
