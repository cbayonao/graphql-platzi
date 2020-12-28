'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
    // Esta ya no se usa
    // const gqlMiddleware = require('express-graphql');
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
    // Configurar los resolvers
    // Importante validar el tipo que se definio en el schema
const resolvers = require('./lib/resolvers')

const app = express()
const port = process.env.port || 3000

// Definiendo el shcema de graphql
const typeDefs = readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8')
const schema = makeExecutableSchema({ typeDefs, resolvers })


// Definimos el middleware
// requiere una url y la ejecucion del middleware
app.use('/api', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}/api`)
})

// Ejecutar el query
// Lo comentamos por que ya no es necesario ejecutarlo en la terminal
// graphql(schema, '{ showAge }', resolvers)
//     .then((data) => console.log(data))