export interface User{
    id: number,
    name: string,
    email: string,
    age: number,
}

export interface CreateUserDTO {
    name: string,
    email: string,
    age: number,
}