/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CdnManagementClient } from "@azure/arm-cdn";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Retrieve protection policy with specified name within a resource group.
 *
 * @summary Retrieve protection policy with specified name within a resource group.
 * x-ms-original-file: specification/cdn/resource-manager/Microsoft.Cdn/stable/2021-06-01/examples/WafPolicyGet.json
 */
async function getPolicy() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const policyName = "MicrosoftCdnWafPolicy";
  const credential = new DefaultAzureCredential();
  const client = new CdnManagementClient(credential, subscriptionId);
  const result = await client.policies.get(resourceGroupName, policyName);
  console.log(result);
}

getPolicy().catch(console.error);