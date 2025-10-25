# Route Loading Animation Transfer Guide

This project already implements an animated transition that runs while switching routes. Use this guide to reuse the same UX in another React project.

## 1. Dependencies
- `framer-motion` for animation primitives (`AnimatePresence`, `motion`).
- React Router (`react-router-dom`) to coordinate page transitions.
- SCSS support (for `style.module.scss` and `style.scss`). If the target build does not process SCSS, convert the styles to plain CSS first.

## 2. Source Files To Copy
Copy these modules into the new project, keeping the relative folder structure or updating import paths accordingly:

| Purpose | File |
| --- | --- |
| Entry wrapper that toggles the loader | `src/app/app.jsx` |
| Loading curtain with route title | `src/components/Preloader/curve/loading-Stairt.jsx` |
| Animation variants for the curve component | `src/components/Preloader/curve/anim.js` |
| SCSS for the curve component | `src/components/Preloader/curve/style.scss` |
| Word cycling splash preloader | `src/components/Preloader/preloader.jsx` |
| Animation variants for the splash preloader | `src/components/Preloader/anim.js` |
| Module-scoped styles for the splash | `src/components/Preloader/style.module.scss` |

If you only need the route-to-route curtain, copy the `curve` folder and the `Curve` import usage. The splash preloader (`Preloader`) is optional.

## 3. Wire Up The Loader In The Target App
1. Import `AnimatePresence` from `framer-motion` and wrap your loader so that exit/enter animations respect route changes.
2. Track a local `isLoading` state (see `app.jsx`) that is set to `false` once the entrance animation has finished. Adjust the timeout length to match the loader timing in your target UI.
3. Render `<Curve />` while `isLoading` is `true`, and wrap each route element with its own `AnimatePresence` if you want per-route exit animations.
4. Update the `routes` map inside `loading-Stairt.jsx` so each pathname resolves to the title that should appear during the transition.
5. Ensure the loader is mounted above the rest of the layout (the SCSS sets it as `position: fixed` with a high `z-index`).

## 4. Suggested Integration Snippet
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Curve from './components/Preloader/curve/loading-Stairt';
// import your pages...

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <Curve />}</AnimatePresence>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Repeat per route */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
```

## 5. Finishing Touches
- Adjust colors and typography in `style.scss` and `style.module.scss` to match the new brand.
- Replace the `words` array in `preloader.jsx` with the greetings or phrases you want to cycle through. Remove the preloader entirely if you only need the route curtain.
- The loader reads `window.innerWidth/Height`, so guard it (`if (typeof window !== 'undefined')`) if the destination project uses server-side rendering.
- Test route changes to confirm the animation timing aligns with your content loading strategy. Increase the `setTimeout` duration if routes need more time to fetch data.
