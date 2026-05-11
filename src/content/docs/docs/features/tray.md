---
title: System Tray
description: Background mode and system tray integration.
---

## Overview

When **Close to system tray** is enabled in **Settings → Presentation**, closing the main window keeps the app running in the background instead of terminating it.

## Tray Icon

The app uses the Linux **StatusNotifierItem** protocol. Whether a visible tray icon appears depends on the desktop environment.

Packaged installs expose the branded application icon through the desktop icon
theme. Source runs may fall back to a generic VPN icon if the branded icon is
not installed system-wide.

## Support Matrix

### Verified

| Environment | Notes |
|---|---|
| Fedora 43 / GNOME 49.5 | Requires `gnome-shell-extension-appindicator` |

Install and enable on GNOME:
```bash
sudo dnf install gnome-shell-extension-appindicator   # Fedora
sudo apt install gnome-shell-extension-appindicator   # Ubuntu/Debian
gnome-extensions enable appindicatorsupport@rgcjonas.gmail.com
```

### Expected to Work

- Fedora KDE Plasma — no extra package needed
- Fedora Xfce — add the Notification Area panel item if needed
- Ubuntu / Debian GNOME — same extension as above
- Ubuntu / Debian KDE Plasma — no extra package needed
- Cinnamon / MATE — verify panel has notification area applet

### Unsupported / Limited

- GNOME without AppIndicator extension — app stays in background but no tray icon; reopen via launcher or notification
- Tiling WMs without a StatusNotifier host — background mode only

## Troubleshooting

1. Enable **Close to system tray** in Settings.
2. Verify your desktop has a StatusNotifier-compatible tray host.
3. For GNOME: `gnome-extensions list --enabled | grep appindicator`
4. Restart the app after enabling the extension.
