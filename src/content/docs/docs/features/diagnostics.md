---
title: Diagnostics
description: Service checks, guided recovery, and support bundle export.
---

## Overview

The **Diagnostics** tab (and `ovpn-gui doctor` CLI command) provides tools for checking the health of the OpenVPN 3 Linux D-Bus services and troubleshooting connection problems.

## Service Reachability Check

Verifies that each OpenVPN 3 D-Bus service is running and responding:
- Configuration service
- Session manager
- Network configuration service
- Backend process manager

```bash
ovpn-gui doctor
```

## D-Bus Surface Validation

Validates that the adapter layer method signatures match what the live OpenVPN 3 installation actually exposes:

```bash
ovpn-gui doctor dbus-surface
```

## Log Inspection

```bash
ovpn-gui doctor logs
```

## Support Bundle Export

Exports a redacted bundle (no secrets, no profile content) containing service status, recent logs, environment information, and app settings.

```bash
ovpn-gui doctor export
```

The bundle is written to the current directory as a `.tar.gz` file.
