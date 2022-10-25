export const CONTRACT_ADDRESS = "0x781A22690202852B38b1249DA42fBf842A48535E"

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
