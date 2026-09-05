# TETTEH static mirror

This directory is a plain static export of the MIT-licensed TETTEH template by Andrei Alba.

## Technology

- HTML5
- CSS
- Vanilla JavaScript
- Self-hosted WOFF2 fonts and local images

There is no package manager, framework runtime, build step, or server-side dependency.

## AWS S3 deployment

Upload the contents of this directory to the root of an S3 bucket configured for static website hosting. Use `index.html` as the index document and `404.html` as the error document.

Directory-style routes such as `/catalog/`, `/about/`, `/cart/`, and `/products/oken-stool/` each contain their own `index.html`.

The copied demo retains the upstream placeholder branding, catalogue content, email addresses, and metadata URLs. Replace those before using it as a production business site.

See `LICENSE` for the MIT license and `UPSTREAM_README.md` for the original project documentation.
