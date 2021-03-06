import {UsuarioController} from '../controllers/usuario.ts';
import {oak} from '../modules.ts';

const {Router} = oak;
const router = new Router();
const usuarioController = new UsuarioController();

router
  .get('/usuarios', usuarioController.listar)
  .post('/usuarios', usuarioController.crear)
  .put('/usuarios/:id', usuarioController.eliminar)
  .delete('/usuarios/:id', usuarioController.eliminar);

export default router
