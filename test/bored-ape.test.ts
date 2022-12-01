import { ethers } from "hardhat"; 
import { expect } from "chai"; 
import { Contract } from "ethers"; 
import { beforeEach } from "mocha"; 
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

describe("Bored Ape", () => {
    let boredApeContract: Contract;  
    let owner: SignerWithAddress; 
    let address1: SignerWithAddress; 

    beforeEach( async () => {
        const boredApeFactory = await ethers.getContractFactory("BoredApeYachtClub"); 
        [owner, address1] = await ethers.getSigners(); 
        boredApeContract = await boredApeFactory.deploy(
            "Bored Ape Yacht Club", 
            "BAYC", 
            10000, 
            1
        ); 
    })

   it("Should initialize Bored Ape Contract", async () => {
       expect(await boredApeContract.MAX_APES()).to.equal(10000); 
   }); 

   it("Owner of the contract must be the one who deployed the contract", async () => {
       expect(await boredApeContract.owner()).to.equal(await owner.address); 
   }); 

//    it("Should ensure Ape price is equal to 0.08 eth", async () => {
//        expect(await boredApeContract.apePrice()).to.equal("80000000000000000"); 
//    }); 

   it("Should mint an ape", async () => {
       await boredApeContract.flipSaleState(); 
       const apePrice = await boredApeContract.apePrice(); 
       expect(await boredApeContract.mintApe(1, {value: apePrice})).to.emit(boredApeContract, "Transfer")
       .withArgs(ethers.constants.AddressZero, owner.address, 1); 
   }); 
})