import { FastifyRequest, FastifyReply } from 'fastify';
import { ListCustomerService } from '../services/ListCustomerService';

class ListCustomerController{
    listCustomerService = new ListCustomerService()
    
    async handle(request: FastifyRequest, reply: FastifyReply){

        const customers = await this.listCustomerService.execute();
        
        reply.send(customers);
    }

}

export { ListCustomerController };
