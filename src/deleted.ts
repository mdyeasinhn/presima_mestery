import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const deleteData = async() =>{
    //delete single
    // const singleDelete = await prisma.post.delete({
    //     where :{
    //         id : 4
    //     }
    // });
    // delete many
    const deleteMany = await prisma.post.delete({
        where :{
            published : false
        }
    });
    console.log(deleteMany);
};

deleteData();
