const { ApolloServer } = require('apollo-server')
const { ApolloGateway } = require('@apollo/gateway')

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'demeter', url: 'http://localhost:8001/query' }
  ]
})

const server = new ApolloServer({
  gateway,
  subscriptions: false,
})

server.listen( {port: 8000} ).then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
})
