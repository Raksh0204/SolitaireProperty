# 🚀 SUPER QUICK SETUP - 10 Minutes

## What You'll Get
- ✅ Professional website (live on internet)
- ✅ Admin panel to edit everything
- ✅ **NO credit card needed!**
- ✅ Content saved in GitHub
- ✅ Auto-deploy on changes

---

## STEP 1: Install & Run Locally (3 min)

```bash
# Navigate to project
cd solitaire-netlify

# Install
npm install

# Run
npm run dev
```

**Open:** http://localhost:3000

✅ Website should work!

---

## STEP 2: Create GitHub Account & Repo (3 min)

### A. Create GitHub Account
1. Go to https://github.com/signup
2. Enter email, create password
3. Verify email

### B. Create Repository
1. Go to https://github.com/new
2. Name: **solitaire-property**
3. Make it **Public**
4. Click "Create repository"

### C. Push Code
```bash
# In your project folder
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/solitaire-property.git
git push -u origin main
```

Replace `YOUR_USERNAME`!

---

## STEP 3: Deploy to Netlify (4 min)

### A. Create Netlify Account
1. Go to https://app.netlify.com/signup
2. Click "GitHub" → Sign in with GitHub
3. Authorize Netlify

### B. Deploy Site
1. Click "Add new site" → "Import an existing project"
2. Click "GitHub"
3. Select "solitaire-property"
4. Settings are auto-filled!
5. Click "Deploy site"
6. **Wait 2 minutes...**

✅ **Your site is LIVE!** Copy the URL.

### C. Enable CMS (Admin Panel)
1. In Netlify, go to **Site settings** → **Identity**
2. Click "Enable Identity"
3. Under **Registration**, select "Invite only"
4. Scroll to **Services** → **Git Gateway**
5. Click "Enable Git Gateway"

### D. Create Your Admin Login
1. Go to **Identity** tab (top menu)
2. Click "Invite users"
3. Enter YOUR email
4. Check your email
5. Click invite link
6. Set your password

---

## STEP 4: Use Your Website! (1 min)

### Access Admin Panel
`https://your-site-name.netlify.app/admin`

### Edit Content
1. Login with your email/password
2. Click "Services"
3. Edit any service
4. Upload images
5. Click "Publish" → "Publish now"
6. **Changes live in 30 seconds!**

---

## ✅ DONE!

You now have:
- ✅ Live website
- ✅ Admin panel
- ✅ GitHub backup
- ✅ **Completely FREE!**

---

## 🎯 Quick Reference

**Your URLs:**
- Website: `https://your-site-name.netlify.app`
- Admin: `https://your-site-name.netlify.app/admin`
- GitHub: `https://github.com/YOUR_USERNAME/solitaire-property`

**Admin Login:**
- Email: (the one you invited)
- Password: (what you set)

---

## 💡 Tips

**Change domain name:**
1. Netlify → Site settings → Domain management
2. Click "Options" → "Edit site name"

**Add custom domain (optional):**
1. Buy domain (~₹600/year)
2. Netlify → Domain settings
3. Add custom domain
4. Follow DNS instructions

---

## 🆘 Problems?

**Can't push to GitHub?**
```bash
git config --global user.email "your@email.com"
git config --global user.name "Your Name"
```

**Build failing?**
- Check "Deploys" tab in Netlify
- Look at error logs

**Can't access admin?**
- Make sure Identity is enabled
- Check Git Gateway is enabled
- Try incognito/private window

---

**That's it! Enjoy your website! 🎉**
