import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const batchTransaction = async () => {

    // Run both queries inside a transaction
    const [createUser, updateUser] = await prisma.$transaction([
      // Create a new user
      prisma.user.create({
        data: {
          userName: "enan",
          email: "enan@gmail.com"
        }
      }),
      // Update existing user with id = 100
      prisma.user.update({
        where: {
          id: 100
        },
        data: {
          age: 30
        }
      })
    ]);

    // If both succeed, log the results
    console.log("User Created:", createUser);
    console.log("User Updated:", updateUser);

 
};

batchTransaction();
