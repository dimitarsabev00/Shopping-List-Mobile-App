# Shopping-List-Mobile-App


A cross-platform shopping list application built with modern technologies that enables real-time synchronization while maintaining local-first functionality.


## ⚡ Tech Stack

- [Expo](https://expo.dev/) - React Native framework
- [TinyBase](https://tinybase.org/) - Local-first database
- [Clerk](https://clerk.dev/) - Authentication & user management
- [Cloudflare](https://cloudflare.com/) - Edge computing & hosting


## 🛠️ Setup & Installation


### Client Setup (Expo)


1. Navigate to the client directory:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   - Copy `.env.example` to `.env`
   - Fill in required values (see Environment Variables section)

4. Start the development server:
   ```bash
   npx expo start
   ```
   The app can be run on iOS, Android or Web using Expo Go.


### Server Setup (Synchronization)


1. Navigate to the server directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start local development server:

   ```bash
   npm run dev
   ```

4. Deploy to Cloudflare Workers:
   ```bash
   npm run deploy
   ```
