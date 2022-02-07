import publicHandler from "../controllers/public_controllers/index.js";

export default function (fastify, opts, done){
    fastify.get('/',{ prefixTrailingSlash: 'no-slash' }, publicHandler.root);
    done();
    fastify.get('*',publicHandler.pageNotFound);
    done();
};