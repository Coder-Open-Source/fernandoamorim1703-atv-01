import { Module } from '@nestjs/common';
import { PersonController } from 'src/person/person.controller';
import { PersonService } from 'src/person/person.service';

@Module({
    controllers: [PersonController],
    providers: [PersonService]
})
export class PersonModule {}
