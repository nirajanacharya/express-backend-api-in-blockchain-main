const express = require('express')
const server = express()
const body_parser = require('body-parser')
const Web3 = require('web3')

require('dotenv').config()

const contracts = require('./abi/contracts.json')

// Configure blockchain
const rpcURL = process.env.RPC_URL || '' // Your Mainnet RPC URL GOES HERE
const web3 = new Web3(new Web3.providers.HttpProvider(rpcURL));
const contract = new web3.eth.Contract(contracts.abi, contracts.address)

// Server config
const port = process.env.PORT || 4000
// parse JSON (application/json content-type)
server.use(body_parser.json())

// Endpoints
server.get('/heartbeat', (req, res) => {
  res.json({ status: 'ok' })
})

server.get('/block-number', async (req, res) => {
  const blockNumber = await web3.eth.getBlockNumber()
  res.json({
    status: 'ok',
    blockNumber: blockNumber
  })
})

server.get('/token-details', async (req, res) => {
  const totalSupply = await contract.methods.totalSupply().call()
  const name = await contract.methods.name().call()
  const symbol = await contract.methods.symbol().call()
  const balanceOf = await contract.methods.balanceOf(process.env.ACCOUNT).call()

  res.json({
    status: 'ok',
    name: name,
    symbol: symbol,
    totalSupply: totalSupply,
    balanceOf: balanceOf
  })
})

server.listen(port, () => {
  console.log(`Server listening at ${port}`)
})
