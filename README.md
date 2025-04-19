💬 React Firebase Chat App
A real-time chat application built with React and Firebase, allowing users to authenticate via Google and exchange messages instantly.

🚀 Features
🔐 Google Authentication using Firebase Auth

📡 Real-time messaging with Firebase Cloud Firestore

🎨 Responsive UI built with React and CSS



🛠️ Prerequisites
Node.js installed

A Firebase project set up in the Firebase Console


⚙️ Installation
Clone the repository:
git clone https://github.com/mandrita16/ChatApp.git
cd ChatApp
Install dependencies:
npm install
Set up Firebase:

Create a new project in the Firebase Console.

Enable Authentication > Sign-in method > Google.

Enable Firestore Database in test mode.

Obtain your Firebase configuration from Project Settings > General > Your apps.

Configure Firebase in your project:

Create a .env file in the root directory and add your Firebase configuration:

REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_APP_ID=your_app_id
Ensure these variables are used in your Firebase initialization code.

🧪 Running the Application
Start the development server:
npm start
Open http://localhost:3000 to view the app in your browser.

🚀 Deployment (Optional)
To deploy your app using Firebase Hosting:

Install Firebase CLI:
npm install -g firebase-tools
Login to Firebase:
firebase login
Initialize Firebase in your project:
firebase init
Select Hosting and choose your Firebase project.

Set build as your public directory.

Configure as a single-page app (rewrite all URLs to /index.html).


📂 Project Structure
pgsql
Copy
Edit
ChatApp/
├── public/
├── src/
│   ├── components/
│   ├── firebase.js
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md
