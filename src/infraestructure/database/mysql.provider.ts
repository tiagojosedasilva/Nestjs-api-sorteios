import { Usuario } from 'src/modules/usuarios/entities/usuario.entity';
import { DataSource } from 'typeorm';

export const mysqlProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '1234',
        database: 'bd_sorteios',
        entities: [
            Usuario,
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];