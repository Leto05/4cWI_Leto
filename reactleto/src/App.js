import './App.css';
import AboutContainer from './components/movieComponents/aboutContainer';
import IndexContainer from './components/movieComponents/indexContainer';
import PeopleContainer from './components/peopleContainer';

//jsx Sprache
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/about",
    element: <div><AboutContainer /></div>,
  },
  {
    path: "/index",
    element:
      <div><IndexContainer /></div>,
  },
  {
    path: "/People",
    element: <div><PeopleContainer /></div>,
  },
  {
    path: "/",
    element: <div>Hello</div>,
  },
  {
    path: "/test",
    element: <div>Test</div>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
/*<div className="App">
<PeopleContainer/>
</div>*/