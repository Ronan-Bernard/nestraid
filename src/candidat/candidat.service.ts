import { Injectable } from '@nestjs/common';
import { UpdateCandidatDto } from './dto/update-candidat.dto';
import { CandidatGenerator } from './candidat.generator';

@Injectable()
export class CandidatService {
  findAll() {
    const generator = new CandidatGenerator();
    const cdObj = {
      candidats: generator.new(10),
    };
    return JSON.stringify(cdObj);
  }

  update(id: number, updateCandidatDto: UpdateCandidatDto) {
    return `This action updates a #${id} candidat`;
  }

  remove(id: number) {
    return `This action removes a #${id} candidat`;
  }
}
