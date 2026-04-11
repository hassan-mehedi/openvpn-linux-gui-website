---
title: Installation
description: How to install the OpenVPN 3 Linux Client GUI.
---

## Quick Install (Recommended)

```bash
curl -fsSL https://raw.githubusercontent.com/hassan-mehedi/openvpn-linux-client-gui/main/install.sh | bash
```

This automatically detects your distro, installs OpenVPN 3 Linux if needed, then builds and installs the package.

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
