import { FastifyRequest, FastifyReply } from 'fastify';
import { DeleteCustomerService } from '../services/DeleteCustomerService';

class DeleteCustomerController {

    customerService = new DeleteCustomerService();

    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as { id: string };
        const customer = await this.customerService.execute({ id });
        reply.send(customer);
    }

}

export { DeleteCustomerController };
