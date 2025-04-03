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
    // not filtering
    const notFiltering = await prisma.post.findMany({
        where: {
            NOT: [
                {
                    title: {
                        contains: "this"
                    },
                },

            ]
        }
    });
    const startWith = await prisma.user.findMany({
        where: {
            email: {
                startsWith: 'user1', // endWith,contains, equals

            }

        }
    });


    const userNameArray = ['user1', 'user2', 'user3'];

    const userNameByArray = await prisma.user.findMany({
        where: {
            userName: {
                in: userNameArray
            }
        }
    });


    const inDepthData = await prisma.user.findUnique({
        where: {
            id: 1,
        },
        include: {
            post: {
                include: {
                    postCategory: {
                        include: {
                            category: true
                        }
                    }
                }
            }
        }
    })

    console.dir(inDepthData, {depth : Infinity}); // Log the results
};


filtering();
