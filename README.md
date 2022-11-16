# FEVM-Dapp-Starter-Kit

### Clone the project
```bash
  git clone https://github.com/rk-rishikesh/FEVM-Dapp-Starter-Kit.git
```
### Install node modules
```bash
  cd FEVM-Dapp-Starter-Kit
  npm install
```
### Update the private key
Add your deployment account private key in hardhat config file.

### Compile the Smart Contracts
```bash
  npx hardhat compile
```
### Fund deployment account
Deposit some tFIL to your deployment account from wallaby faucet - https://wallaby.network/

### Deploy the Smart Contracts on Wallaby Testnet
```bash
  npx hardhat deploy
```

> Note the contract address and locate the contract ABI under deployments folder and replace it inside the contants file under client folder.

### Install node modules inside client folder
```bash
  cd client
  npm install
```

### To deploy this project run

```bash
  npm run start
```
