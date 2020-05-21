const { ApolloServer } = require('apollo-server')
const { ApolloGateway } = require('@apollo/gateway')

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'demeter', url: 'http://localhost:8080/query' }
  ]
})

const server = new ApolloServer({
  gateway,
  subscriptions: false,
})

server.listen().then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
})
