import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const interactiveTransction = async () => {
  const result = await prisma.$transaction(async (tranctionClient) => {
    //  Query 1: Get all published posts
    const getAllPost = await tranctionClient.post.findMany({
      where: {
        published: true
      }
    });

    //  Query 2: Count total users
    const countUser = await tranctionClient.user.count();

    //  Query 3: Update user with id 8
    const updateUser = await tranctionClient.user.update({
      where: {
        id: 8
      },
      data: {
        age: 43
      }
    });

    //  Return all results together
    return {
      getAllPost,
      countUser,
      updateUser
    };
  });

  //  Log the final result from the transaction
  console.log(result);
};

interactiveTransction();
