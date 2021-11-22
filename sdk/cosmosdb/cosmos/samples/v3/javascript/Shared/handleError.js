// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const path = require("path");
require("dotenv").config();

const { CosmosClient } = require("@azure/cosmos");
const key = process.env.COSMOS_KEY || "<cosmos key>";
const endpoint = process.env.COSMOS_ENDPOINT || "<cosmos endpoint>";
const dbId = process.env.COSMOS_DATABASE || "<cosmos database>";

const client = new CosmosClient({ endpoint, key });

export async function handleError(error) {
  console.log("\nAn error with code '" + error.code + "' has occurred:");
  console.log(error);
  await finish();
  process.exitCode = 1;
}

export async function finish() {
  try {
    await client.database(dbId).delete();
    console.log("\nEnd of demo.");
  } catch (err) {
    console.log(
      `Database: "${dbId}" might not have deleted properly. You might need to delete it manually.`
    );
    process.exitCode = 1;
  }
}

let currentStep = 0;
export function logStep(message) {
  currentStep++;
  console.log(`\n${currentStep}: ${message}`);
}

export function logSampleHeader(sampleName) {
  console.log("Azure Cosmos DB Node.js Samples");
  console.log("================================");
  console.log(sampleName);
  console.log("================================");
}
