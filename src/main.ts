import {client} from './config/mariadb.ts';
import {dataUser} from './DataUtils.ts';
import {UsuariosModel} from './models/user.ts';
import {UsuarioController} from './controllers/usuario.ts';

const usuariosModel = new UsuariosModel();
const usuarioController = new UsuarioController();

function menu(): string {

  console.log('MENU');
  console.log('1. crear usuario');
  console.log('2. actualizar usuario');
  console.log('3. listar usuarios');
  console.log('4. borrar usuario');
  console.log('5. salir');

  return prompt('opcion: ') as string;
}

let salir = false;
//Bucle principal
while (!salir) {
  const opcion = menu();

  switch (opcion) {
    case '1': {
      await usuarioController.create()
      break;
    }
    case '2': {
      const usuarios = await usuariosModel.listar();
      console.log(usuarios);
      const opcion = prompt('opcion: ') as string;
      const userUpdate = await client.execute('select * from user where id=' + opcion);
      console.log('Asigna nuevos valores al usuario');
      console.log(userUpdate.rows);
      const user2 = dataUser();
      const update = await client.execute('update user set nombre="' + user2.getNombre() + '",apellido="' + user2.getApellido() + '",' +
        'celular="' + user2.getCelular() + '",correo="' + user2.getCorreo() + '",contrasenia="' + user2.getPassword() + '" where id=' + opcion);
      console.log(update.affectedRows);
      break;
    }
    case '3': {
      await usuarioController.listar();
      break;
    }
    case '4': {
      const usuarios = await usuariosModel.listar();
      console.log(usuarios);
      const opcion = prompt('opcion: ') as string;
      const deleteRegister = await client.execute('delete from user where id=' + opcion);
      console.log(deleteRegister.affectedRows);
      break;
    }
    case '5': {
      salir = true;
      console.log('powered by MK(^o^)');
      break;
    }
    default: {
      console.log('La opcion no existe, vuelva a elegir');
      break;
    }
  }
}

