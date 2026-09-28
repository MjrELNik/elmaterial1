# Company Device Catalog

This is a lightweight online catalog app for a small company with five employees. It is designed to be quick to maintain, mobile-friendly, and free to host.

## Features

- Main category and subcategory filtering
- Search by product name or part number
- Copyable product numbers for order entry
- Manufacturer links for sourcing and verification
- Product image cards using built-in SVG artwork
- Runs without a database or custom domain

## Open locally

The simplest local option is to use VS Code Live Server:

1. Open the folder in VS Code
2. Install the Live Server extension
3. Right-click the file index.html
4. Choose Open with Live Server

You can also run a quick Python server if available:

```bash
cd c:\Users\Niggalas\company-catalog-app
python -m http.server 8000
```

Then open http://localhost:8000

## Free online hosting

Use GitHub Pages or Vercel to publish the app without buying a domain:

1. Push this project to GitHub
2. Open Settings → Pages
3. Enable GitHub Pages for the main branch
4. Use the generated free URL

This is the best option for a small team that needs access from anywhere.
