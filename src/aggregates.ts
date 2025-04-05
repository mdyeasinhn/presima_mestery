import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient()

// Function to perform aggregate queries on user and post tables
const aggregates = async () => {
    // Get the average age of all users
    const avgAge = await prisma.user.aggregate({
        _avg: {
            age: true
        }
    });

    // Get the sum of all users' ages
    const sumAge = await prisma.user.aggregate({
        _sum: {
            age: true
        }
    });

    // Count the number of users based on the userName field
    const countAge = await prisma.user.aggregate({
        _count: {
            userName: true
        }
    });

    // Count the number of published posts based on the title field
    const countTitle = await prisma.post.aggregate({
        _count: {
            title: true
        },
        where: {
            published: true
        }
    });

    console.log(countTitle)
};

aggregates();
