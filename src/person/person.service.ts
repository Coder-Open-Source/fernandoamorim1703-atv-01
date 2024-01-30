import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonService {
    
    public fernandoData() {
        const fernando = {
            name: "Fernando",
            age: "26",
        }

        return fernando
    }
    
}
