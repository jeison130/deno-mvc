import {oak} from './modules.ts';
import UsuariosRouter from './routes/usuarios.ts';

const {Application, Router} = oak;

const app = new Application();

const router = new Router();

router.get('/', (context) => {
  context.response.body = 'Hola mundo desde Oak';
});

app.use(router.routes());
app.use(UsuariosRouter.routes());

console.log('Servidor escuchando en el puerto 8000');

await app.listen({
  port: 8000,
});
