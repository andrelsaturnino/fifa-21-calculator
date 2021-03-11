import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid"

@Entity("players")
class Player{

 @PrimaryColumn()
 readonly id: string;

@Column()
 name: string;

 @Column()
 quantidade: string;

 @Column()
 valor: string;
 
 @CreateDateColumn()
 created_at: Date;

 constructor()
 {
     if(!this.id) {
        this.id= uuid() ;
     }
 }

}

export {Player}