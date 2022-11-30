import { ethers } from "hardhat"; 
import { expect } from "chai"; 

describe("Bored Ape", () => {
   it("Should initialize Bored Ape Contract", async () => {
       const boredApeFactory = await ethers.getContractFactory("BoredApeYachtClub"); 
       const boredApeContract = await boredApeFactory.deploy(
           "Bored Ape Yacht Club", 
           "BAYC", 
           10000, 
           1
       ); 
       expect(await boredApeContract.MAX_APES()).to.equal(10000); 
   })
})