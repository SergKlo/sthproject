import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Routes, Route} from 'react-router-dom';


const App = (props) => {

  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>

            <Routes>
              <Route path='/dialogs/*' element={<Dialogs  store={props.state} />}/>

              <Route path='/profile/*' element={<Profile  state={props}
                                                          dispatch={props.dispatch} />} />
            </Routes>
        </div>
      </div>

  )
}

export default App;
        //   <Switch>
        //   <Route path="/about">
        //     <About />
        //   </Route>
        //   <Route path="/users">
        //     <Users />
        //   </Route>
        //   <Route path="/">
        //     <Home />
        //   </Route>
        // </Switch>