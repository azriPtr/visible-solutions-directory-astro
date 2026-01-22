# Environment Variables Setup

Create a `.env` file in your project root with these variables:

```bash
# Strapi Backend URL
PUBLIC_STRAPI_URL=http://localhost:1337

# Strapi API Token (get from Strapi Admin → Settings → API Tokens)
# Generate with "Read-only" permissions
STRAPI_API_TOKEN=your_strapi_api_token_here

# Homepage API ID (optional - defaults to 'homepage')
# Change this if your Strapi single type has a different API ID
# Common values: homepage, home-page, home, landing-page
PUBLIC_HOMEPAGE_API_ID=homepage
```

## How to Get Your API Token

1. Open Strapi Admin: `http://localhost:1337/admin`
2. Go to **Settings** → **API Tokens**
3. Click **"Create new API Token"**
4. Configure:
   - **Name**: `Astro Frontend`
   - **Token type**: `Read-only`
   - **Token duration**: `Unlimited`
5. Click **Save**
6. Copy the token and paste it into your `.env` file

## How to Find Your API ID

### Method 1: Strapi Admin
1. Go to **Content-Type Builder**
2. Look under **Single Types**
3. Click **Edit** on your Homepage type
4. The **API ID** field shows the value to use

### Method 2: Check Strapi Folder Structure
Look at: `src/api/[api-id]/` in your Strapi project

The folder name is your API ID.

### Common API IDs
- `homepage`
- `home-page`
- `home`
- `landing-page`

## Testing Your Configuration

After setting up your `.env`, test the endpoint in your browser:

```
http://localhost:1337/api/homepage?populate=deep
```

Replace `homepage` with your actual API ID if different.

## Important Notes

- **Never commit `.env` to git!** (it's in `.gitignore`)
- Restart your Astro dev server after changing `.env`
- `PUBLIC_` prefix means the variable is exposed to the browser
- Variables without `PUBLIC_` are server-side only
