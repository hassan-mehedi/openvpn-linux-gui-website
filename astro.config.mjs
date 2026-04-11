import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
    server: {
        host: true,
    },
    preview: {
        host: true,
    },
    vite: {
        server: {
            allowedHosts: ["openvpn.denom.cc"],
        },
    },
    integrations: [
        starlight({
            title: "OpenVPN 3 Linux Client",
            description: "A native GTK4 GUI and CLI for OpenVPN 3 Linux — full D-Bus integration, no vendor lock-in.",
            customCss: ["./src/styles/custom.css"],
            logo: {
                src: "./src/assets/icons/app.svg",
                alt: "OpenVPN 3 Linux Client",
            },
            social: [{ icon: "github", label: "GitHub", href: "https://github.com/hassan-mehedi/openvpn-linux-client-gui" }],
            sidebar: [
                {
                    label: "Getting Started",
                    items: [
                        { label: "Requirements", slug: "docs/getting-started/requirements" },
                        { label: "Installation", slug: "docs/getting-started/installation" },
                    ],
                },
                {
                    label: "Usage",
                    items: [
                        { label: "GUI", slug: "docs/usage/gui" },
                        { label: "CLI Reference", slug: "docs/usage/cli" },
                    ],
                },
                {
                    label: "Features",
                    items: [
                        { label: "Profile Management", slug: "docs/features/profiles" },
                        { label: "Connection Lifecycle", slug: "docs/features/connection" },
                        { label: "Live Telemetry", slug: "docs/features/telemetry" },
                        { label: "Diagnostics", slug: "docs/features/diagnostics" },
                        { label: "Proxy Management", slug: "docs/features/proxy" },
                        { label: "System Tray", slug: "docs/features/tray" },
                        { label: "System Mode", slug: "docs/features/system-mode" },
                    ],
                },
                {
                    label: "Packaging",
                    items: [
                        { label: "DEB Package", slug: "docs/packaging/deb" },
                        { label: "RPM Package", slug: "docs/packaging/rpm" },
                        { label: "Repository Publishing", slug: "docs/packaging/repository" },
                    ],
                },
                {
                    label: "Reference",
                    items: [
                        { label: "Security", slug: "docs/reference/security" },
                        { label: "Architecture", slug: "docs/reference/architecture" },
                        { label: "Known Limitations", slug: "docs/reference/known-limitations" },
                    ],
                },
            ],
        }),
    ],
});
