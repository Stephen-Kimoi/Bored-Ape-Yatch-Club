import { task } from 'hardhat/config'; 
import "@nomiclabs/hardhat-waffle"; 

task("accounts","prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners(); 
  
  for (const account of accounts){
    console.log(account.address); 
  }
})

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
};
