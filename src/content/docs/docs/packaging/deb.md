---
title: DEB Package
description: Building and installing the Debian/Ubuntu package for the OpenVPN 3 Linux Client.
---

## Prerequisites

Install system dependencies:

```bash
sudo apt install gir1.2-gtk-4.0 gir1.2-adw-1 gir1.2-secret-1 python3-gi python3-gi-cairo python3-dbus openvpn3-client
```

## Build and Install

```bash
make deb-build
make deb-install
```

## Uninstall

```bash
make deb-uninstall
```

## What Gets Installed

The DEB package installs:

- Python application code to the distro site-packages path
- `ovpn-gui` companion CLI on `PATH`
- `ovpn3-linux-gui` desktop launcher entry point
- Desktop file for the application menu (Network category)
- App icon
- `.ovpn` file association (`application/x-openvpn-profile`)
- `openvpn://` URI handler

## Runtime Notes

The Debian package declares `python3-gi-cairo` because the live throughput
graph is rendered through `Gtk.DrawingArea` and Cairo. It depends on
`openvpn3-client` where the distro provides it, with `openvpn3` accepted as an
alternative for upstream OpenVPN repository installs.

## Updates

Until an APT repository is published, updates are manual: download the new `.deb` from [GitHub Releases](https://github.com/hassan-mehedi/openvpn-linux-client-gui/releases) and install it over the existing package.

Once an APT repository is available, you can upgrade with:

```bash
sudo apt update && sudo apt upgrade openvpn3-client-linux
```
