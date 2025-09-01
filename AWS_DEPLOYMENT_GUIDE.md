# AWS Hosting Setup Guide for dentaltourismclinicsindia.com

## Prerequisites
- AWS Account (with verification complete)
- Domain: dentaltourismclinicsindia.com
- React app built and ready for deployment

## Option 1: AWS Amplify (Recommended for React Apps)

### Step 1: Create AWS Amplify App
1. Go to AWS Amplify Console
2. Click "Get Started" under "Deploy"
3. Choose your Git provider (GitHub)
4. Select repository: Dent-al/dentaltourismclinicsindia
5. Choose branch: main
6. Amplify will auto-detect React settings

### Step 2: Build Settings
- Amplify will use the `amplify.yml` file automatically
- Build command: `npm run build`
- Base directory: `/`
- Publish directory: `build`

### Step 3: Domain Setup
1. In Amplify console, go to "Domain management"
2. Add domain: `dentaltourismclinicsindia.com`
3. Add subdomain: `www.dentaltourismclinicsindia.com`
4. AWS will provide DNS records to configure

### Step 4: DNS Configuration
Add these records to your domain registrar:
```
Type: CNAME
Name: www
Value: [Amplify-provided-URL]

Type: A
Name: @
Value: [Amplify-provided-IP]
```

## Option 2: AWS S3 + CloudFront

### Step 1: Create S3 Bucket
1. Create bucket: `dentaltourismclinicsindia.com`
2. Enable static website hosting
3. Set index document: `index.html`
4. Set error document: `index.html`

### Step 2: Upload Build Files
1. Upload all files from `build/` folder to S3 bucket
2. Set permissions to public read

### Step 3: CloudFront Distribution
1. Create CloudFront distribution
2. Origin: S3 bucket
3. Default root object: `index.html`
4. Error pages: 
   - 404 → /index.html (200)
   - 403 → /index.html (200)

### Step 4: Route 53 Setup
1. Create hosted zone for `dentaltourismclinicsindia.com`
2. Create A record pointing to CloudFront distribution
3. Create CNAME for www

## Option 3: AWS Elastic Beanstalk

### Step 1: Prepare Deployment Package
1. Zip the `build/` folder contents
2. Include `.htaccess` file for React Router support

### Step 2: Create Elastic Beanstalk Application
1. Choose platform: Node.js
2. Upload deployment package
3. Configure environment

### Step 3: Environment Configuration
- Instance type: t3.micro (free tier)
- Load balancer: Application Load Balancer
- Auto scaling: 1-2 instances

## Environment Variables (if needed)
```
REACT_APP_API_URL=https://api.dentaltourismclinicsindia.com
REACT_APP_BACKEND_URL=https://backend.dentaltourismclinicsindia.com
NODE_ENV=production
```

## SSL Certificate
- AWS Certificate Manager provides free SSL certificates
- Automatically provisions for Amplify and CloudFront
- Validates domain ownership

## Performance Optimizations
- Enable Gzip compression
- Set cache headers for static assets
- Use CloudFront for global CDN
- Optimize images before deployment

## Security Headers
All deployment options include:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Strict-Transport-Security: max-age=31536000

## Cost Estimation (Monthly)
- **Amplify**: $1-5 (includes hosting + CDN)
- **S3 + CloudFront**: $1-3
- **Elastic Beanstalk**: $5-15 (t3.micro free tier)

## Monitoring and Analytics
- AWS CloudWatch for performance monitoring
- AWS X-Ray for application tracing
- Google Analytics (already integrated in the app)

## Backup and Recovery
- S3 versioning enabled
- CloudFormation templates for infrastructure as code
- Automated deployments from GitHub

## Next Steps After Deployment
1. Test all routes and functionality
2. Set up monitoring and alerts
3. Configure automatic deployments
4. Set up staging environment
5. Configure custom error pages

## Support
- AWS Support: Basic (Free) or Developer ($29/month)
- Documentation: https://docs.aws.amazon.com/
- Community forums: AWS re:Post
