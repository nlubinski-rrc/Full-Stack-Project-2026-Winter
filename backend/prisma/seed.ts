import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import { departments } from "./seedData";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
async function main() {
    for (const departmentItem of departments) {
        let employees: { firstName: string; lastName: string }[] = [];
        for (const employee of departmentItem.employees) {
            const newEmployee = {
                firstName: employee.firstName,
                lastName: employee.lastName,
            };
            employees.push(newEmployee);
        }

        console.log(employees);

        const result = await prisma.department.upsert({
            where: { departmentId: departmentItem.id },
            update: {},
            create: {
                name: departmentItem.name,
                employees: {
                    create: employees,
                },
            },
        });
        console.log(result);
    }
}
main()
    .then(async () => {
        await prisma.$disconnect();
        await pool.end();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        await pool.end();
        process.exit(1);
    });
