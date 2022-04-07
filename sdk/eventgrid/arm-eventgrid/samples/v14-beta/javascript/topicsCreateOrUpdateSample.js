/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Asynchronously creates a new topic with the specified parameters.
 *
 * @summary Asynchronously creates a new topic with the specified parameters.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2021-10-15-preview/examples/Topics_CreateOrUpdate.json
 */
async function topicsCreateOrUpdate() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = "examplerg";
  const topicName = "exampletopic1";
  const topicInfo = {
    inboundIpRules: [
      { action: "Allow", ipMask: "12.18.30.15" },
      { action: "Allow", ipMask: "12.18.176.1" },
    ],
    location: "westus2",
    publicNetworkAccess: "Enabled",
    tags: { tag1: "value1", tag2: "value2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.topics.beginCreateOrUpdateAndWait(
    resourceGroupName,
    topicName,
    topicInfo
  );
  console.log(result);
}

topicsCreateOrUpdate().catch(console.error);

/**
 * This sample demonstrates how to Asynchronously creates a new topic with the specified parameters.
 *
 * @summary Asynchronously creates a new topic with the specified parameters.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2021-10-15-preview/examples/Topics_CreateOrUpdateForAzureArc.json
 */
async function topicsCreateOrUpdateForAzureArc() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = "examplerg";
  const topicName = "exampletopic1";
  const topicInfo = {
    extendedLocation: {
      name: "/subscriptions/5b4b650e-28b9-4790-b3ab-ddbd88d727c4/resourcegroups/examplerg/providers/Microsoft.ExtendedLocation/CustomLocations/exampleCustomLocation",
      type: "CustomLocation",
    },
    inputSchema: "CloudEventSchemaV1_0",
    kind: "AzureArc",
    location: "westus2",
    tags: { tag1: "value1", tag2: "value2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.topics.beginCreateOrUpdateAndWait(
    resourceGroupName,
    topicName,
    topicInfo
  );
  console.log(result);
}

topicsCreateOrUpdateForAzureArc().catch(console.error);