```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const location = useLocation();
  console.log(location); // Inspect the location object to help understand the routing
  return (
    <div>
      <h1>Home</h1>
      <div>Current Path: {location.pathname}</div>
    </div>
  );
}

function About() {
  return <div>About</div>;
}
```