---
title: Installation
description: How to install the OpenVPN 3 Linux Client GUI.
---

## Quick Install (Recommended)

```bash
curl -fsSL https://raw.githubusercontent.com/hassan-mehedi/openvpn-linux-client-gui/main/install.sh | bash
```

This detects the current distro and version, fetches the latest stable DEB or RPM release from GitHub, prefers distro-native OpenVPN 3 packages on Debian-family systems, falls back to the OpenVPN repository only when needed, and installs the package with the native package manager.

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
uv venv --system-site-packages
uv sync --dev
uv run ovpn3-linux-gui
```

`--system-site-packages` is recommended for development because GTK and
PyGObject bindings such as `python3-gi` and `python3-gi-cairo` are typically
installed by the distro package manager rather than by `uv`.
