import { PrismaClient } from "@prisma/client";
import { SHARE_ENV } from "worker_threads";

const prisma = new PrismaClient();

const paginationSorting = async()=>{
    // offset pagination 
    const offsetData = await prisma.post.findMany({
        skip : 5,
        take : 2
    });

    // console.log("offset pagination data",offsetData)

    // cursor based pagination 
    const cursorBaseedPaginationData = await prisma.post.findMany({
        skip : 5,
        take : 2,
        cursor : {
            id : 10     
        }
    });
    //  console.log("offset pagination data",cursorBaseedPaginationData)
    const sortingData = await prisma.post.findMany({
        orderBy:{
            id :'desc'
        },

        skip : 5,
        take : 2,
        where :{
            title : 'Title 1'
        }
    });
    console.log('sorted data ', sortingData);




}


paginationSorting();