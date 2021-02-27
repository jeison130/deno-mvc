import { client } from "../config/mariadb.ts";

export class UsuariosModel {
    async listar() {
        const showAll = await client.execute('select * from user');

        return showAll.rows;
    }
}