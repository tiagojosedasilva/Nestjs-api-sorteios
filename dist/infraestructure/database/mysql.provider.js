"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mysqlProviders = void 0;
const usuario_entity_1 = require("../../modules/usuarios/entities/usuario.entity");
const typeorm_1 = require("typeorm");
exports.mysqlProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '1234',
                database: 'bd_sorteios',
                entities: [
                    usuario_entity_1.Usuario,
                ],
                synchronize: true,
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=mysql.provider.js.map