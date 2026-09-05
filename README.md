# TechSeekho

A fast, static Hindi/Hinglish technology blog built with plain HTML, CSS, and JavaScript. It works on GitHub Pages without a database or build step.

## Run locally

From this project folder, run:

```powershell
node local-server.js
```

Then open [http://localhost:8000](http://localhost:8000). Use a local server instead of opening files directly so search and links behave like a real website.

## Project layout

```text
TechSeekho/
├── index.html                 # Home page
├── articles.html              # Searchable, filterable article list
├── article.html               # Article detail template
├── categories.html            # Category page
├── about.html / contact.html  # Information pages
├── privacy.html / disclaimer.html / terms.html
├── content/
│   ├── articles.js            # Edit this file to add articles
│   └── example-article.js     # Copyable article-field example
├── assets/
│   ├── css/style.css          # All styling and responsive rules
│   └── js/app.js              # Rendering, search, filters, theme
├── robots.txt
└── sitemap.xml
```

## Add your first article

1. Open `content/articles.js` and copy one whole `{ ... }` article object.
2. Paste it before the final `];`, adding a comma after the object above it.
3. Change `slug` to a unique lowercase, hyphen-separated URL name, such as `whatsapp-backup-guide`.
4. Fill in `title`, `category`, `date` (`YYYY-MM-DD`), `author`, `image`, `description`, `tags`, and the `content` heading/paragraph pairs.
5. Save, run the local server, and open `article.html?slug=your-new-slug` to test it.
6. Add its URL to `sitemap.xml` before publishing.

`content/example-article.js` shows every field in the smallest possible example. Article cards, search, category filters, related posts, and detail pages update automatically from `articles.js`.

## Add a category

Add the category label in the `categories` array near the top of `assets/js/app.js`, then use the exact same label in your article’s `category` field. Add at least one article in it and test its filter.

## Rename the website

Search the project for `TechSeekho` and replace the visible name. Also update the `name` field inside `addGlobalSchema()` in `assets/js/app.js`, page titles, the `baseUrl` constant, canonical tags, `robots.txt`, and `sitemap.xml`.

## Change images

Each article’s `image` field is its featured image. Replace it with a direct HTTPS image URL you are allowed to use, or place a compressed WebP/JPG in `assets/images/` and use a relative path such as `assets/images/my-photo.webp`. Give images meaningful alt text through the article title. The current sample images are external Unsplash image URLs; review image licensing and replace them with your own assets before a commercial launch.

## Publish on GitHub Pages

1. Create a new public GitHub repository, for example `techseekho`.
2. Replace `your-username` and `techseekho` in the `baseUrl` constant, all canonical URLs, `robots.txt`, and `sitemap.xml` with your actual GitHub username and repository name.
3. Commit and push the project.
4. In GitHub, open repository **Settings** > **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main**, folder **/(root)**, then click **Save**.
7. Wait for the deployment message. The expected URL is `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

For a repository named `YOUR-USERNAME.github.io`, the website URL instead is `https://YOUR-USERNAME.github.io/` and paths should be adjusted accordingly.

## Custom domain later

In GitHub **Settings** > **Pages**, enter your domain under **Custom domain**. Create the DNS record GitHub asks for with your domain provider, wait for verification, then enable **Enforce HTTPS**. Add a `CNAME` file containing only your domain after GitHub confirms it.

## Forms, analytics, ads, and affiliates

The contact form is intentionally UI-only and says so on-screen. To receive messages later, connect a privacy-conscious static form service such as Formspree or Netlify Forms and follow its documentation; update the privacy policy at the same time.

For analytics, add your real provider snippet only after choosing a provider and consent approach. Do not add invented IDs. A natural place is the end of `<head>` in every page (or add it via `assets/js/app.js` only when you understand the privacy implications).

Advertisement space is visibly marked in the home page. Add only clearly labelled ads or genuine affiliate disclosures; never insert fake affiliate links or earning claims.

## Before launch checklist

- Replace `your-username.github.io/techseekho` everywhere with the final public URL.
- Replace sample articles and external image URLs with reviewed, owned/licensed content.
- Add a form service only if you need email submissions.
- Add analytics only with a real ID and appropriate consent/privacy copy.
- Recheck contact details and legal pages for your business and jurisdiction.
