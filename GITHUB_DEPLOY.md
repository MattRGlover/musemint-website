# 🚀 Deploy MUSE Website via GitHub

Your website is now a Git repository! You have two deployment options:

---

## ✅ Option 1: GitHub Pages (FREE & Easy!)

### Step 1: Create GitHub Repository

1. **Go to GitHub**
   - Visit https://github.com/new
   - Or: https://github.com → Click "+" → "New repository"

2. **Create Repository**
   ```
   Repository name: musemint-website
   Description: Official MUSE landing page and token metadata
   Visibility: Public ✅
   
   DON'T initialize with README (we already have files!)
   ```
   
3. **Click "Create repository"**

### Step 2: Push Your Code

Copy the commands GitHub shows you, or use these:

```bash
cd /Users/matthewglover/CascadeProjects/musemint-website

# Add GitHub as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/musemint-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Enter your GitHub credentials when prompted.**

### Step 3: Enable GitHub Pages

1. **Go to Repository Settings**
   - In your GitHub repo → Click "Settings"
   
2. **Enable Pages**
   - Scroll down to "Pages" section (left sidebar)
   - Source: Deploy from a branch
   - Branch: `main` → folder: `/ (root)`
   - Click "Save"

3. **Wait 1-2 Minutes**
   - GitHub builds your site
   - You'll get a URL like:
     ```
     https://YOUR_USERNAME.github.io/musemint-website/
     ```

### Step 4: Connect Custom Domain (musemint.io)

1. **In GitHub Pages Settings**
   - Custom domain: `musemint.io`
   - Click "Save"
   - GitHub creates a CNAME file

2. **Update Porkbun DNS**
   - Log into Porkbun
   - Go to musemint.io → DNS Settings
   - Add these records:
   
   ```
   Type: CNAME
   Host: www
   Answer: YOUR_USERNAME.github.io
   TTL: 600
   
   Type: A
   Host: @
   Answer: 185.199.108.153
   TTL: 600
   
   Type: A
   Host: @
   Answer: 185.199.109.153
   TTL: 600
   
   Type: A
   Host: @
   Answer: 185.199.110.153
   TTL: 600
   
   Type: A
   Host: @
   Answer: 185.199.111.153
   TTL: 600
   ```

3. **Wait for DNS (15-60 minutes)**
   - Visit https://musemint.io
   - Should see your site!

4. **Enable HTTPS**
   - In GitHub Pages settings
   - Check "Enforce HTTPS"
   - Wait a few minutes
   - Done! ✅

---

## 🔄 Option 2: GitHub → Porkbun Auto-Deploy

Keep Porkbun hosting but auto-deploy from GitHub using GitHub Actions.

### Pros:
- ✅ Use existing Porkbun hosting
- ✅ Auto-deploy on every push to GitHub
- ✅ No manual FTP uploads

### Setup:

1. **Push to GitHub** (same as Option 1, Step 1-2)

2. **Get FTP Credentials from Porkbun**
   - Log into Porkbun
   - musemint.io → Hosting → FTP Information
   - Note:
     - FTP Server (e.g., ftp.musemint.io)
     - Username
     - Password

3. **Add Secrets to GitHub**
   - Go to your repo on GitHub
   - Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Add these three secrets:
     ```
     FTP_SERVER = ftp.musemint.io
     FTP_USERNAME = your_ftp_username
     FTP_PASSWORD = your_ftp_password
     ```

4. **GitHub Action Already Created!**
   - The workflow file is already in `.github/workflows/deploy.yml`
   - It will auto-run on every push to main branch

5. **Test It**
   - Make any change to a file
   - Commit and push:
     ```bash
     git add .
     git commit -m "Test auto-deploy"
     git push
     ```
   - Go to GitHub repo → Actions tab
   - Watch the deployment happen! 🚀
   - Visit https://musemint.io

---

## 📊 Comparison

| Feature | GitHub Pages | GitHub → Porkbun |
|---------|-------------|------------------|
| **Cost** | Free | Porkbun hosting cost |
| **Setup** | Easier | Slightly more steps |
| **HTTPS** | Automatic | Via Porkbun |
| **Speed** | Fast (CDN) | Depends on Porkbun |
| **Custom Domain** | Free | Already have it |
| **Auto-Deploy** | ✅ Yes | ✅ Yes |

**Recommendation:** Use **GitHub Pages** (Option 1) - it's free, faster, and easier!

---

## 🔄 Future Updates

Once set up, updating your site is easy:

```bash
# Make changes to files
# Then:

git add .
git commit -m "Updated token info"
git push

# Site updates automatically! ✨
```

---

## 🎯 After Token Creation

When you create the MUSE token:

1. **Update files locally:**
   - Edit `script.js` with mint address
   - Edit `metadata.json` with wallet

2. **Commit and push:**
   ```bash
   git add script.js metadata.json
   git commit -m "Updated with MUSE token mint address"
   git push
   ```

3. **Site updates automatically!** ✅

---

## ✅ What You Get

With GitHub:
- ✅ Version control
- ✅ Auto-deployment
- ✅ Easy rollbacks
- ✅ Collaboration ready
- ✅ Free hosting (GitHub Pages)
- ✅ No manual uploads ever again!

---

## 🚀 Next Steps

**Choose your option:**

### For GitHub Pages (Recommended):
1. Create GitHub repo
2. Push code
3. Enable GitHub Pages
4. Point musemint.io to GitHub
5. Done!

### For Porkbun Auto-Deploy:
1. Create GitHub repo
2. Push code
3. Add FTP secrets
4. Auto-deploys to Porkbun
5. Done!

---

**Ready to push to GitHub?** Let me know which option you prefer! 🎵✨

