import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
    constructor(public messagesRepo: MessagesRepository) {}

    // injectable is a decorator that marks a class as a NestJS service
    // NestJS will automatically inject the MessagesRepository into the class
    // when the class is instantiated
    // this is a form of inversion of control (IoC)
    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(content: string) {
        return this.messagesRepo.create(content);
    }
}