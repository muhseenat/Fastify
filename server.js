const fastify = require('fastify')({logger:true})
const PORT = 8080


//like user router in express
fastify.register(require('./routes/item'))


const start= async()=>{
    try {
        await fastify.listen(PORT)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()