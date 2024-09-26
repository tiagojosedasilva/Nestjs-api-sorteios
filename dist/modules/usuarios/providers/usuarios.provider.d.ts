import { DataSource } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';
export declare const usuarioProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Usuario>;
    inject: string[];
}[];
