---
title: Profile Management
description: Import, search, rename, and manage OpenVPN profiles.
---

## Overview

Profiles are OpenVPN configuration files (`.ovpn`) stored and managed by the OpenVPN 3 Linux configuration service. The client never stores profile content directly.

## Importing a Profile

Three import methods are supported:

- **File** — drag and drop or browse for a `.ovpn` file
- **URL** — paste an HTTPS URL that serves a `.ovpn` file
- **Token URL** — paste an `openvpn://import-profile/...` token URL

Via CLI:
```bash
ovpn-gui profiles import-file /path/to/profile.ovpn
ovpn-gui profiles import-url https://vpn.example.com/profile.ovpn
```

## Managing Profiles

- **Search** — use the search bar to filter profiles by name
- **Rename** — click the edit icon on a profile card
- **Delete** — click the delete icon; this also removes the profile from the OpenVPN 3 configuration service

## File Association

When installed via native packages, the app registers as the default handler for `.ovpn` files and `openvpn://` URIs. Double-clicking a `.ovpn` file opens the import dialog automatically.
