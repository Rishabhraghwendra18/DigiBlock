// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    address payable owner;
    uint8 tokenDiscountValue;

    constructor(address payable _owner,string memory _tokenName,string memory _tokenSymbol) ERC20(_tokenName,_tokenSymbol) {
        owner = _owner;
        _mint(owner,1000*10**18);
    }

    modifier onlyOwner {
        require(owner == msg.sender,"Only owner allowed");
        _;
    }

    function transfer(address _to, uint256 _value) public virtual override onlyOwner returns(bool) {
        super.transfer(_to,_value);
    }
    function transferFrom(address _from, uint256 _value) public returns(bool) {
        super.transferFrom(_from,address(this),_value);
    }
    function setDiscountValue(uint8 _tokenDiscountValue) public onlyOwner{
        tokenDiscountValue = _tokenDiscountValue;
    }
    function getDiscountValue() public view returns (uint8) {
        return tokenDiscountValue;
    }
}