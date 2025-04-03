import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const filtering = async () => {

    // and filtering 
    const andFiltering = await prisma.post.findMany({
        where: {
            AND: [
                {
                    title: {
                        contains: "title"
                    },
                },
                { 
                    published: true
                }
            ]
        }
    });

    // or filtering
    const orFiltering = await prisma.post.findMany({
        where: {
            OR: [
                {
                    title: {
                        contains: "title"
                    },
                },
                { 
                    published: false
                }
            ]
        }
    });

    console.log("or filtering",orFiltering); // Log the results
};


filtering();
