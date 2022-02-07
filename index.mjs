import Fastify from "fastify";
import PublicRoutes from "./routes/public.js";
import AdminRoutes from "./routes/admin.js";

const fastify = Fastify({ logger: true });

fastify.register(PublicRoutes, { prefix: '/' });
fastify.register(AdminRoutes, { prefix: '/admin' });

fastify.listen(2100, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});