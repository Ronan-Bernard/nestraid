import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { HeroCategory } from '@raidleader/shared';
import { HeroClass } from '@raidleader/shared';
import { Trait } from './trait.entity';
import { Stat } from './stat.entity';

@Entity()
export class Candidat {
  IS_TANK = [0, 3, 5];
  IS_DPS = [1, 3, 4];
  IS_HEAL = [2, 4, 5];

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  heroCategory: HeroCategory;

  @Column()
  heroClass: HeroClass;

  get isTank() {
    return this.IS_TANK.includes(this.heroCategory);
  }

  get isHeal() {
    return this.IS_HEAL.includes(this.heroCategory);
  }

  get isDPS() {
    return this.IS_DPS.includes(this.heroCategory);
  }

  @OneToMany(() => Trait, (trait) => trait.candidats)
  traits: Trait[];

  @OneToMany(() => Stat, (stat) => stat.candidats)
  stats: Stat[];

  @Column()
  equipement: number;

  @Column()
  fidelite: number;

  @Column()
  discipline: number;

  @Column()
  egoisme: number;

  @Column()
  leadership: number;
}
