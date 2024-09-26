import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { MysqlModule } from './infraestructure/database/mysql.module';

@Module({
  imports: [UsuariosModule, MysqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
