import { Candidat } from './entities/candidat.entity';
import { traitValues } from './values/trait.values';
import { random100 } from '../utils/random100';
import { HeroCategory } from '../models/hero-category.enum';
import { Trait } from './entities/trait.entity';
import { HeroClass } from '../models/hero-class.enum';

export class CandidatGenerator {
  CATEGORY_TRENDS = {
    Tank: 23,
    Dps: 45,
    Heal: 23,
    BiTankDps: 4,
    BiDpsHeal: 4,
    BiHealTank: 1,
  };

  CLASS_TRENDS = {
    Guerrier: 10,
    Palouf: 10,
    Symetriste: 10,
  };

  constructor() {}

  new(count = 1): Candidat[] {
    const candidats = new Array<Candidat>();
    for (let i = 0; i < count; i++) {
      candidats.push(this.newCandidat());
    }
    return candidats;
  }

  newCandidat(): Candidat {
    const candidat = new Candidat();

    candidat.heroCategory = random100(HeroCategory, this.CATEGORY_TRENDS);

    candidat.heroClass = random100(HeroClass, this.CLASS_TRENDS);

    // heroClass : répartition mitigé par tendance

    // personnalité : 3 traits parmi une base, 1 seul trait révélé (le [0])
    candidat.traits = new Array<Trait>();
    const traitKeys = Object.keys(traitValues);
    for (let i = 0; i < 3; i++) {
      const index = Math.floor(traitKeys.length * Math.random());
      const key = traitKeys[index];
      candidat.traits.push(traitValues[key]);
    }

    // niveau général (1 à 5, si la guilde n'a pas le nv peu de chances
    // qu'il accepte

    // stats : valeur réelle et fourchette +/- large

    // équipement : pr l'instant juste une stat

    // potentiel : le joueur évolue +/- ds ses stats

    // fidélité, discipline

    // irl : âge, sexe
    return candidat;
  }
}
