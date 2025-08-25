import { Controller, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { CandidatService } from './candidat.service';
import { UpdateCandidatDto } from './dto/update-candidat.dto';

@Controller('candidat')
export class CandidatController {
  constructor(private readonly candidatService: CandidatService) {}

  /**
   * pour l'instant le findAll génère des candidats
   * à terme ils sont horodatés, il y en a un/deux par minute
   * pourrait être ouvert avec un socket
   */
  @Get()
  findAll() {
    return this.candidatService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCandidatDto: UpdateCandidatDto,
  ) {
    return this.candidatService.update(+id, updateCandidatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candidatService.remove(+id);
  }
}
