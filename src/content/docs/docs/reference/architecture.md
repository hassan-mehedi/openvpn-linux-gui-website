---
title: Architecture
description: Technical architecture of the OpenVPN 3 Linux Client.
---

## Overview

```
┌─────────────────────────────────────┐
│  GTK4 + libadwaita UI              │
│  (Profiles, Settings, Diagnostics)  │
├─────────────────────────────────────┤
│  Core Services                      │
│  state machine, settings, secrets,  │
│  onboarding, proxies, diagnostics,  │
│  telemetry, catalog, autostart      │
├─────────────────────────────────────┤
│  OpenVPN 3 D-Bus Adapter Layer      │
│  configuration, session, attention, │
│  log, backend, netcfg, introspect   │
├─────────────────────────────────────┤
│  OpenVPN 3 Linux D-Bus Services     │
└─────────────────────────────────────┘
```

## Layers

- **UI layer** (`src/app/`) — GTK4 windows, dialogs, and widgets
- **Core layer** (`src/core/`) — business logic, state machine, settings, secrets, diagnostics
- **Adapter layer** (`src/openvpn3/`) — typed D-Bus client wrapping OpenVPN 3 Linux services
- **CLI** (`src/cli/`) — companion CLI using the same core services

The GUI and CLI share the same `ServiceContainer` (dependency injection in `core/bootstrap.py`), so behavior is identical across both interfaces.

## Key Design Decisions

- **No shell-out to `openvpn3` CLI** — all operations go through typed D-Bus adapters
- **Shared service layer** — GUI and CLI use the same `ServiceContainer`, ensuring consistency
- **Formal state machine** — connection lifecycle is modeled explicitly, preventing invalid state transitions
