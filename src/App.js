import './App.css';
import { Suspense, lazy } from "react"
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function App() {
  return (
    <div className="App">
      <h1>App comp</h1>
      <Suspense fallback={<div>Please wait....</div>}>
        <Home />
        <About />
      </Suspense>
    </div>
  );
}

export default App;
