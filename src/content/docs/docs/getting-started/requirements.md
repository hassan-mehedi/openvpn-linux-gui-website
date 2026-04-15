---
title: Requirements
description: System requirements for the OpenVPN 3 Linux Client GUI.
---

## System Requirements

- **Python** 3.10 or later
- **[OpenVPN 3 Linux](https://github.com/OpenVPN/openvpn3-linux)** installed and running
- **GTK4** and **libadwaita**
- **PyGObject** (`python3-gi`)
- `python3-dbus`
- `libsecret` (`gir1.2-secret-1`)

### Fedora

```bash
sudo dnf install python3-gobject gtk4 libadwaita python3-dbus libsecret openvpn3-client
```

### Ubuntu / Debian

```bash
sudo apt install gir1.2-gtk-4.0 gir1.2-adw-1 gir1.2-secret-1 python3-gi python3-dbus openvpn3
```
