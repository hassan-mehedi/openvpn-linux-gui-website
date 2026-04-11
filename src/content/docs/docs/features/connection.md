---
title: Connection Lifecycle
description: How the OpenVPN 3 Linux Client manages connection state.
---

## State Machine

The client uses a formal state machine to manage each session. Valid states are:

`DISCONNECTED` → `CONNECTING` → `CONNECTED` → `PAUSED` → `RESUMING` → `CONNECTED`

Disconnecting returns to `DISCONNECTED`. Failed connections move to `DISCONNECTED` with an error message.

## Actions

| Action | GUI | CLI |
|---|---|---|
| Connect | Toggle switch on profile | `ovpn-gui sessions connect PROFILE_ID` |
| Disconnect | Disconnect button or toggle off | `ovpn-gui sessions disconnect SESSION_ID` |
| Pause | — | `ovpn-gui sessions pause SESSION_ID` |
| Resume | — | `ovpn-gui sessions resume SESSION_ID` |

## Credential Handling

Username/password, OTP/MFA, and passphrase prompts are driven by D-Bus attention events from the OpenVPN 3 backend. The GUI surfaces these as dialogs automatically.

**Saved passwords:** enable "Save password" on the credential prompt to store credentials in the system keyring via libsecret. The next connection auto-submits them.

## Launch Behavior

Configure what happens when the app starts in **Settings → Connection Defaults → Launch behavior**:

- `Start app only` — open the window, do nothing
- `Connect to latest` — connect to the most recently used profile
- `Restore last connection` — reconnect to whichever profile was connected when the app last closed
