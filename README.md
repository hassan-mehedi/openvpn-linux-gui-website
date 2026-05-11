# OpenVPN 3 Linux Client Website

Marketing site and documentation portal for the OpenVPN 3 Linux Client GUI.

The site is built with Astro and Starlight and contains:

- the landing page
- product screenshots
- getting-started guides
- packaging and tray integration notes
- reference documentation for the desktop client

## Development

Run all commands from the repo root:

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local dev server |
| `npm run build` | Build the production site |
| `npm run preview` | Preview the built site locally |

## Content Layout

```text
src/
  components/      Landing page sections
  content/docs/    Starlight documentation pages
  pages/           Astro routes such as the homepage
  styles/          Shared custom theme overrides
  assets/          Screenshots and icons
```

## Notes

- Update the landing page install commands when the main installer flow changes.
- Keep Debian and Ubuntu docs aligned with the app package metadata, especially GTK and Cairo bridge requirements.
- Screenshot content should match the current desktop UI before publishing.
