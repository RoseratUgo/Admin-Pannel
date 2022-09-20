import Home from "../src/pages/home/Home"
import Login from "../src/pages/login/Login"
import List from "../src/pages/list/List"
import Single from "../src/pages/single/Single"
import New from "../src/pages/new/New"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home/>} />
            <Route path="login" element={<Login/>}/>
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":usersId" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>

            <Route path="products">
              <Route index element={<List/>}/>
              <Route path=":productsId" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
