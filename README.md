# Express-Backend-API-in-Blockchain

## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
`$ npm install`

### 3. Start frontend
`$ npm run start`

## Test

### 1. http://localhost:4000/heartbeat
```
{
    "status": "ok"
}
```

### 2. http://localhost:4000/block-number
```
{
    "status": "ok",
    "blockNumber": 26622376
}
```

### 3. http://localhost:4000/token-details
```
{
    "status": "ok",
    "name": "Alley Cat Gang",
    "symbol": "ACG",
    "totalSupply": "21",
    "balanceOf": "5"
}
```