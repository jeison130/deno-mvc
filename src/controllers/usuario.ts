import {Context} from 'https://deno.land/x/oak/mod.ts';
import {UsuariosModel} from '../models/user.ts';

const usuariosModel = new UsuariosModel();

export class UsuarioController {
  async listar(context: Context) {
    const usuarios = await usuariosModel.listar();

    context.response.body = usuarios;
  }

  async crear(context: Context) {
    const usuario = await (context.request.body().value);

    await usuariosModel.crear(usuario);

    context.response.body = {
      message: 'Usuario creado correctamente',
    };
  }

  async actualizar(context: any){
    const usuario = await (context.request.body().value);
    console.log(context.params.id)
  }

  eliminar(context: any) {
    console.log(context.params.id)
    context.response.body = 'Eliminando usuario'
  }
}
