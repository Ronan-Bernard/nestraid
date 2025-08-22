import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Candidat } from './candidat.entity';

@Entity()
export class Trait {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titre: string;

  @Column()
  description: string;

  @ManyToOne(() => Candidat, (candidat) => candidat.traits)
  candidats: Candidat[];
}
