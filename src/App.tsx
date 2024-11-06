import "./App.css";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import TradingPage from "./pages/Trading";
import StoresPage from "./pages/Stores";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    children:[
      {
        index:true,
        element:<HomePage/>
      },
      {
        path:"events",
        element:<EventsPage/>
      },
      {
        path:"stores",
        element:<StoresPage/>
      },
      {
        path:"trading",
        element:<TradingPage/>
      }
    ]
  }
]);




function App() {
  // const [count, setCount] = useState(0)

  return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    // <>
    //   <NavBar />
    //   <HomePage />
    // </>

    <RouterProvider router={router} />
  );
}

export default App;
