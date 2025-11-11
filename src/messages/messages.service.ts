import { MessagesRepository } from './messages.repository';

export class MessagesService {
    // top of JS class - create class properties
    messagesRepository: MessagesRepository;

    // initialize class properties in constructor method
    constructor() {
        // making our own dependencies first 
        // exclusively to understand dependency injection
        // will replace this with NestJS's built in dependency injection
        // this is how we'll build real apps moving forward
        this.messagesRepository = new MessagesRepository();
    }

    findOne(id: string) {
        return this.messagesRepository.findOne(id);
    }

    findAll() {
        return this.messagesRepository.findAll();
    }

    create(content: string) {
        return this.messagesRepository.create(content);
    }
}