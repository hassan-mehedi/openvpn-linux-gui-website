---
title: CLI Reference
description: Complete reference for the ovpn-gui companion CLI.
---

The companion CLI (`ovpn-gui`) shares the same service layer as the GUI. All commands support `--json` for machine-readable output.

## Profile Management

```bash
ovpn-gui profiles list
ovpn-gui profiles import-file /path/to/profile.ovpn
ovpn-gui profiles import-url https://vpn.example.com/profile.ovpn
ovpn-gui profiles rename PROFILE_ID "My VPN"
ovpn-gui profiles remove PROFILE_ID
```

## Sessions

```bash
ovpn-gui sessions connect PROFILE_ID
ovpn-gui sessions status SESSION_ID
ovpn-gui sessions pause SESSION_ID
ovpn-gui sessions resume SESSION_ID
ovpn-gui sessions disconnect SESSION_ID
```

## Settings

```bash
ovpn-gui settings list
ovpn-gui settings set protocol tcp
ovpn-gui settings set launch_behavior restore-connection
```

## Proxy Management

```bash
ovpn-gui proxies list
ovpn-gui proxies add --name "Corp Proxy" --type http --host proxy.corp.com --port 8080
ovpn-gui profiles assign-proxy PROFILE_ID PROXY_ID
```

## Diagnostics

```bash
ovpn-gui doctor
ovpn-gui doctor logs
ovpn-gui doctor export
ovpn-gui doctor dbus-surface
```
