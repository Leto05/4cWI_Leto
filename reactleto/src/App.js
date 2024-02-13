import logo from './logo.svg';
import './App.css';
import PeopleContainer from './components/peopleContainer';
//jsx Sprache
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/People",
    element: <div><PeopleContainer/></div>
  },
  {
    path: "/",
    element: <div>Hello</div>,
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