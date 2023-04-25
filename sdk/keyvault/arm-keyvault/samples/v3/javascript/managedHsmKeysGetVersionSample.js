/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { KeyVaultManagementClient } = require("@azure/arm-keyvault");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets the specified version of the specified key in the specified managed HSM.
 *
 * @summary Gets the specified version of the specified key in the specified managed HSM.
 * x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/stable/2023-02-01/examples/managedHsmGetKeyVersion.json
 */
async function getAKeyVersion() {
  const subscriptionId =
    process.env["KEYVAULT_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["KEYVAULT_RESOURCE_GROUP"] || "sample-group";
  const name = "sample-managedhsm-name";
  const keyName = "sample-key-name";
  const keyVersion = "fd618d9519b74f9aae94ade66b876acc";
  const credential = new DefaultAzureCredential();
  const client = new KeyVaultManagementClient(credential, subscriptionId);
  const result = await client.managedHsmKeys.getVersion(
    resourceGroupName,
    name,
    keyName,
    keyVersion
  );
  console.log(result);
}

async function main() {
  getAKeyVersion();
}

main().catch(console.error);
