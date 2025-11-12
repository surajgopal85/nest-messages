import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
// injectable is a decorator that marks a class as a NestJS repository
// it allows NestJS to inject dependencies into the class
// NestJS will automatically inject the readFile and writeFile functions into the class
// when the class is instantiated
// this is a form of inversion of control (IoC)
export class MessagesRepository {
    async findOne(id: string) {
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);

        return messages[id];
    }

    async findAll() {
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);

        return messages;
    }

    async create(content: string) {
        // get length of messages json, create new id #
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);

        const id = Math.floor(Math.random() * 1000000);
        messages[id] = { id, content };

        await writeFile('messages.json', JSON.stringify(messages));
    }
}