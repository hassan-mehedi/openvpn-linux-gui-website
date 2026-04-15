---
title: Repository Publishing
description: Setting up APT and RPM repositories for automatic package-manager updates.
---

## Overview

GitHub Releases already publish DEB and RPM artifacts automatically on every stable tag. To enable `apt upgrade` and `dnf update` flows, those artifacts need to be published through package repositories.

## Fedora — COPR

COPR is the easiest path for Fedora users.

1. Create a COPR project named `openvpn3-client-linux`.
2. Point it at the RPM packaging source.
3. Configure GitHub Actions to trigger a COPR build after each stable release tag.

Once published, users enable the repo once:

```bash
sudo dnf copr enable <owner>/openvpn3-client-linux
sudo dnf install openvpn3-client-linux
```

After that, updates arrive through normal `dnf update` flows.

## Debian / Ubuntu — APT Repository

A signed APT repository is required for `apt upgrade` to work.

Suggested install flow once the repository is live:

```bash
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://<your-domain>/openvpn3-client-linux.asc \
  | sudo tee /etc/apt/keyrings/openvpn3-client-linux.asc >/dev/null
echo "deb [signed-by=/etc/apt/keyrings/openvpn3-client-linux.asc] \
  https://<your-domain>/apt stable main" \
  | sudo tee /etc/apt/sources.list.d/openvpn3-client-linux.list >/dev/null
sudo apt update
sudo apt install openvpn3-client-linux
```

Tools for generating a signed APT repository: `aptly` or `reprepro`. Host the repository contents on GitHub Pages or any static HTTPS host.

## Recommended Rollout Order

1. Keep GitHub snapshot prereleases on `main` as-is.
2. Use the stable tag-based release workflow for versions you want users to upgrade to.
3. Publish a Fedora COPR project.
4. Publish a signed APT repository.
5. Update `install.sh` to add the repository and install from it instead of downloading GitHub release assets directly.

## AppStream Integration

The package ships AppStream metainfo at `/usr/share/metainfo/com.openvpn3.clientlinux.metainfo.xml`, which lets GNOME Software, KDE Discover, and other software centers display the app name, description, and release notes. Software centers still need APT or RPM repository metadata to discover new versions.
