# 🖼️ goit-neo-react-hw-module4

goit-neo-react-hw-module4 is an image search application built with React and Vite. The app allows users to search for images using keywords and displays the results in a responsive image gallery. Users can view enlarged images in a modal, load additional images through pagination, and receive notifications if any errors occur.

## 🌟 Features

- 🔎 Search for images using keywords
- 🖼️ Image gallery with responsive image cards
- 🔄 Load more results with pagination
- 💬 Modal window to view large image + author & likes
- ⌛ Loader while fetching images
- ⚠️ Error message handling
- ✅ Built using:
  - React (`useState`, `useEffect`, `useRef`, custom hooks)
  - Axios for HTTP requests
  - React Modal
  - React Hot Toast for notifications
  - React Loader Spinner

## 🚀 Project Structure

  goit-neo-react-hw-module4/
  ├── public/
  │   ├── AlexanderAndersen.jpg       // Background image
  │   ├── favicon-16x16.png
  │   ├── favicon-32x32.png
  │   ├── favicon-48x48.png
  │   └── ... 
  ├── src/
  │   ├── components/
  │   │   ├── SearchBar/
  │   │   │   ├── SearchBar.jsx
  │   │   │   └── SearchBar.module.css
  │   │   ├── ImageGallery/
  │   │   │   ├── ImageGallery.jsx
  │   │   │   └── ImageGallery.module.css
  │   │   ├── ImageCard/
  │   │   │   ├── ImageCard.jsx
  │   │   │   └── ImageCard.module.css
  │   │   ├── Loader/
  │   │   │   ├── Loader.jsx
  │   │   │   └── Loader.module.css
  │   │   ├── ErrorMessage/
  │   │   │   ├── ErrorMessage.jsx
  │   │   │   └── ErrorMessage.module.css
  │   │   ├── LoadMoreBtn/
  │   │   │   ├── LoadMoreBtn.jsx
  │   │   │   └── LoadMoreBtn.module.css
  │   │   └── ImageModal/
  │   │       ├── ImageModal.jsx
  │   │       └── ImageModal.module.css
  │   ├── App.jsx
  │   ├── index.css                // Global styles (includes background image)
  │   └── main.jsx
  ├── .env
  ├── package.json
  └── README.md


## 🔧 How to run the project

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/goit-neo-react-hw-module4.git
