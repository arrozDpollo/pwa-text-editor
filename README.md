JATE (Just Another Text Editor)
JATE is a Progressive Web Application (PWA) that functions as a text editor, allowing users to create, edit, and save notes locally using IndexedDB. It provides an offline experience, ensuring that your work is always accessible, even without an internet connection.

Features
Text Editing: Create and edit text notes with a user-friendly interface.
Autosave: Notes are automatically saved as you type, ensuring you never lose your work.
Offline Support: The application functions offline using service workers and IndexedDB.
Installation: Install JATE on your device for a native app experience.
Technologies Used
HTML/CSS: For structuring and styling the application.
JavaScript: For client-side logic and interactions.
Webpack: For module bundling and asset management.
Workbox: For service worker implementation and caching strategies.
IndexedDB (via idb): For local data storage.

Installation

Clone the repository:
git clone https://github.com/yourusername/pwa-text-editor.git


Install the dependencies:
npm install

Development
To start the development server:
cd server/
npm run dev

Usage
Open the application in your browser.
Start typing to create a note. Your notes will be autosaved.
Test the application offline by disconnecting from the internet.

## Live Application
[Check it here](https://pwa-text-editor-p48h.onrender.com)
