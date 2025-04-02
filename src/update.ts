import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {

    // const singleUpdate = await prisma.post.updates({
    //     where: {
    //         id: 3
    //     },
    //     data : {
    //         title : "title updated",
    //         content : "content updated",
    //         author : "author updated",
    //     }
    // });
    // console.log(singleUpdate);

    const updateMany = await prisma.post.updateMany({
        where: {
            title: "This is title 2"
        },
        data: {
            published: true
        }
    });
    const upsertData = await prisma.post.upsert({
        where: {
            id: 2
        },
        update: {

        },
        create: {
            title: "This is title 2",
            content: "This is content.. 2",
            authorName: "Yeasin 2",
        },
    });
    console.log(upsertData)
}

console.log(updates)