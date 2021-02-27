import {Context} from 'https://deno.land/x/oak/mod.ts';
import {UsuariosModel} from '../models/user.ts';
import {dataUser} from '../DataUtils.ts';

const usuariosModel = new UsuariosModel();

export class UsuarioController {
  async listar(context: Context) {
    const usuarios = await usuariosModel.listar();
    // console.log(usuarios);
    context.response.body = usuarios;
  }

  async create() {
    const user = dataUser();
    await usuariosModel.crear({
      nombre: user.getNombre(),
      apellido: user.getApellido(),
      celular: user.getCelular(),
      correo: user.getCorreo(),
      contrasenia: user.getPassword(),
    });
  }
}
