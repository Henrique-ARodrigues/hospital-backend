import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { RecordService } from "./record.service";
import { Response } from "express";
import { RecordModel } from "../models";
import { CreateRecordDTO } from "./dto";
import { CreateRecordResponse } from "./responses";

@Controller("record")
export class RecordController {
    constructor(
        private readonly recordService: RecordService
    ) { }

    @Post()
    create(@Body() dto: CreateRecordDTO, @Res() res: Response): Response {
        const createRecordResponse: CreateRecordResponse = this.recordService.create(dto);

        return res.status(200).json(createRecordResponse);
    }

    @Get()
    findAll(@Res() res: Response): Response {
        const records: RecordModel[] = this.recordService.findAll();
        
        return res.status(200).json({
            message: records.length === 0 ? "Nenhuma ficha cadastrada." : "Fichas encontradas com sucesso.",
            records,
        }) 
    }
}