import { LensRendererExtension } from "@k8slens/extensions";
import { MetricsFeature } from "./src/metrics-feature";
import React from "react";

export default class ClusterMetricsFeatureExtension extends LensRendererExtension {
  clusterFeatures = [
    {
      title: "Metrics Stack",
      components: {
        Description: () => (
          <span>
            Enable timeseries data visualization (Prometheus stack) for your cluster.
            Install this only if you don&apos;t have existing Prometheus stack installed.
            You can see preview of manifests <a href="https://github.com/lensapp/lens/tree/master/extensions/metrics-cluster-feature/resources" rel="noreferrer" target="_blank">here</a>.
          </span>
        )
      },
      feature: new MetricsFeature()
    }
  ];
}
