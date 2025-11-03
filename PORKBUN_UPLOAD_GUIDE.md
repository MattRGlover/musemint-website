# 📤 Quick Upload Guide - Porkbun

## 5-Minute Upload Process

### Step 1: Prepare Files ✅
You already have these files ready to upload:
```
✅ index.html
✅ styles.css
✅ script.js
✅ metadata.json
✅ README.md
```

---

### Step 2: Access Porkbun Hosting

1. **Log into Porkbun**
   - Go to https://porkbun.com/account/login
   - Enter your credentials

2. **Navigate to Hosting**
   - Click on "musemint.io" domain
   - Click "Hosting" tab
   - You should see hosting is active

---

### Step 3: Upload Files (Choose One Method)

#### Method A: File Manager (Easiest)

1. Click "File Manager" button
2. Navigate to `public_html` folder
3. Delete default files if any (like `index.html` placeholder)
4. Click "Upload" button
5. Select ALL your files:
   - index.html
   - styles.css
   - script.js
   - metadata.json
6. Wait for upload to complete
7. Done! ✅

#### Method B: FTP (More Control)

1. **Get FTP Info**
   - In Porkbun hosting, click "FTP Information"
   - Note:
     ```
     Host: ftp.musemint.io
     Username: [shown in dashboard]
     Password: [shown in dashboard]
     Port: 21
     ```

2. **Download FileZilla**
   - Mac: `brew install --cask filezilla`
   - Or: https://filezilla-project.org

3. **Connect**
   - Open FileZilla
   - Enter FTP credentials
   - Click "Quickconnect"

4. **Upload**
   - Left side: Your local files
   - Right side: Server (navigate to `public_html`)
   - Drag all files from left to right
   - Wait for transfer to complete

---

### Step 4: Verify Upload

1. **Check Files**
   - In File Manager or FTP, confirm all files are in `public_html/`
   - Structure should be:
     ```
     public_html/
     ├── index.html
     ├── styles.css
     ├── script.js
     └── metadata.json
     ```

2. **Test Website**
   - Visit https://musemint.io (or http://musemint.io)
   - Should see MUSE landing page!

3. **Test Metadata**
   - Visit https://musemint.io/metadata.json
   - Should see JSON token metadata

---

### Step 5: Enable SSL (HTTPS)

1. In Porkbun dashboard → Domain → SSL
2. Enable "Auto SSL" or "Let's Encrypt"
3. Wait 5-10 minutes
4. Test: https://musemint.io (with 's')

---

## 🎯 After Token Creation

When you create the MUSE token:

1. **Update script.js:**
   ```javascript
   const MUSE_TOKEN_MINT = 'YOUR_MINT_ADDRESS_HERE';
   ```

2. **Upload again via File Manager or FTP**
   - Just upload the updated script.js
   - Overwrites the old one

3. **Clear browser cache and reload**

---

## 🖼️ Adding Logo Later

### Step 1: Create Logo
- 500x500px PNG
- Transparent background
- Green (#00D170) accent color

### Step 2: Upload Logo
1. In File Manager, create folder called `images`
2. Upload logo as `muse-logo.png` to images folder
3. URL will be: `https://musemint.io/images/muse-logo.png`

### Step 3: Update metadata.json
```json
{
  "image": "https://musemint.io/images/muse-logo.png"
}
```

4. Re-upload metadata.json

---

## ✅ Quick Checklist

Upload Now:
- [ ] Log into Porkbun
- [ ] Go to musemint.io hosting
- [ ] Upload all files to public_html/
- [ ] Test https://musemint.io
- [ ] Test https://musemint.io/metadata.json
- [ ] Enable SSL if not automatic

After Token Creation:
- [ ] Update script.js with mint address
- [ ] Update metadata.json with wallet address
- [ ] Re-upload updated files
- [ ] Test token explorer link

---

## 🆘 Quick Troubleshooting

**Website shows "Coming Soon"**
- Delete default files in public_html first
- Make sure index.html is directly in public_html, not a subfolder

**404 Not Found**
- Check files are in the right folder
- Refresh your browser (Cmd+Shift+R)

**Images not loading**
- Create `images` folder in public_html
- Upload images there

**SSL not working**
- Wait 10-15 minutes after enabling
- Try http:// first, then https://
- Contact Porkbun support if still not working

---

## 📞 Porkbun Support

If you need help:
- Email: support@porkbun.com
- They usually respond within hours
- Very helpful team!

---

**Ready to upload in 5 minutes!** 🚀
