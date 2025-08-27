import { Injectable } from '@nestjs/common';
import { CandidatGenerator } from './candidat.generator';
import { UpdateCandidatDto } from './dto/update-candidat.dto';

@Injectable()
export class CandidatService {
  findAll() {
    const generator = new CandidatGenerator();
    const cdObj = {
      candidats: generator.new(10),
    };

    const candidatsInfos = cdObj.candidats.map(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ IS_TANK, IS_HEAL, IS_DPS, fidelite, discipline, egoisme, ...rest }) =>
        rest,
    );
    return JSON.stringify({ candidats: candidatsInfos }, null, 2);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateCandidatDto: UpdateCandidatDto) {
    return `This action updates a #${id} candidat`;
  }

  remove(id: number) {
    return `This action removes a #${id} candidat`;
  }
}
