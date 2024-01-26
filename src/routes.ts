import fastify, { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCustomerController } from  "./controllers/ListCustomerController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return {ok: true};
    })

    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return await new CreateCustomerController().handle(request, reply);
    })

    fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return await new ListCustomerController().handle(request, reply);
    })

    fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return await new DeleteCustomerController().handle(request, reply);
    })
}
