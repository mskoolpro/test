# SkoolPro - Landing Page

A professional, modern landing page for the SkoolPro School Management ERP platform.

## 📁 Files

- **index.html** - Main landing page with complete structure
- **styles.css** - Modern CSS styling with responsive design
- **script.js** - Interactive JavaScript functionality

## 🎨 Features

### Design Elements
- ✨ Modern, professional UI with gradient accents
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎯 Clean navigation with smooth scrolling
- ⚡ Smooth animations and transitions
- 🎭 Dark mode ready (easily customizable)

### Sections
1. **Navigation Bar** - Sticky navigation with brand logo
2. **Hero Section** - Eye-catching headline with CTAs and floating cards
3. **Features Section** - 8 key differentiators
4. **Modules Section** - 16 core ERP modules grouped by category
5. **AI Learning Section** - Highlight of AI coaching capabilities
6. **Benefits Section** - Measurable outcomes and results
7. **Pricing Section** - 3-tier pricing with monthly/yearly toggle
8. **FAQ Section** - 6 common questions with accordion functionality
9. **CTA Section** - Final call-to-action
10. **Footer** - Links and company information

### Interactive Features
- 🎪 Smooth scroll navigation
- 🔄 FAQ accordion (click to expand/collapse)
- 💰 Pricing toggle (monthly ↔ yearly with 20% discount)
- 📊 Animated counter for statistics
- 🔔 Toast notifications for user actions
- ✨ Scroll-triggered animations
- 📈 Smooth fade-in effects on elements

## 🚀 How to Use

### Option 1: Local Development
```bash
# Simply open in any modern browser
open index.html
# or
start index.html
```

### Option 2: Local Web Server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Using Ruby
ruby -run -ehttpd . -p8000
```

Then visit `http://localhost:8000`

### Option 3: Deploy to Production
- Copy all three files to your web server
- Ensure all files are in the same directory
- Update domain URLs in HTML as needed

## 🎨 Customization

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary: #1F51BA;      /* Change brand color */
    --secondary: #00BCD4;    /* Change accent color */
    --accent: #FF6F00;       /* Change highlight color */
}
```

### Update Content
- Edit text in `index.html`
- Modify pricing in pricing section
- Update features and benefits
- Customize FAQ answers

### Add Your Logo
Replace the emoji logo with your own:
```html
<span class="logo-icon">📚</span> → <img src="your-logo.png" alt="Logo">
```

### Integrate with Backend
Update button actions in `script.js`:
```javascript
function handleStartTrial() {
    // Replace with your API call
    fetch('/api/start-trial', { method: 'POST' })
        .then(response => response.json())
        .then(data => showNotification(...));
}
```

## 📊 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- **Fully self-contained** - No external dependencies
- **Fast loading** - All CSS is inline, no external stylesheets required after initial load
- **Responsive** - Mobile-first approach
- **Accessible** - Semantic HTML, proper contrast ratios
- **SEO-friendly** - Proper headings, meta tags, structured content

## 🔧 Customization Tips

### Add New Sections
```html
<section id="your-section" class="your-section">
    <div class="container">
        <!-- Your content -->
    </div>
</section>
```

### Add CSS for Section
```css
.your-section {
    padding: 80px 0;
    background-color: var(--bg-light);
}
```

### Add Interactivity
```javascript
// Add to script.js
document.getElementById('your-element').addEventListener('click', function() {
    // Your action
});
```

## 📈 Analytics Integration

Add Google Analytics:
```html
<!-- Add before </head> tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_TRACKING_ID');
</script>
```

## 🔐 Security

- ✅ No sensitive data stored in frontend
- ✅ No external API calls in frontend code
- ✅ HTTPS recommended for production
- ✅ Form submissions should go to secure backend

## 📱 Mobile Optimization

- Responsive design handles all screen sizes
- Touch-friendly buttons and links
- Fast load times on mobile networks
- Optimized font sizes for readability

## 🆘 Troubleshooting

### Styles not loading?
- Ensure `styles.css` is in same directory as `index.html`
- Check browser console for errors
- Clear browser cache

### JavaScript not working?
- Check browser console for errors
- Ensure `script.js` is loaded (check Network tab)
- Verify file names match exactly

### Layout broken on mobile?
- Check viewport meta tag in `<head>`
- Test in mobile device emulator (DevTools)
- Verify CSS media queries are working

## 📝 License

This landing page is part of the SchoolHub ERP project. All rights reserved.

## 🤝 Contributing

To improve this landing page:
1. Test on multiple devices
2. Report issues via GitHub
3. Suggest improvements
4. Submit pull requests

## 📞 Support

For questions or issues:
- Email: support@schoolhub.erp
- Website: www.schoolhub.erp
- Documentation: docs.schoolhub.erp

---

**Last Updated**: December 30, 2025  
**Version**: 1.0  
**Status**: Production Ready
