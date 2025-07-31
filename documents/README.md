# PDF Documents Setup Instructions

## How to Add Your PDF Documents

### Step 1: Upload Your PDF Files
Place your PDF files in the following location:
```
public/documents/
├── privacy-policy.pdf
└── terms-conditions.pdf
```

### Step 2: PDF File Requirements
- **File Names**: Use exact names as shown above
- **File Size**: Keep PDFs under 10MB for better loading performance
- **Format**: Ensure PDFs are optimized for web viewing
- **Content**: Make sure PDFs are searchable and accessible

### Step 3: Alternative File Names (if needed)
If you want to use different file names, update these files:

**For Privacy Policy:**
- File: `src/pages/PrivacyPolicyPage.jsx`
- Line: `const privacyPolicyPdfUrl = '/documents/your-privacy-policy-name.pdf';`

**For Terms & Conditions:**
- File: `src/pages/TermsConditionsPage.jsx`
- Line: `const termsConditionsPdfUrl = '/documents/your-terms-conditions-name.pdf';`

### Step 4: Features Available
✅ **PDF Viewer**: Embedded viewer in browser
✅ **Download Button**: Users can download the PDF
✅ **New Tab**: Open PDF in new browser tab
✅ **Mobile Responsive**: Works on all devices
✅ **Loading States**: Shows loading spinner while PDF loads
✅ **Error Handling**: Fallback options if PDF doesn't load
✅ **SEO Optimized**: Proper meta tags and descriptions

### Step 5: Access URLs
Once setup, your documents will be available at:
- Privacy Policy: `https://yoursite.com/privacy-policy`
- Terms & Conditions: `https://yoursite.com/terms-conditions`

### Step 6: Footer Links
The footer has been updated to include proper links to both documents.

### Notes:
- PDFs are served from the `public` folder, so they're directly accessible
- The viewer component handles different screen sizes automatically
- Users can view, download, or open in new tab
- Copy protection is still active on the PDF viewer pages
