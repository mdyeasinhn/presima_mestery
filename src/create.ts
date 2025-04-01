import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const main = async () => {
    const result = await prisma.post.create({
        data: {
            title: "This is title",
            content: "This is content..",
            authorName: "Yeasin",

        }
    });
    //    console.log(result);

    const createMany = await prisma.post.createMany({
        data :[
            {
                title: "This is title",
                content: "This is content..",
                authorName: "Yeasin",
            },
            {
                title: "This is title 2",
                content: "This is content.. 2",
                authorName: "Yeasin 2",
            },
            {
                title: "This is title 3",
                content: "This is content.. 3",
                authorName: "Yeasin 3",
            },
            {
                title: "This is title 4",
                content: "This is content.. 4",
                authorName: "Yeasin 4",
            },
        ]
    })
};

main();
