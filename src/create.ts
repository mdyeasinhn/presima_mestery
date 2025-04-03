import { PrismaClient, UserRole } from "../generated/prisma";


const prisma = new PrismaClient();


const main = async () => {
    // Creating a new user
    // const createUser = await prisma.user.create({
    //     data: {
    //         userName: "user2",
    //         email: "user1@mail.com",
    //         role: UserRole.user
    //     }
    // });
    // console.log(createUser); 

    // // Creating a profile for the user
    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: "this is bio...",
    //         userId: 1
    //     }
    // });
    // console.log(createProfile);  

    // // Creating a new category
    // const createCategory = await prisma.category.create({
    //     data: {
    //         name: "software engineering"
    //     }
    // });
    // console.log(createCategory);  

    // const createPost = await prisma.post.create({
    //     data: {
    //         title: "this is title..4",
    //         content: "this is content..4",
    //         authorId: 4,
    //         postCategory: {
    //             create: [
    //                     {
    //                         categoryId :1
    //                     },
    //                     {
    //                         categoryId :4
    //                     },
    //                     {
    //                         categoryId :3
    //                     },
    //             ]
    //             // {
    //             //     categoryId : 3
    //             //     // category: {
    //             //     //     connect: {
    //             //     //         id: 1
    //             //     //     }
    //             //     // }
    //             // }
    //         }
    //     },
    //     include:{
    //         postCategory : true,
    //     }
    // });
    // console.log(createPost);

};

main();
