# TruePicks — GitHub Pages Template (Blog + Affiliate)

This is a lightweight static template designed for GitHub Pages. It supports:
- Blog articles (with Article schema)
- Affiliate reviews (with Product/ItemList schema)
- Client-side search
- Responsive, fast, and accessible design
- Simple dark/light toggle

## How to Deploy
1. Upload all files to your GitHub repo named **USERNAME.github.io** (replace USERNAME with your GitHub username).
2. Commit and push. GitHub Pages will auto-deploy to `https://USERNAME.github.io` in 1–2 minutes.
3. Edit content:
   - Home listings are powered by the JSON manifest in `index.html` (search for `content-manifest`).
   - Write new posts in `/posts/your-article.html` and reviews in `/reviews/your-review.html`.
   - Add items to the manifest with `"type": "article" | "review"`, `title`, `url`, `excerpt`, and `tags`.

## Affiliate Links
Replace all `YOUR_AFFILIATE_LINK` placeholders with your real tracking links (Amazon, Daraz, ClickBank, etc.).
Use `rel="nofollow sponsored"` on affiliate anchors to follow best practices.

## SEO Tips
- Keep titles under ~60 chars and meta descriptions under ~160 chars.
- Use one `<h1>` per page and descriptive subheadings.
- Add internal links between related articles/reviews.
- When you buy a custom domain, connect it in repo settings and reapply for AdSense if needed.

## Customize
- Colors and spacing in `/assets/style.css`
- JS behavior (search, UI) in `/assets/script.js`
