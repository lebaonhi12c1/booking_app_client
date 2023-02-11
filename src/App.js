
import './globalStyle.scss'
import {router} from './router'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
function App() {
  return (
      <div className="app">
        <Router>
          <Routes>
            {router.map(route =>{
              var Layout = route.layout
              if(route.layout == null){
                Layout = 'div'
              }
              const Page = route.element
              return (
                <Route 
                  key={ uuidv4()} 
                  path={route.path}
                  element = {<Layout><Page/></Layout>}
                >
                </Route>
              )
            })}
          </Routes>
        </Router>
      </div>
  );
}

export default App;
