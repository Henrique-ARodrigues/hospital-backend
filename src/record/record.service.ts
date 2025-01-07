import { BadRequestException, Injectable, InternalServerErrorException, NotImplementedException } from "@nestjs/common";
import { RecordModel } from "../models";
import { CreateRecordDTO } from "./dto";
import { CreateRecordResponse } from "./responses";

@Injectable()
export class RecordService {
    private records: RecordModel[] = [];

    create(dto: CreateRecordDTO): CreateRecordResponse {
        const record: RecordModel | undefined = this.records.find((r: RecordModel) => r.getName() === dto.name);

        const recordExists: boolean = record !== undefined;

        if (recordExists) {
            throw new BadRequestException({
                message: "Não foi possível criar a ficha pois ela já existe."
            });
        }

        try {
            const id: number = this.getBiggerId() + 1;

            const createdRecord: RecordModel = new RecordModel({
                id,
                name: dto.name,
                priority: dto.priority,
                order: dto.order,
                createdAt: new Date(),
                updatedAt: null,
            });

            this.records.push(createdRecord);

            return {
                message: "Ficha criada com sucesso.",
            };
        } catch (error: any) {
            throw new InternalServerErrorException({
                message: "Erro inesperado no servidor ao criar ficha.",
            }, { cause: error, })
        }
    }

    private getBiggerId(): number {
        const biggerId: number = this.records
            .map((record: RecordModel) => record.getId())
            .reduce((prev: number, curr: number) => curr > prev ? curr : prev, 1);

        return biggerId;
    }

    findAll(): RecordModel[] {
        return this.records;
    }
}