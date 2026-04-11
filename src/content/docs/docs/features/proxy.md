---
title: Proxy Management
description: Configure and assign HTTP or SOCKS proxies for VPN connections.
---

## Overview

The client supports routing VPN connections through a saved HTTP or SOCKS proxy. Proxies are stored in the app's settings and can be assigned per profile or overridden at connect time.

## Adding a Proxy

In **Settings → Proxies**, click **Add Proxy**:

| Field | Description |
|---|---|
| Name | A friendly label for the proxy |
| Type | `http` or `socks5` |
| Host | Proxy hostname or IP |
| Port | Proxy port |
| Authentication | Optional username/password |

Via CLI:
```bash
ovpn-gui proxies add --name "Corp Proxy" --type http --host proxy.corp.com --port 8080
ovpn-gui proxies list
```

## Assigning a Proxy to a Profile

In the profile details dialog, select a proxy from the **Assigned Proxy** dropdown.

Via CLI:
```bash
ovpn-gui profiles assign-proxy PROFILE_ID PROXY_ID
```

## Connect-Time Override

```bash
ovpn-gui sessions connect PROFILE_ID --proxy PROXY_ID
```
