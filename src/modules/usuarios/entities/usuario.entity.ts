import { Entity, Generated, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number
    nome: string
    cpf: string
    email: string
    senha: string
    dataCriacao: Date
    dataAtualizacao: Date
}
