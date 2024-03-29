import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateCustomerService } from '../services/CreateCustomerService';

class CreateCustomerController{
    
    private customerService = new CreateCustomerService();
    
    async handle(request: FastifyRequest, reply: FastifyReply) {
        
        const { name, email } = request.body as { name: string, email: string }

        const customer = await this.customerService.execute({ name, email });
        
        reply.send(customer);
    }
}

export { CreateCustomerController };
