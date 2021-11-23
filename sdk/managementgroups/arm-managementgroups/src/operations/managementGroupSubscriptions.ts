/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ManagementGroupSubscriptions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ManagementGroupsAPIContext } from "../managementGroupsAPIContext";
import {
  SubscriptionUnderManagementGroup,
  ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroupNextOptionalParams,
  ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroupOptionalParams,
  ManagementGroupSubscriptionsCreateOptionalParams,
  ManagementGroupSubscriptionsCreateResponse,
  ManagementGroupSubscriptionsDeleteOptionalParams,
  ManagementGroupSubscriptionsGetSubscriptionOptionalParams,
  ManagementGroupSubscriptionsGetSubscriptionResponse,
  ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroupResponse,
  ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagementGroupSubscriptions operations. */
export class ManagementGroupSubscriptionsImpl
  implements ManagementGroupSubscriptions {
  private readonly client: ManagementGroupsAPIContext;

  /**
   * Initialize a new instance of the class ManagementGroupSubscriptions class.
   * @param client Reference to the service client
   */
  constructor(client: ManagementGroupsAPIContext) {
    this.client = client;
  }

  /**
   * Retrieves details about all subscriptions which are associated with the management group.
   *
   * @param groupId Management Group ID.
   * @param options The options parameters.
   */
  public listSubscriptionsUnderManagementGroup(
    groupId: string,
    options?: ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroupOptionalParams
  ): PagedAsyncIterableIterator<SubscriptionUnderManagementGroup> {
    const iter = this.getSubscriptionsUnderManagementGroupPagingAll(
      groupId,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getSubscriptionsUnderManagementGroupPagingPage(
          groupId,
          options
        );
      }
    };
  }

  private async *getSubscriptionsUnderManagementGroupPagingPage(
    groupId: string,
    options?: ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroupOptionalParams
  ): AsyncIterableIterator<SubscriptionUnderManagementGroup[]> {
    let result = await this._getSubscriptionsUnderManagementGroup(
      groupId,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getSubscriptionsUnderManagementGroupNext(
        groupId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getSubscriptionsUnderManagementGroupPagingAll(
    groupId: string,
    options?: ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroupOptionalParams
  ): AsyncIterableIterator<SubscriptionUnderManagementGroup> {
    for await (const page of this.getSubscriptionsUnderManagementGroupPagingPage(
      groupId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Associates existing subscription with the management group.
   *
   * @param groupId Management Group ID.
   * @param subscriptionId Subscription ID.
   * @param options The options parameters.
   */
  create(
    groupId: string,
    subscriptionId: string,
    options?: ManagementGroupSubscriptionsCreateOptionalParams
  ): Promise<ManagementGroupSubscriptionsCreateResponse> {
    return this.client.sendOperationRequest(
      { groupId, subscriptionId, options },
      createOperationSpec
    );
  }

  /**
   * De-associates subscription from the management group.
   *
   * @param groupId Management Group ID.
   * @param subscriptionId Subscription ID.
   * @param options The options parameters.
   */
  delete(
    groupId: string,
    subscriptionId: string,
    options?: ManagementGroupSubscriptionsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { groupId, subscriptionId, options },
      deleteOperationSpec
    );
  }

  /**
   * Retrieves details about given subscription which is associated with the management group.
   *
   * @param groupId Management Group ID.
   * @param subscriptionId Subscription ID.
   * @param options The options parameters.
   */
  getSubscription(
    groupId: string,
    subscriptionId: string,
    options?: ManagementGroupSubscriptionsGetSubscriptionOptionalParams
  ): Promise<ManagementGroupSubscriptionsGetSubscriptionResponse> {
    return this.client.sendOperationRequest(
      { groupId, subscriptionId, options },
      getSubscriptionOperationSpec
    );
  }

  /**
   * Retrieves details about all subscriptions which are associated with the management group.
   *
   * @param groupId Management Group ID.
   * @param options The options parameters.
   */
  private _getSubscriptionsUnderManagementGroup(
    groupId: string,
    options?: ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroupOptionalParams
  ): Promise<
    ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroupResponse
  > {
    return this.client.sendOperationRequest(
      { groupId, options },
      getSubscriptionsUnderManagementGroupOperationSpec
    );
  }

  /**
   * GetSubscriptionsUnderManagementGroupNext
   * @param groupId Management Group ID.
   * @param nextLink The nextLink from the previous successful call to the
   *                 GetSubscriptionsUnderManagementGroup method.
   * @param options The options parameters.
   */
  private _getSubscriptionsUnderManagementGroupNext(
    groupId: string,
    nextLink: string,
    options?: ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroupNextOptionalParams
  ): Promise<
    ManagementGroupSubscriptionsGetSubscriptionsUnderManagementGroupNextResponse
  > {
    return this.client.sendOperationRequest(
      { groupId, nextLink, options },
      getSubscriptionsUnderManagementGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{groupId}/subscriptions/{subscriptionId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionUnderManagementGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.cacheControl],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{groupId}/subscriptions/{subscriptionId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.cacheControl],
  serializer
};
const getSubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{groupId}/subscriptions/{subscriptionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionUnderManagementGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.cacheControl],
  serializer
};
const getSubscriptionsUnderManagementGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{groupId}/subscriptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListSubscriptionUnderManagementGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skiptoken],
  urlParameters: [Parameters.$host, Parameters.groupId],
  headerParameters: [Parameters.accept],
  serializer
};
const getSubscriptionsUnderManagementGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListSubscriptionUnderManagementGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skiptoken],
  urlParameters: [Parameters.$host, Parameters.groupId, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
