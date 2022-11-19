export const CONTRACT_ADDRESS = "0x34c81c0B16D7BD97384663dc21D5903EE03a80D2"

export const CONTRACT_ABI = [
  {
    "inputs": [],
    "name": "getNotice",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_notice",
        "type": "string"
      }
    ],
    "name": "getUserByNotice",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_notice",
        "type": "string"
      }
    ],
    "name": "setNotice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
