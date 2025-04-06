import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const batchTransaction = async () => {
  const [createUser, updateUser] = await prisma.$transaction([
    prisma.user.create({
      data: {
        userName: "yeasin",
        email: "yeasin@gmail.com"
      }
    }),
    prisma.user.update({
      where: {
        id: 4
      },
      data: {
        age: 30
      }
    })
  ]);

  console.log("User Created:", createUser);
  console.log("User Updated:", updateUser);
};

batchTransaction();
