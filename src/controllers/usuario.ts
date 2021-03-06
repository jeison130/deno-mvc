import {Context} from 'https://deno.land/x/oak/mod.ts';
import {UsuariosModel} from '../models/user.ts';
import {dataUser} from '../DataUtils.ts';

const usuariosModel = new UsuariosModel();

export class UsuarioController {
  async listar(context: Context) {
    const usuarios = await usuariosModel.listar();

    context.response.body = usuarios;
  }

  async crear(context: Context) {
    const usuario = await (context.request.body().value)

    await usuariosModel.crear(usuario);

    context.response.body = {
      message: 'Usuario creado correctamente'
    };
  }
}
