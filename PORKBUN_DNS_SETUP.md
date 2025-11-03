# 🌐 Point musemint.io to GitHub Pages

## DNS Configuration for Porkbun

### Step 1: Log into Porkbun
- Go to https://porkbun.com
- Navigate to musemint.io → DNS

### Step 2: Delete Old Records (if any)
Delete any existing A or CNAME records for @ and www

### Step 3: Add GitHub Pages DNS Records

**Add these FOUR A records:**

```
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

**Add CNAME record for www:**

```
Type: CNAME
Host: www
Answer: mattglover.github.io
TTL: 600
```

### Step 4: Save Changes

Click "Save" or "Update" for each record.

---

## ⏱️ Wait for DNS Propagation

- **Time:** 5 minutes to 48 hours (usually ~15 minutes)
- **Check status:** https://dnschecker.org/#A/musemint.io

---

## ✅ Verify Setup

### After DNS propagates:

1. **Visit http://musemint.io**
   - Should show your MUSE website!

2. **Enable HTTPS in GitHub**
   - Go back to GitHub Pages settings
   - Check "Enforce HTTPS"
   - Wait a few minutes
   - Visit https://musemint.io (secure!)

3. **Test metadata:**
   - https://musemint.io/metadata.json
   - Should show your token metadata

---

## 🎯 Final Setup

Your URLs will be:

```
Website:          https://musemint.io
Token Metadata:   https://musemint.io/metadata.json
Logo (future):    https://musemint.io/images/muse-logo.png
```

---

## 🔄 How It Works

```
Your Computer
    ↓ (git push)
GitHub Repository
    ↓ (auto-deploy)
GitHub Pages (hosting)
    ↓ (DNS pointing)
musemint.io ← Users visit here!
```

---

## 📋 Complete Checklist

- [ ] Enable GitHub Pages (Settings → Pages)
- [ ] Add custom domain: musemint.io
- [ ] Update Porkbun DNS (4 A records + 1 CNAME)
- [ ] Wait for DNS propagation (~15 min)
- [ ] Test http://musemint.io
- [ ] Enable HTTPS in GitHub Pages
- [ ] Test https://musemint.io
- [ ] Test https://musemint.io/metadata.json

---

## 🆘 Troubleshooting

### "Domain is improperly configured"
- Wait longer for DNS propagation
- Double-check all 4 A records are correct
- Make sure CNAME record points to mattglover.github.io

### "Couldn't verify"
- Remove and re-add custom domain in GitHub
- Clear browser cache
- Try incognito mode

### DNS not propagating
- Check https://dnschecker.org
- May take up to 24 hours (usually 15 min)
- Contact Porkbun support if stuck

---

## ✨ Benefits

**You now have:**
- ✅ Professional domain (musemint.io)
- ✅ Free hosting (GitHub Pages)
- ✅ Automatic HTTPS (Let's Encrypt)
- ✅ Version control (Git)
- ✅ Auto-deploy on push
- ✅ Fast CDN (GitHub's infrastructure)
- ✅ No manual uploads ever!

---

**Ready to set up DNS?** Let me know when you've added the records! 🚀
