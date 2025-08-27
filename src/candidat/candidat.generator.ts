import { randomInt } from 'crypto';
import { HeroCategory } from '@raidleader/shared';
import { HeroClass } from '@raidleader/shared';
import { HeroStat } from '../models/hero-stat.enum';
import { random100 } from '../utils/random100';
import { Candidat } from './entities/candidat.entity';
import { Stat } from './entities/stat.entity';
import { Trait } from './entities/trait.entity';
import { traitValues } from './values/trait.values';

export class CandidatGenerator {
  TRAITS_COUNT = 2;
  CATEGORY_TRENDS = {
    TANK: 23,
    DPS: 45,
    HEAL: 23,
    TANK_DPS: 4,
    DPS_HEAL: 4,
    TANK_HEAL: 1,
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
    console.log(random100(HeroClass, this.CLASS_TRENDS)); // undefined
    //candidat.heroClass = random100(HeroClass, this.CLASS_TRENDS);
    // heroClass, heroCategory : répartition mitigé par tendance

    candidat.traits = this.newCandidatTraits();

    // niveau général (1 à 5, à corréler avec le nv de la guilde)

    candidat.stats = this.newCandidatStats();

    // entre 1 et 10, équipement et leader visibles, le reste caché, tout fixe
    candidat.equipement = randomInt(1, 10);
    candidat.fidelite = randomInt(1, 10);
    candidat.discipline = randomInt(1, 10);
    candidat.egoisme = randomInt(1, 10);
    candidat.leadership = randomInt(1, 10);

    // nickname : à voir

    // irl : âge, sexe
    return candidat;
  }

  /**
   * personnalité : 2 traits parmi une base, 1 seul trait révélé (le [0])
   */
  newCandidatTraits() {
    const traits = new Array<Trait>();
    const traitKeys = Object.keys(traitValues);
    for (let i = 0; i < this.TRAITS_COUNT; i++) {
      const index = Math.floor(traitKeys.length * Math.random());
      const key = traitKeys[index];
      traits.push(traitValues[key]);
    }
    return traits;
  }

  newCandidatStats() {
    const stats = new Array<Stat>();
    for (const [, value] of Object.entries(HeroStat)) {
      const newStat = new Stat();
      newStat.type = value as HeroStat;
      const startValue = randomInt(1, 12);
      let realValue = startValue + Math.floor(Math.random() * 7) - 3;
      realValue = realValue > 0 ? realValue : 1;
      const potentialValue = randomInt(realValue, realValue * 2);

      newStat.visibleValue = startValue;
      newStat.realValue = realValue;
      newStat.potentialValue = potentialValue;
      stats.push(newStat);
    }
    return stats;
  }
}
