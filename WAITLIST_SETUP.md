# 📧 Waitlist Setup Guide

## Quick 2-Minute Setup

### Step 1: Get Your Free Access Key

1. Go to https://web3forms.com
2. Click "Get Started for Free"
3. Enter your email: **info@musemint.io**
4. Click "Create Access Key"
5. Copy the access key (looks like: `a1b2c3d4-1234-5678-90ab-cdef12345678`)

### Step 2: Add Access Key to Website

1. Open `index.html`
2. Find line 41: `<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">`
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key
4. Save the file

Example:
```html
<input type="hidden" name="access_key" value="a1b2c3d4-1234-5678-90ab-cdef12345678">
```

### Step 3: Push to GitHub

```bash
git add index.html
git commit -m "Add waitlist access key"
git push origin main
```

---

## ✅ That's It!

Now when someone joins the waitlist:
- ✅ You'll get an email at **info@musemint.io**
- ✅ Email will include their email address
- ✅ Subject: "New MUSE Waitlist Signup"

---

## 📊 Features You Get (Free):

- ✅ Unlimited submissions
- ✅ Email notifications
- ✅ Spam protection
- ✅ No branding
- ✅ Mobile responsive
- ✅ Works everywhere

---

## 🔧 Optional: Customize

You can customize the form by editing these hidden fields in `index.html`:

```html
<input type="hidden" name="subject" value="New MUSE Waitlist Signup">
<input type="hidden" name="from_name" value="MUSE Waitlist">
```

---

## 📝 Testing

After setup:
1. Go to https://musemint.io
2. Enter your email in the waitlist form
3. Click "Join Waitlist"
4. Check info@musemint.io for the email

---

**Setup time: 2 minutes** ⏱️
