import adminHandler from "../controllers/admin_controllers/index.js";

export default function (fastify, opts, done){
    fastify.get('/',{ prefixTrailingSlash: 'slash' }, adminHandler.root);
    done();
    fastify.get('*', adminHandler.pageNotFound);
    done();
};