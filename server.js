const fastify = require('fastify')({logger:true})
const PORT = 8080
//SWAGGER API DOC

fastify.register(require('fastify-swagger' ),{
    exposeRoute: true,
    routePrefix:'/docs',
    swagger:{
        info:{title:'fastify-api-doc'},
    },
})

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