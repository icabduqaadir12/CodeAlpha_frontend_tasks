# ​ CodeAlpha - Image Gallery

An interactive and responsive image gallery built with vanilla JavaScript, HTML, and CSS. This project was developed as part of the **CodeAlpha Frontend Tasks**, showcasing DOM manipulation, event handling, filtering, and lightbox functionality.

---

##  Live Demo  
Experience the gallery firsthand at: [https://icabduqaadir12.github.io/CodeAlpha_frontend_tasks/CodeAlpha_image_gallery/](https://icabduqaadir12.github.io/CodeAlpha_frontend_tasks/CodeAlpha_image_gallery/)

---

## ​ Features

### ​​ Lightbox Viewer
- Click on any image to open it in a larger view.
- Navigate through images using:
  - ➡️ Next / ⬅️ Previous buttons
  - ⌨️ Arrow keys (Left / Right)
- 🔐 Close the lightbox using:
  - ❌ Close button
  - ⌨️ Escape key
  - Clicking outside the image

### ​ Filter by Category
- Filter images using category buttons (e.g., Nature, City, People).
- Shows only images from the selected category.
- “All” button returns to full view.

---

##  Demo Snapshot

Here’s what the gallery looks like in action:

- A header that reads "**My Image Gallery**".
- Filter buttons labeled "All", "Nature", "City", "People".
- A grid of sample images (3 images repeated across categories).
- A lightbox overlay featuring **×**, **<**, and **>** controls for easy navigation.  
  (Rendered live at the link above.)

---

## ​ How It Works

- **Event Listeners**:
  - Each thumbnail opens the lightbox with the selected image.
  - Keyboard navigation and lightbox close behavior (Escape key, clicking overlay).
  - Filtering links `data-filter` buttons to `data-category` attributes on images.

- **Lightbox Functionality**:
  - Manages current image index, updates the main lightbox image.
  - Navigation wraps around from last to first image seamlessly.

- **Filtering System**:
  - Checks each image’s `data-category` value against the chosen filter.
  - Uses simple style toggling (`display: block`/`none`) for show/hide effects.

---

##  Project Structure

```
CodeAlpha_image_gallery/
├── index.html
├── style.css
└── script.js
```

---

##  Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/icabduqaadir12/CodeAlpha_frontend_tasks.git
   cd CodeAlpha_frontend_tasks/CodeAlpha_image_gallery/CodeAlpha_image_gallery
   ```

2. **Open the live preview locally**
   ```bash
   start index.html
   ```

Or simply visit the live demo above to explore it online.

---

##  Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)

---

##  Acknowledgements

Built for the **CodeAlpha Internship Program** as part of the frontend development tasks.

