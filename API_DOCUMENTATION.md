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
  Required: { email, password }
POST /api/auth/register
  Required: { name, email, password, phone }
POST /api/auth/logout
  Required: { refreshToken }
POST /api/auth/refresh-token
  Required: { refreshToken }
POST /api/auth/forgot-password
  Required: { email }
POST /api/auth/reset-password
  Required: { token, newPassword }
GET  /api/auth/verify-email/:token
  Required: token (URL param)
```

### Admin Authentication
```
POST /api/admin/login
  Required: { username, password }
POST /api/admin/logout
  Required: { refreshToken }
GET  /api/admin/verify
  Required: Authorization header
```

---

## Clinic Management APIs

### Clinic Registration & Management
```
POST /api/clinics/register
  Required: { name, address, state, city, phone, email, type }
GET  /api/clinics
  Optional: { page, limit, state, city }
GET  /api/clinics/:id
  Required: id (URL param)
PUT  /api/clinics/:id
  Required: id (URL param), { ...fields to update }
DELETE /api/clinics/:id
  Required: id (URL param)
GET  /api/clinics/search?query=:searchTerm&state=:state
  Required: query, Optional: state
GET  /api/clinics/featured
  Optional: { page, limit }
POST /api/clinics/:id/reviews
  Required: id (URL param), { rating, comment, userId }
GET  /api/clinics/:id/reviews
  Required: id (URL param)
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
  Required: { name, email, phone, speciality, clinicId }
GET  /api/dentists
  Optional: { page, limit, speciality }
GET  /api/dentists/:id
  Required: id (URL param)
PUT  /api/dentists/:id
  Required: id (URL param), { ...fields to update }
DELETE /api/dentists/:id
  Required: id (URL param)
GET  /api/dentists/speciality/:speciality
  Required: speciality (URL param)
GET  /api/dentists/search?query=:searchTerm
  Required: query
POST /api/dentists/:id/reviews
  Required: id (URL param), { rating, comment, userId }
GET  /api/dentists/:id/reviews
  Required: id (URL param)
GET  /api/dentists/:id/availability
  Required: id (URL param)
PUT  /api/dentists/:id/availability
  Required: id (URL param), { availableDates }
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
  Required: { userId, clinicId, dentistId, date, time, reason }
GET  /api/appointments
  Optional: { page, limit, status }
GET  /api/appointments/:id
  Required: id (URL param)
PUT  /api/appointments/:id
  Required: id (URL param), { ...fields to update }
DELETE /api/appointments/:id
  Required: id (URL param)
GET  /api/appointments/user/:userId
  Required: userId (URL param)
GET  /api/appointments/clinic/:clinicId
  Required: clinicId (URL param)
GET  /api/appointments/dentist/:dentistId
  Required: dentistId (URL param)
PUT  /api/appointments/:id/status
  Required: id (URL param), { status }
PUT  /api/appointments/:id/reschedule
  Required: id (URL param), { newDate, newTime }
POST /api/appointments/:id/confirm
  Required: id (URL param)
```

### Appointment Status Updates
```
PUT  /api/appointments/:id/pending
PUT  /api/appointments/:id/confirmed
PUT  /api/appointments/:id/completed
PUT  /api/appointments/:id/cancelled
  Required: id (URL param)
```

---

## Consultation APIs

### Online Consultation
```
POST /api/consultations/book
  Required: { userId, dentistId, date, time, reason }
GET  /api/consultations
  Optional: { page, limit, status }
GET  /api/consultations/:id
  Required: id (URL param)
PUT  /api/consultations/:id
  Required: id (URL param), { ...fields to update }
DELETE /api/consultations/:id
  Required: id (URL param)
POST /api/consultations/:id/start-video
  Required: id (URL param)
POST /api/consultations/:id/end-video
  Required: id (URL param)
PUT  /api/consultations/:id/prescription
  Required: id (URL param), { prescription }
```

### Video Consultation
```
POST /api/video/generate-token
  Required: { userId, dentistId }
POST /api/video/start-session
  Required: { sessionId }
POST /api/video/end-session
  Required: { sessionId }
GET  /api/video/session/:sessionId
  Required: sessionId (URL param)
```

---

## Diagnostic Lab APIs

### Lab Registration & Management
```
POST /api/diagnostic-labs/register
  Required: { name, address, phone, email, tests }
GET  /api/diagnostic-labs
  Optional: { page, limit, testType }
GET  /api/diagnostic-labs/:id
  Required: id (URL param)
PUT  /api/diagnostic-labs/:id
  Required: id (URL param), { ...fields to update }
DELETE /api/diagnostic-labs/:id
  Required: id (URL param)
GET  /api/diagnostic-labs/search?query=:searchTerm
  Required: query
POST /api/diagnostic-labs/:id/book-test
  Required: id (URL param), { userId, testType, date }
GET  /api/diagnostic-labs/:id/tests
  Required: id (URL param)
```

### Blood Test Labs
```
GET  /api/blood-test-labs
POST /api/blood-test-labs/book
  Required: { userId, testType, date }
GET  /api/blood-test-labs/:id/reports
  Required: id (URL param)
```

---

## Pharmacy APIs

### Pharmacy Brand Management
```
POST /api/pharmacy/register
  Required: { name, address, phone, email }
GET  /api/pharmacy/brands
GET  /api/pharmacy/brands/:id
  Required: id (URL param)
PUT  /api/pharmacy/brands/:id
  Required: id (URL param), { ...fields to update }
DELETE /api/pharmacy/brands/:id
  Required: id (URL param)
GET  /api/pharmacy/products
  Optional: { category, page, limit }
GET  /api/pharmacy/products/:id
  Required: id (URL param)
POST /api/pharmacy/orders
  Required: { userId, productId, quantity, address }
GET  /api/pharmacy/orders/:id
  Required: id (URL param)
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
  Required: { name, address, phone, email, scanTypes }
GET  /api/cbct-opg
GET  /api/cbct-opg/:id
  Required: id (URL param)
PUT  /api/cbct-opg/:id
  Required: id (URL param), { ...fields to update }
DELETE /api/cbct-opg/:id
  Required: id (URL param)
GET  /api/cbct-opg/search?query=:searchTerm
  Required: query
POST /api/cbct-opg/:id/book-scan
  Required: id (URL param), { userId, scanType, date }
GET  /api/cbct-opg/:id/reports
  Required: id (URL param)
```

---

## User Management APIs

### User Profile Management
```
GET  /api/users/profile
  Required: Authorization header
PUT  /api/users/profile
  Required: Authorization header, { ...fields to update }
DELETE /api/users/profile
  Required: Authorization header
POST /api/users/upload-avatar
  Required: Authorization header, file
GET  /api/users/:id/appointments
  Required: id (URL param)
GET  /api/users/:id/consultations
  Required: id (URL param)
PUT  /api/users/change-password
  Required: Authorization header, { oldPassword, newPassword }
```

### User Preferences
```
GET  /api/users/preferences
  Required: Authorization header
PUT  /api/users/preferences
  Required: Authorization header, { ...fields to update }
GET  /api/users/notifications
  Required: Authorization header
PUT  /api/users/notifications/read/:id
  Required: id (URL param), Authorization header
```

---

## Payment APIs

### Payment Processing
```
POST /api/payments/create-order
  Required: { userId, amount, method }
POST /api/payments/verify
  Required: { orderId, paymentId, signature }
GET  /api/payments/:id/status
  Required: id (URL param)
POST /api/payments/refund
  Required: { paymentId, reason }
GET  /api/payments/history/:userId
  Required: userId (URL param)
```

### Payment Gateways
```
POST /api/payments/razorpay/create
  Required: { userId, amount }
POST /api/payments/razorpay/verify
  Required: { orderId, paymentId, signature }
POST /api/payments/stripe/create
  Required: { userId, amount }
POST /api/payments/stripe/verify
  Required: { sessionId }
```

---

## Analytics APIs

### Admin Analytics
```
GET  /api/analytics/dashboard
  Required: Authorization header
GET  /api/analytics/users
  Required: Authorization header
GET  /api/analytics/appointments
  Required: Authorization header
GET  /api/analytics/revenue
  Required: Authorization header
GET  /api/analytics/clinics
  Required: Authorization header
GET  /api/analytics/popular-treatments
  Required: Authorization header
GET  /api/analytics/geographical-data
  Required: Authorization header
```

### Performance Metrics
```
GET  /api/analytics/performance
  Required: Authorization header
GET  /api/analytics/conversion-rates
  Required: Authorization header
GET  /api/analytics/user-engagement
  Required: Authorization header
```

---

## File Upload APIs

### Image Upload
```
POST /api/upload/image
  Required: Authorization header, file
POST /api/upload/clinic-images
  Required: Authorization header, file
POST /api/upload/dentist-images
  Required: Authorization header, file
POST /api/upload/profile-picture
  Required: Authorization header, file
DELETE /api/upload/image/:id
  Required: id (URL param), Authorization header
```

### Document Upload
```
POST /api/upload/documents
  Required: Authorization header, file
POST /api/upload/medical-reports
  Required: Authorization header, file
POST /api/upload/prescriptions
  Required: Authorization header, file
GET  /api/upload/documents/:id
  Required: id (URL param), Authorization header
DELETE /api/upload/documents/:id
  Required: id (URL param), Authorization header
```

---

## Miscellaneous APIs

### Location & Search
```
GET  /api/locations/states
GET  /api/locations/cities/:state
  Required: state (URL param)
GET  /api/search/global?query=:searchTerm
  Required: query
GET  /api/search/suggestions?query=:searchTerm
  Required: query
```

### Content Management
```
GET  /api/content/articles
GET  /api/content/articles/:id
  Required: id (URL param)
GET  /api/content/seo-data
PUT  /api/content/seo-data
  Required: Authorization header, { ...fields to update }
```

### Notifications
```
GET  /api/notifications
  Required: Authorization header
POST /api/notifications/send
  Required: Authorization header, { message, userId }
PUT  /api/notifications/:id/read
  Required: id (URL param), Authorization header
DELETE /api/notifications/:id
  Required: id (URL param), Authorization header
```

### Contact & Support
```
POST /api/contact/send-message
  Required: { name, email, message }
GET  /api/support/tickets
  Required: Authorization header
POST /api/support/create-ticket
  Required: Authorization header, { subject, message }
PUT  /api/support/tickets/:id
  Required: id (URL param), Authorization header, { ...fields to update }
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
