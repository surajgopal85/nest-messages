import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
    async findOne(id: string) {
        const contents = await readFile('messages.json', 'utf8');
    }

    async findAll() {

    }

    async create(message: string) {

    }
}