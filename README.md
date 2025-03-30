

# 🖼️ Image Search App – React Hooks Homework

This project is part of the [GoIT React Course] Module 4: Hooks. It’s a single-page image search application built with React, using the Unsplash API to fetch images based on user input.

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
 
## Application design

![Goit-neo-react-hw-module4 by Alexander Andersen](https://github.com/user-attachments/assets/617e2411-fc2f-4de9-b1e5-d77f0db850fc)


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
    │   ├── index.css                
    │   └── main.jsx
    ├── .env
    ├── package.json
    └── README.md


## 🔧 How to run the project

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/goit-neo-react-hw-module4.git

2. Install dependencies:
   ```bash
   npm install

3. Set up the environment variables:
   ```bash
   VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key

4. Run the development server:
   ```bash
   npm run dev

The application will be available at http://localhost:5173.


## Usage

  Search:
  Enter a keyword in the search bar and click the "Search" button to load images.

  View Image Details:
  Click on any image in the gallery to view it in a larger format along with additional information.

  Load More:
  Click the "Load more" button (which appears centered under the gallery) to fetch more images.

## Deployment
The project is deployed on Vercel. Once you deploy it, share the live URL along with the GitHub repository link.

Contributing
Contributions are welcome! Please fork the repository, create a new branch for your feature or bug fix, and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.





