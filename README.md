# 🎵 MUSE Website - musemint.io

Official landing page and token metadata host for MUSE - the music rewards platform.

---

## 📁 Files

```
musemint-website/
├── index.html          # Main landing page
├── styles.css          # All styles (dark theme, responsive)
├── script.js           # JavaScript (smooth scroll, animations)
├── metadata.json       # Solana token metadata
├── images/             # Logo and assets (create this folder)
│   └── muse-logo.png   # Upload your logo here
└── README.md           # This file
```

---

## 🚀 Upload to Porkbun

### Method 1: FTP Upload (Recommended)

1. **Get FTP Credentials from Porkbun**
   - Log into porkbun.com
   - Go to your domain (musemint.io)
   - Click "Hosting" → "FTP Information"
   - Note: Host, Username, Password

2. **Use FTP Client (FileZilla)**
   ```
   Download FileZilla: https://filezilla-project.org
   
   Connect with:
   Host: ftp.musemint.io (or provided host)
   Username: your_username
   Password: your_password
   Port: 21
   ```

3. **Upload Files**
   - Connect via FTP
   - Navigate to `public_html` folder
   - Upload all website files:
     - index.html
     - styles.css
     - script.js
     - metadata.json
     - images/ folder (create if needed)

4. **Test**
   - Visit https://musemint.io
   - Should see the MUSE landing page!

---

### Method 2: Porkbun File Manager

1. Log into porkbun.com
2. Go to your domain → Hosting → File Manager
3. Navigate to `public_html`
4. Click "Upload" and select all files
5. Done!

---

## 🔧 After Token Creation

Once you create the MUSE token with the launcher, update these files:

### 1. Update `script.js`
```javascript
// Change this line (line 15):
const MUSE_TOKEN_MINT = 'YOUR_ACTUAL_MINT_ADDRESS';

// Also update network if going to mainnet:
const SOLANA_NETWORK = 'mainnet-beta'; // or 'devnet'
```

### 2. Update `metadata.json`
```json
{
  "properties": {
    "creators": [
      {
        "address": "YOUR_WALLET_PUBLIC_KEY",
        "share": 100
      }
    ]
  }
}
```

### 3. Re-upload to Porkbun
- Just upload the updated files via FTP

---

## 🖼️ Adding Logo

### Create Logo Image

1. Create a square image (500x500px recommended)
2. Format: PNG with transparent background
3. Name it: `muse-logo.png`

### Upload Logo

1. Create `images` folder in `public_html`
2. Upload `muse-logo.png` to `images/`
3. URL will be: `https://musemint.io/images/muse-logo.png`

### Quick Logo with Text (Temporary)

If you don't have a logo yet, the site uses an SVG music icon as placeholder.

To create a simple text-based logo:
```
1. Go to https://www.canva.com
2. Create 500x500px design
3. Add text "MUSE" with green color (#00D170)
4. Add music note icon
5. Download as PNG
6. Upload to images/
```

---

## 📝 Update Content

### Change Text

Edit `index.html` to customize:
- Hero title/subtitle
- About section descriptions
- Token information
- Social media links

### Change Colors

Edit `styles.css` (lines 3-12):
```css
:root {
    --color-dark-bg: #0A0A0F;      /* Background */
    --color-surface: #1A1A24;       /* Cards */
    --color-primary: #00D170;       /* Green accent */
    --color-text-primary: #FFFFFF;  /* White text */
    --color-text-secondary: #9CA3AF; /* Gray text */
}
```

---

## 🌐 Domain Setup (If Not Done)

### Point Domain to Porkbun Hosting

1. Log into Porkbun
2. Go to musemint.io → DNS
3. Add A Record:
   ```
   Type: A
   Host: @
   Answer: [Porkbun hosting IP]
   TTL: 600
   ```
4. Add CNAME for www:
   ```
   Type: CNAME
   Host: www
   Answer: musemint.io
   TTL: 600
   ```

Wait 5-30 minutes for DNS propagation.

---

## 🔗 Important URLs

Once uploaded:

- **Website:** https://musemint.io
- **Token Metadata:** https://musemint.io/metadata.json
- **Logo:** https://musemint.io/images/muse-logo.png

Use the metadata.json URL when creating your token!

---

## ✅ Checklist

Before launching:

- [ ] Upload all files to Porkbun
- [ ] Create and upload logo image
- [ ] Test website at musemint.io
- [ ] Create MUSE token with launcher
- [ ] Update script.js with mint address
- [ ] Update metadata.json with wallet address
- [ ] Re-upload updated files
- [ ] Test metadata.json URL
- [ ] Update social media links (Twitter, Discord)
- [ ] Add SSL certificate (usually automatic with Porkbun)

---

## 🎨 Features

- ✅ Modern dark theme
- ✅ Fully responsive (mobile-friendly)
- ✅ Smooth animations
- ✅ Token metadata hosting
- ✅ SEO optimized
- ✅ Fast loading
- ✅ No dependencies (pure HTML/CSS/JS)

---

## 📱 Mobile Responsive

The site automatically adapts to:
- Desktop (1200px+)
- Tablet (768px - 1200px)
- Mobile (< 768px)

---

## 🔒 SSL Certificate

Porkbun usually provides free SSL automatically.

To enable HTTPS:
1. Porkbun dashboard → Domain → SSL
2. Enable "Auto SSL" if available
3. Wait 5-10 minutes
4. Visit https://musemint.io

---

## 🚀 Future Enhancements

Optional additions:
- [ ] Blog section
- [ ] FAQ page
- [ ] Team page
- [ ] Roadmap
- [ ] Token price chart
- [ ] Whitepaper PDF
- [ ] Press kit
- [ ] Contact form

---

## 📊 Analytics (Optional)

Add Google Analytics:

1. Get tracking ID from analytics.google.com
2. Add to `index.html` before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

---

## 🆘 Troubleshooting

### Website not loading
- Check DNS settings (may take up to 24 hours)
- Verify files are in `public_html` not a subfolder
- Check file permissions (644 for files, 755 for folders)

### Images not showing
- Make sure `images/` folder exists
- Check image file names match exactly
- Try absolute URLs: `https://musemint.io/images/muse-logo.png`

### Metadata.json 404
- Verify file is in root `public_html` folder
- Check filename is exactly `metadata.json`
- Try accessing directly: https://musemint.io/metadata.json

---

## 💡 Tips

1. **Test locally first:**
   ```bash
   # Open index.html in browser
   open index.html
   ```

2. **Compress images:**
   - Use TinyPNG.com before uploading
   - Faster load times

3. **Backup:**
   - Keep local copy of all files
   - Download from FTP regularly

---

**Ready to upload!** 🚀

Once uploaded, your MUSE website will be live at https://musemint.io!
