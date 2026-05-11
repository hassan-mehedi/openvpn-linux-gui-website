---
title: Live Telemetry
description: Real-time connection statistics and throughput graph.
---

## Overview

While a session is active, the **Connection Stats** panel shows live metrics updated every second:

| Metric | Description |
|---|---|
| Bytes in / out | Total bytes transferred since connect |
| Packets in / out | Total packet count |
| Latency | Round-trip time to the VPN gateway |
| Connected since | Duration of the current session |
| Throughput | Live send/receive rate graph |

## Throughput Graph

The graph plots the send and receive rate over the last 60 seconds. It is rendered directly in the GTK4 window using Cairo and updates in real time.

On Debian and Ubuntu, source or manual setups also need `python3-gi-cairo`.
Without that bridge, the graph area can stay blank and GTK may report
`cairo.Context` converter errors.

## Accessing Stats

Stats are visible in the **Profiles** tab when a connection is active, below the connected profile card. No additional configuration is required.
