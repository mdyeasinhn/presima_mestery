import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const main = async() =>{
    // create data into db
    const result = await prisma.post.create({
        data :{
            title : "This is title",
            content : "This is content..",
            authorName : "Yeasin",

        }
    });
    const getAllFromDb = await prisma.post.findMany();
    
    console.log(getAllFromDb);
};

main();
