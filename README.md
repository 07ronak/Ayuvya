# Vite React Minimal Frontend Project

## Overview

This is a simple React-based frontend project built using Vite. The project displays a horizontally centered container with three child sections, each featuring a unique background image and an interactive behavior. The active section grows in size while the others shrink, and the state persists until another section is activated.

## Features

- Three sections: **Strength**, **Mobility**, and **Drills**, each with a unique background image.
- Dynamic resizing of sections: the active section enlarges, and the other two shrink.
- Interactive hover functionality with persistent active state.
- Fully responsive layout using CSS flexbox.

## Technologies Used

- **Vite**: For fast and lightweight development.
- **React**: Component-based UI framework.
- **CSS**: For styling and layout.

## Installation and Setup

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:

   ```bash
   cd <project-directory>
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. Open the app in your browser at [http://localhost:5173](http://localhost:5173).

## File Structure

```
.
├── public
│   ├── strength.webp
│   ├── mobility.jpg
│   ├── drills.webp
├── src
│   ├── App.css       # Styling for the app
│   ├── App.jsx       # Main React component
│   ├── main.jsx      # Entry point for the app
├── index.html        # HTML template
├── package.json      # Project dependencies and scripts
```

## Implementation Details

### React Component

The main component (`App.jsx`) dynamically renders three sections using the `sections` array:

```jsx
const sections = ["Strength", "Mobility", "Drills"];
```

- Each section is a child div with a background image and text corresponding to the array.
- The active section is tracked using React `useState`.

### CSS Styling

- **Flexbox** is used for layout alignment.
- The `flex-grow` property dynamically adjusts the size of each section.
- Background images are set using `background-image` in CSS.

## Usage

- Hover over any section to activate it.
- The active section enlarges, while the others shrink.
- The state remains active even after moving the mouse away.

## Example Screenshot

_(Add a screenshot of the app here)_

## Future Enhancements

- Add transitions for smoother animations.
- Make the app more responsive for smaller screens.
- Include additional sections or interactivity.

## License

This project is licensed under the MIT License.

---

Feel free to customize this project or extend its functionality. Happy coding!
