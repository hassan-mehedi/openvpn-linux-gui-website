---
title: System Mode
description: Boot-time and unattended VPN connections via systemd and polkit.
---

## Overview

For unattended or boot-time VPN connections, optional systemd and polkit assets are provided in `packaging/systemd/` and `packaging/polkit/`. These are **not installed by default**.

## Use Cases

- Connecting to a VPN automatically at boot before the user logs in
- Running a persistent VPN connection as a systemd user service
- Granting a non-root user elevated privileges for network configuration via polkit

## Setup

See the `README.md` files in `packaging/systemd/` and `packaging/polkit/` within the source repository for installation instructions.

:::caution
System mode requires careful polkit policy configuration. Granting overly broad privileges is a security risk. Read the [Security](/docs/reference/security/) page before enabling this feature.
:::
