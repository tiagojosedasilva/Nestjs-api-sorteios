import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { usuarioProviders } from './providers/usuarios.provider';
import { MysqlModule } from 'src/infraestructure/database/mysql.module';

@Module({
  imports: [MysqlModule],
  controllers: [UsuariosController],
  providers: [UsuariosService, ...usuarioProviders],
})
export class UsuariosModule {}
