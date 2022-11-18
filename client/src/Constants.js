export const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS_HERE"

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
