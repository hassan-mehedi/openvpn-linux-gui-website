---
title: Security
description: Security model and considerations for the OpenVPN 3 Linux Client.
---

## Security Model

The following security properties are enforced by the client:

- **Import URL validation** — profile import URLs are validated before use
- **Token URL redaction** — onboarding token URLs are redacted in previews and diagnostics
- **Proxy credential isolation** — proxy credentials are never written to plain-text metadata files
- **Saved password isolation** — profile passwords saved to the keyring are never written to plain-text metadata files
- **Redacted support bundles** — the diagnostics export redacts common secret patterns before writing the bundle
- **Secret store abstraction** — all secret handling is isolated behind a dedicated store interface backed by libsecret

libsecret integration is explicit: if the system keyring is unavailable, the client fails explicitly rather than silently falling back to plain-text storage.

## Privilege Model

The desktop GUI runs as a normal user. Privileged operations (network configuration, connection management) are handled by the OpenVPN 3 Linux D-Bus services, which run under their own service accounts.

The optional polkit policy in `packaging/polkit/` defines specific privileged actions for system mode use. The GUI itself does not acquire elevated privileges through package scripts or setuid helpers.

## Reporting Issues

Please report security issues through [GitHub Issues](https://github.com/hassan-mehedi/openvpn-linux-client-gui/issues) or via private contact with the maintainer.
