export default {

    root : function (request, reply) {
        reply.type('text/html').send('<h5>Admin Route</h5>')
    },
    pageNotFound : function (request, reply) {
        reply.type('text/html').send('<h5>Admin Route Not Found</h5>')
    }
};