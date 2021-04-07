import { tema } from "./tema";
import { Usuario } from "./Usuario";

export class postagem{
    public id : number;
    public titulo: string;
    public usuario: Usuario;
    public date : Date;
    public texto: string
    public tema: tema;
}