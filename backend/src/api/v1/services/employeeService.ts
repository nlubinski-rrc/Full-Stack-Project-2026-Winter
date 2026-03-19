import { Employee } from "src/models/employeeModel";
import {prisma} from "../../../../prisma/client"

export const getAllEmployees = async(): Promise<Employee[]> => {
    return prisma.employee.findMany();
}

export const createEmployee = async(employeeData: {
    firstName: string,
    lastName: string,
    departmentId: number
}): Promise<Employee> => {
    const newEmployee: Employee = await prisma.employee.create({
        data: {
            ...employeeData
        }
    });

    return newEmployee;
}