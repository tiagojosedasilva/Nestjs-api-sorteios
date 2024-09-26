"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioProviders = void 0;
const usuario_entity_1 = require("../entities/usuario.entity");
exports.usuarioProviders = [
    {
        provide: 'USUARIO_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(usuario_entity_1.Usuario),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=usuarios.provider.js.map