---
title: Known Limitations
description: Current known limitations of the OpenVPN 3 Linux Client.
---

## D-Bus Validation Gap

The adapter layer method signatures have not yet been validated against a live OpenVPN 3 Linux installation. Run the following to perform live validation:

```bash
ovpn-gui doctor dbus-surface
```

The adapters should be treated as a typed integration draft until this validation is complete.

## No Flatpak or AppImage

Native DEB and RPM packages are the only supported distribution formats. This is intentional: the app requires deep D-Bus and desktop integration (system tray, file associations, URI handler, XDG autostart) that is difficult or impossible to provide from a sandboxed container.
