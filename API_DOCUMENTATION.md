# Dental Tourism Clinics India - API Documentation

This document contains all the API endpoints used in the Dental Tourism Clinics India application for easy reference and maintenance.

## Table of Contents
- [Authentication APIs](#authentication-apis)
- [Clinic Management APIs](#clinic-management-apis)
- [Dentist APIs](#dentist-apis)
- [Appointment APIs](#appointment-apis)
- [Consultation APIs](#consultation-apis)
- [Diagnostic Lab APIs](#diagnostic-lab-apis)
- [Pharmacy APIs](#pharmacy-apis)
- [CBCT/OPG APIs](#cbctopg-apis)
- [User Management APIs](#user-management-apis)
- [Payment APIs](#payment-apis)
- [Analytics APIs](#analytics-apis)
- [File Upload APIs](#file-upload-apis)

---

## Authentication APIs

### User Authentication
```
POST /api/auth/login
POST /api/auth/register
POST /api/auth/logout
POST /api/auth/refresh-token
POST /api/auth/forgot-password
POST /api/auth/reset-password
GET  /api/auth/verify-email/:token
```

### Admin Authentication
```
POST /api/admin/login
POST /api/admin/logout
GET  /api/admin/verify
```

---

## Clinic Management APIs

### Clinic Registration & Management
```
POST /api/clinics/register
GET  /api/clinics
GET  /api/clinics/:id
PUT  /api/clinics/:id
DELETE /api/clinics/:id
GET  /api/clinics/search?query=:searchTerm&state=:state
GET  /api/clinics/featured
POST /api/clinics/:id/reviews
GET  /api/clinics/:id/reviews
```

### Clinic Types
```
GET  /api/clinics/dental
GET  /api/clinics/cbct
GET  /api/clinics/diagnostic
```

---

## Dentist APIs

### Dentist Registration & Management
```
POST /api/dentists/register
GET  /api/dentists
GET  /api/dentists/:id
PUT  /api/dentists/:id
DELETE /api/dentists/:id
GET  /api/dentists/speciality/:speciality
GET  /api/dentists/search?query=:searchTerm
POST /api/dentists/:id/reviews
GET  /api/dentists/:id/reviews
GET  /api/dentists/:id/availability
PUT  /api/dentists/:id/availability
```

### Dentist Specialties
```
GET  /api/dentists/orthodontist
GET  /api/dentists/endodontist
GET  /api/dentists/periodontist
GET  /api/dentists/oral-surgeon
GET  /api/dentists/prosthodontist
GET  /api/dentists/pediatric
```

---

## Appointment APIs

### Appointment Management
```
POST /api/appointments/book
GET  /api/appointments
GET  /api/appointments/:id
PUT  /api/appointments/:id
DELETE /api/appointments/:id
GET  /api/appointments/user/:userId
GET  /api/appointments/clinic/:clinicId
GET  /api/appointments/dentist/:dentistId
PUT  /api/appointments/:id/status
PUT  /api/appointments/:id/reschedule
POST /api/appointments/:id/confirm
```

### Appointment Status Updates
```
PUT  /api/appointments/:id/pending
PUT  /api/appointments/:id/confirmed
PUT  /api/appointments/:id/completed
PUT  /api/appointments/:id/cancelled
```

---

## Consultation APIs

### Online Consultation
```
POST /api/consultations/book
GET  /api/consultations
GET  /api/consultations/:id
PUT  /api/consultations/:id
DELETE /api/consultations/:id
POST /api/consultations/:id/start-video
POST /api/consultations/:id/end-video
PUT  /api/consultations/:id/prescription
```

### Video Consultation
```
POST /api/video/generate-token
POST /api/video/start-session
POST /api/video/end-session
GET  /api/video/session/:sessionId
```

---

## Diagnostic Lab APIs

### Lab Registration & Management
```
POST /api/diagnostic-labs/register
GET  /api/diagnostic-labs
GET  /api/diagnostic-labs/:id
PUT  /api/diagnostic-labs/:id
DELETE /api/diagnostic-labs/:id
GET  /api/diagnostic-labs/search?query=:searchTerm
POST /api/diagnostic-labs/:id/book-test
GET  /api/diagnostic-labs/:id/tests
```

### Blood Test Labs
```
GET  /api/blood-test-labs
POST /api/blood-test-labs/book
GET  /api/blood-test-labs/:id/reports
```

---

## Pharmacy APIs

### Pharmacy Brand Management
```
POST /api/pharmacy/register
GET  /api/pharmacy/brands
GET  /api/pharmacy/brands/:id
PUT  /api/pharmacy/brands/:id
DELETE /api/pharmacy/brands/:id
GET  /api/pharmacy/products
GET  /api/pharmacy/products/:id
POST /api/pharmacy/orders
GET  /api/pharmacy/orders/:id
```

### Product Categories
```
GET  /api/pharmacy/toothpaste
GET  /api/pharmacy/toothbrush
GET  /api/pharmacy/mouthwash
GET  /api/pharmacy/flossers
GET  /api/pharmacy/tooth-whitening
GET  /api/pharmacy/ayurvedic-dental
```

---

## CBCT/OPG APIs

### CBCT/OPG Registration & Management
```
POST /api/cbct-opg/register
GET  /api/cbct-opg
GET  /api/cbct-opg/:id
PUT  /api/cbct-opg/:id
DELETE /api/cbct-opg/:id
GET  /api/cbct-opg/search?query=:searchTerm
POST /api/cbct-opg/:id/book-scan
GET  /api/cbct-opg/:id/reports
```

---

## User Management APIs

### User Profile Management
```
GET  /api/users/profile
PUT  /api/users/profile
DELETE /api/users/profile
POST /api/users/upload-avatar
GET  /api/users/:id/appointments
GET  /api/users/:id/consultations
PUT  /api/users/change-password
```

### User Preferences
```
GET  /api/users/preferences
PUT  /api/users/preferences
GET  /api/users/notifications
PUT  /api/users/notifications/read/:id
```

---

## Payment APIs

### Payment Processing
```
POST /api/payments/create-order
POST /api/payments/verify
GET  /api/payments/:id/status
POST /api/payments/refund
GET  /api/payments/history/:userId
```

### Payment Gateways
```
POST /api/payments/razorpay/create
POST /api/payments/razorpay/verify
POST /api/payments/stripe/create
POST /api/payments/stripe/verify
```

---

## Analytics APIs

### Admin Analytics
```
GET  /api/analytics/dashboard
GET  /api/analytics/users
GET  /api/analytics/appointments
GET  /api/analytics/revenue
GET  /api/analytics/clinics
GET  /api/analytics/popular-treatments
GET  /api/analytics/geographical-data
```

### Performance Metrics
```
GET  /api/analytics/performance
GET  /api/analytics/conversion-rates
GET  /api/analytics/user-engagement
```

---

## File Upload APIs

### Image Upload
```
POST /api/upload/image
POST /api/upload/clinic-images
POST /api/upload/dentist-images
POST /api/upload/profile-picture
DELETE /api/upload/image/:id
```

### Document Upload
```
POST /api/upload/documents
POST /api/upload/medical-reports
POST /api/upload/prescriptions
GET  /api/upload/documents/:id
DELETE /api/upload/documents/:id
```

---

## Miscellaneous APIs

### Location & Search
```
GET  /api/locations/states
GET  /api/locations/cities/:state
GET  /api/search/global?query=:searchTerm
GET  /api/search/suggestions?query=:searchTerm
```

### Content Management
```
GET  /api/content/articles
GET  /api/content/articles/:id
GET  /api/content/seo-data
PUT  /api/content/seo-data
```

### Notifications
```
GET  /api/notifications
POST /api/notifications/send
PUT  /api/notifications/:id/read
DELETE /api/notifications/:id
```

### Contact & Support
```
POST /api/contact/send-message
GET  /api/support/tickets
POST /api/support/create-ticket
PUT  /api/support/tickets/:id
```

---

## API Base URLs

### Development
```
Frontend: http://localhost:3000
Backend: http://localhost:5000
Dental Backend: http://localhost:5001
```

### Production
```
Frontend: https://dentaltourismclinicsindia.com
Backend: https://api.dentaltourismclinicsindia.com
Dental Backend: https://dental-api.dentaltourismclinicsindia.com
```

---

## Authentication Headers

Most APIs require authentication headers:

```javascript
{
  "Authorization": "Bearer <token>",
  "Content-Type": "application/json"
}
```

For file uploads:
```javascript
{
  "Authorization": "Bearer <token>",
  "Content-Type": "multipart/form-data"
}
```

---

## Error Response Format

All APIs follow a consistent error response format:

```javascript
{
  "success": false,
  "message": "Error description",
  "error": {
    "code": "ERROR_CODE",
    "details": "Detailed error information"
  }
}
```

---

## Success Response Format

All APIs follow a consistent success response format:

```javascript
{
  "success": true,
  "message": "Operation successful",
  "data": {
    // Response data
  }
}
```

---

## Rate Limiting

- Most APIs: 100 requests per minute per IP
- Authentication APIs: 10 requests per minute per IP
- File Upload APIs: 50 requests per minute per IP

---

## Notes

1. All timestamps are in ISO 8601 format
2. All IDs are MongoDB ObjectIDs unless specified otherwise
3. File uploads have a maximum size limit of 10MB
4. Image uploads are automatically processed and optimized using Cloudinary
5. All APIs support pagination using `page` and `limit` query parameters
6. Search APIs support fuzzy matching and autocomplete
7. All sensitive data is encrypted in transit and at rest

---

## Contact Information

For API support and documentation updates:
- Developer: Dental Tourism Team
- Email: api-support@dentaltourismclinicsindia.com
- Last Updated: August 7, 2025
