/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import { TokenCredential } from "@azure/core-auth";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { ComputeManagementClientContext } from "./computeManagementClientContext";


class ComputeManagementClient extends ComputeManagementClientContext {
  // Operation groups
  operations: operations.Operations;
  availabilitySets: operations.AvailabilitySets;
  proximityPlacementGroups: operations.ProximityPlacementGroups;
  dedicatedHostGroups: operations.DedicatedHostGroups;
  dedicatedHosts: operations.DedicatedHosts;
  sshPublicKeys: operations.SshPublicKeys;
  virtualMachineExtensionImages: operations.VirtualMachineExtensionImages;
  virtualMachineExtensions: operations.VirtualMachineExtensions;
  virtualMachineImages: operations.VirtualMachineImages;
  virtualMachineImagesEdgeZone: operations.VirtualMachineImagesEdgeZone;
  usage: operations.UsageOperations;
  virtualMachines: operations.VirtualMachines;
  virtualMachineScaleSets: operations.VirtualMachineScaleSets;
  virtualMachineSizes: operations.VirtualMachineSizes;
  images: operations.Images;
  virtualMachineScaleSetExtensions: operations.VirtualMachineScaleSetExtensions;
  virtualMachineScaleSetRollingUpgrades: operations.VirtualMachineScaleSetRollingUpgrades;
  virtualMachineScaleSetVMExtensions: operations.VirtualMachineScaleSetVMExtensions;
  virtualMachineScaleSetVMs: operations.VirtualMachineScaleSetVMs;
  logAnalytics: operations.LogAnalytics;
  virtualMachineRunCommands: operations.VirtualMachineRunCommands;
  virtualMachineScaleSetVMRunCommands: operations.VirtualMachineScaleSetVMRunCommands;
  resourceSkus: operations.ResourceSkus;
  disks: operations.Disks;
  snapshots: operations.Snapshots;
  diskEncryptionSets: operations.DiskEncryptionSets;
  diskAccesses: operations.DiskAccesses;
  diskRestorePoint: operations.DiskRestorePointOperations;
  galleries: operations.Galleries;
  galleryImages: operations.GalleryImages;
  galleryImageVersions: operations.GalleryImageVersions;
  galleryApplications: operations.GalleryApplications;
  galleryApplicationVersions: operations.GalleryApplicationVersions;
  cloudServiceRoleInstances: operations.CloudServiceRoleInstances;
  cloudServiceRoles: operations.CloudServiceRoles;
  cloudServices: operations.CloudServices;
  cloudServicesUpdateDomain: operations.CloudServicesUpdateDomain;
  cloudServiceOperatingSystems: operations.CloudServiceOperatingSystems;

  /**
   * Initializes a new instance of the ComputeManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials
   * implementing the TokenCredential interface from the @azure/identity package are recommended. For
   * more information about these credentials, see
   * {@link https://www.npmjs.com/package/@azure/identity}. Credentials implementing the
   * ServiceClientCredentials interface from the older packages @azure/ms-rest-nodeauth and
   * @azure/ms-rest-browserauth are also supported.
   * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, subscriptionId: string, options?: Models.ComputeManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.availabilitySets = new operations.AvailabilitySets(this);
    this.proximityPlacementGroups = new operations.ProximityPlacementGroups(this);
    this.dedicatedHostGroups = new operations.DedicatedHostGroups(this);
    this.dedicatedHosts = new operations.DedicatedHosts(this);
    this.sshPublicKeys = new operations.SshPublicKeys(this);
    this.virtualMachineExtensionImages = new operations.VirtualMachineExtensionImages(this);
    this.virtualMachineExtensions = new operations.VirtualMachineExtensions(this);
    this.virtualMachineImages = new operations.VirtualMachineImages(this);
    this.virtualMachineImagesEdgeZone = new operations.VirtualMachineImagesEdgeZone(this);
    this.usage = new operations.UsageOperations(this);
    this.virtualMachines = new operations.VirtualMachines(this);
    this.virtualMachineScaleSets = new operations.VirtualMachineScaleSets(this);
    this.virtualMachineSizes = new operations.VirtualMachineSizes(this);
    this.images = new operations.Images(this);
    this.virtualMachineScaleSetExtensions = new operations.VirtualMachineScaleSetExtensions(this);
    this.virtualMachineScaleSetRollingUpgrades = new operations.VirtualMachineScaleSetRollingUpgrades(this);
    this.virtualMachineScaleSetVMExtensions = new operations.VirtualMachineScaleSetVMExtensions(this);
    this.virtualMachineScaleSetVMs = new operations.VirtualMachineScaleSetVMs(this);
    this.logAnalytics = new operations.LogAnalytics(this);
    this.virtualMachineRunCommands = new operations.VirtualMachineRunCommands(this);
    this.virtualMachineScaleSetVMRunCommands = new operations.VirtualMachineScaleSetVMRunCommands(this);
    this.resourceSkus = new operations.ResourceSkus(this);
    this.disks = new operations.Disks(this);
    this.snapshots = new operations.Snapshots(this);
    this.diskEncryptionSets = new operations.DiskEncryptionSets(this);
    this.diskAccesses = new operations.DiskAccesses(this);
    this.diskRestorePoint = new operations.DiskRestorePointOperations(this);
    this.galleries = new operations.Galleries(this);
    this.galleryImages = new operations.GalleryImages(this);
    this.galleryImageVersions = new operations.GalleryImageVersions(this);
    this.galleryApplications = new operations.GalleryApplications(this);
    this.galleryApplicationVersions = new operations.GalleryApplicationVersions(this);
    this.cloudServiceRoleInstances = new operations.CloudServiceRoleInstances(this);
    this.cloudServiceRoles = new operations.CloudServiceRoles(this);
    this.cloudServices = new operations.CloudServices(this);
    this.cloudServicesUpdateDomain = new operations.CloudServicesUpdateDomain(this);
    this.cloudServiceOperatingSystems = new operations.CloudServiceOperatingSystems(this);
  }
}

// Operation Specifications

export {
  ComputeManagementClient,
  ComputeManagementClientContext,
  Models as ComputeManagementModels,
  Mappers as ComputeManagementMappers
};
export * from "./operations";
