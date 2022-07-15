// CommonJs
const fastify = require('fastify')({
  logger: true
})

fastify.get('/', function (request, reply) {
  reply.send("FAMILY TIME!!!")
})

fastify.get('/login', function (request, reply) {
  reply.send("insert user and password or register")
})

fastify.get('/me', function (request, reply) {
  reply.send([
  {
    id: 1,
    name: "Ahadu Tsgaye",
    surname: "Abebe" ,
    birthdate: new Date("1982-12-24"),
    momId: 2,
    dadId: 3,
    siblingIds:[4,5]
  },
  {
    id: 4,
    name: "Semhal Tsgaye",
    surname: "Abebe" ,
    birthdate: new Date("1985-05-07"),
    momId: 2,
    dadId: 3,
    siblingIds:[1,5]
  },
  {
    id: 5,
    name: "Avalon Tsgaye",
    surname: "Abebe" ,
    birthdate: new Date("1995-08-16"),
    momId: 2,
    dadId: 3,
    siblingIds:[1,4]
  },
  {
    id: 2,
    name: "Yirgalem Tsegaye",
    surname: "Kefle" ,
    birthdate: new Date("1968-05-09"),
    momId: 100,
    dadId: 101,
    siblingIds:[33,34]
  },
  {
    id: 3,
    name:"Tsegaye Abebe",
    surname: "Adhana" ,
    birthdate: new Date("1967-05-28"),
    momId: 103,
    dadId: 104,
    siblingIds:[35,36,37,38,39,40,41,42,43,44,45,46]
  }])
})



// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})