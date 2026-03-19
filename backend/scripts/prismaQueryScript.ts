import { prisma } from "../lib/prisma";

async function main() {
    // Create a new user with a post

    // Fetch all users with their posts
    const allUsers = await prisma.department.findMany({
        include: {
            employees: true,
        },
    });
    console.log("All users:", JSON.stringify(allUsers, null, 2));
    //await prisma.employee.deleteMany();
    //await prisma.department.deleteMany();
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
