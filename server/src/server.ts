// Back-end API RESTful

import Fastify from "fastify";

const app = Fastify()

app.get('/', () => {
    return 'Hello nlw'
})

app.listen({
    port: 3333
})