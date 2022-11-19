// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.12;

import './Token.sol';

contract TokenFactory {
    mapping (address => address) userToToken;
    function deployToken(string memory _tokenName, string memory _tokenSymbol) public returns (address) {
        require(msg.sender != address(0),"Address 0 not allowed");
        Token token= new Token(payable(msg.sender),_tokenName, _tokenSymbol);
        userToToken[msg.sender]= address(token);
        return address(token);
    }
    function getTokenAddressOfUser() public view returns (address) {
        require(userToToken[msg.sender] != address(0),"User don't have any Token contract");
        return userToToken[msg.sender];
    }
}