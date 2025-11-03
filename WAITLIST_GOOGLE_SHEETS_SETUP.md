# 📊 Waitlist Google Sheets Setup (5 Minutes)

## Simple Google Sheets Waitlist Collection

### Step 1: Create Google Sheet

1. Go to **https://sheets.google.com**
2. Create a new blank spreadsheet
3. Name it: **MUSE Waitlist**
4. In Row 1, add headers:
   - A1: **Email**
   - B1: **Timestamp**

### Step 2: Add Google Apps Script

1. In your sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Add new row with email and timestamp
    sheet.appendRow([
      data.email,
      data.timestamp
    ]);
    
    // Send email notification to you
    MailApp.sendEmail({
      to: 'info@musemint.io',
      subject: 'New MUSE Waitlist Signup',
      body: 'New waitlist signup!\n\nEmail: ' + data.email + '\nTime: ' + data.timestamp
    });
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (disk icon)
5. Name it: **MUSE Waitlist Handler**

### Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click gear icon ⚙️ → Select **Web app**
3. Settings:
   - **Description**: MUSE Waitlist
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. Click **Authorize access**
6. Choose your Google account
7. Click **Advanced** → **Go to MUSE Waitlist Handler (unsafe)**
8. Click **Allow**
9. **Copy the Web app URL** (looks like: `https://script.google.com/macros/s/...`)

### Step 4: Add URL to Website

1. Open `script.js` in your website
2. Find line 90: `const GOOGLE_SHEETS_URL = 'YOUR_GOOGLE_SHEETS_WEB_APP_URL';`
3. Replace with your URL:
   ```javascript
   const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/.../exec';
   ```
4. Save and push to GitHub

```bash
cd /Users/matthewglover/CascadeProjects/musemint-website
git add script.js
git commit -m "Add Google Sheets waitlist URL"
git push origin main
```

---

## ✅ Now It Works!

When someone joins the waitlist:
1. ✅ Email saved to Google Sheet
2. ✅ You get email notification at info@musemint.io
3. ✅ User sees success message
4. ✅ All emails in one organized spreadsheet

---

## 📊 View Your Waitlist

Go to your Google Sheet anytime to see:
- All emails collected
- Timestamps
- Export to CSV when ready to email them

---

## 🔧 Optional: Add More Fields

Want to collect name too? Just:

1. **Update HTML form:**
```html
<input type="text" name="name" placeholder="Your name" required>
<input type="email" name="email" placeholder="Enter your email" required>
```

2. **Update script.js form handler** to include name

3. **Update Google Sheets script** to save name in column C

---

**Setup time: 5 minutes** ⏱️  
**Cost: Free** 💰
