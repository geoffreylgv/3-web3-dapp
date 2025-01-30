import { ethers } from "ethers";

async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const helloWorld = await HelloWorld.deploy("Hello World!");

  await helloWorld.deployed(); // Ensure the contract is deployed before proceeding

  console.log("Contract Deployed to Address:", helloWorld.address);
}

// Run the deployment script with error handling
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
