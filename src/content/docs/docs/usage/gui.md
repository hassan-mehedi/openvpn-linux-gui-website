---
title: GUI Usage
description: How to launch and use the OpenVPN 3 Linux Client graphical interface.
---

## Launching the GUI

```bash
ovpn3-linux-gui
```

Or find **OpenVPN Connect** in your desktop application menu (Network category).

## Main Tabs

The main window has three tabs:

- **Profiles** — import and manage VPN profiles, connect and disconnect
- **Settings** — configure protocol, timeout, launch behavior, theme, and more
- **Diagnostics** — run service checks and export support bundles

## Connecting

1. Click the **+** button to import a profile (file, URL, or token URL).
2. Toggle the switch next to a profile to connect.
3. The header changes to **CONNECTED** and live connection stats appear below the profile.

## Disconnecting

Click **Disconnect** in the profile row, or toggle the switch off. A confirmation dialog will appear if you have "Disconnect confirmation" enabled in Settings.

## Close Behavior

If **Close to system tray** is enabled in Settings, closing the window keeps the app running in the background. Reopen it from the system tray icon, your launcher, or the desktop notification.
