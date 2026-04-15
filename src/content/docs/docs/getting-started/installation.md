---
title: Installation
description: How to install the OpenVPN 3 Linux Client GUI.
---

## Quick Install (Recommended)

```bash
curl -fsSL https://raw.githubusercontent.com/hassan-mehedi/openvpn-linux-client-gui/main/install.sh | bash
```

This detects the current distro and version, fetches the latest stable DEB or RPM release from GitHub, bootstraps the OpenVPN 3 repository on Debian-family systems when needed, and installs the package with the native package manager.

## DEB Package (Debian / Ubuntu)

```bash
make deb-build
make deb-install

# Uninstall
make deb-uninstall
```

## RPM Package (Fedora)

```bash
# Install build dependencies (one-time)
sudo dnf install python3-build rpm-build pyproject-rpm-macros python3-devel python3-setuptools python3-wheel

# Build and install
make rpm-build
make rpm-install

# Reinstall after rebuilding
make rpm-reinstall

# Uninstall
make rpm-uninstall
```

## From Source (Development)

```bash
git clone https://github.com/hassan-mehedi/openvpn-linux-client-gui.git
cd openvpn3-client-linux
uv sync --dev
```
