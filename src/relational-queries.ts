import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const relationalQueries = async () => {

    //fluent api
    const result = await prisma.user.findUnique({
        where: {
            id: 1
        },
        // include : {
        //     post : true
        // }
    }).post();

    // relational filters 
    const publishedPosterUsers = await prisma.user.findMany({
        include : {
            post : true
        }
    })
    console.dir(publishedPosterUsers, {depth : Infinity});
}

relationalQueries();    