import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { HeroStat } from '../../models/hero-stat.enum';
import { Candidat } from './candidat.entity';

@Entity()
export class Stat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: HeroStat;

  @Column()
  visibleValue: number;

  // should differ between -3 and +3 from visibleValue
  @Column()
  realValue: number;

  // should differ from +0 to twice realValue
  @Column()
  potentialValue: number;

  @ManyToOne(() => Candidat, (candidat) => candidat.stats)
  candidats: Candidat[];
}
