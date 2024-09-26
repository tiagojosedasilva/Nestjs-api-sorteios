import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {

  constructor(
    @Inject('USUARIO_REPOSITORY')
    private readonly usuarioRepository: Repository<Usuario>
  ){}

  create(createUsuarioDto: CreateUsuarioDto) {
    try {
      return this.usuarioRepository.save(createUsuarioDto)
    } catch (error) {
      console.error(error)
      throw new ForbiddenException(error)
    }
  }

  findAll() {
    try {
      return this.usuarioRepository.find()
    } catch (error) {
      console.error(error)
      throw new ForbiddenException(error)
    }
  }

  findOne(id: number) {
    try {
      return this.usuarioRepository.findBy({id: id})
    } catch (error) {
      console.error(error)
      throw new ForbiddenException(error)
    }  
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    try {
      return this.usuarioRepository.update(id, updateUsuarioDto)
    } catch (error) {
      console.error(error)
      throw new ForbiddenException(error)
    }
  }

  remove(id: number) {
    try {
      return this.usuarioRepository.delete(id)
    } catch (error) {
      console.error(error)
      throw new ForbiddenException(error)
    }
  }
}
