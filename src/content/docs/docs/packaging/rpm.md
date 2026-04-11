---
title: RPM Package
description: Building and installing the Fedora/RPM package for the OpenVPN 3 Linux Client.
---

## Prerequisites

Install system dependencies and build tools:

```bash
# Runtime dependencies
sudo dnf install python3-gobject gtk4 libadwaita python3-dbus libsecret openvpn3-client

# Build dependencies (one-time)
sudo dnf install python3-build rpm-build pyproject-rpm-macros python3-devel python3-setuptools python3-wheel
```

## Build and Install

```bash
make rpm-build
make rpm-install
```

## Reinstall After Rebuilding

```bash
make rpm-reinstall
```

## Uninstall

```bash
make rpm-uninstall
```

## What Gets Installed

The RPM package installs:

- Python application code to the distro site-packages path
- `ovpn-gui` companion CLI on `PATH`
- `ovpn3-linux-gui` desktop launcher entry point
- Desktop file for the application menu (Network category)
- App icon
- `.ovpn` file association (`application/x-openvpn-profile`)
- `openvpn://` URI handler

## Updates

Until a COPR repository is published, updates are manual: download the new `.rpm` from [GitHub Releases](https://github.com/hassan-mehedi/openvpn-linux-client-gui/releases) and install it over the existing package.

Once a Fedora COPR repository is available, you can upgrade with:

```bash
sudo dnf update openvpn3-client-linux
```
