
import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './components/layout';
import Indexpage from './components/pages/indexpage';
import Login from './components/pages/loginpage';
import Registerpage from './components/pages/registerpage';
import { UserContextProvider } from './usercontext';
import Createpost from './components/pages/createpost';
import Postpage from './components/pages/postpage';
import Editpost from './components/pages/editpost';

function App() {
  return (
    <UserContextProvider>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={
            <Indexpage />
          } />
          <Route path={'/login'} element={
            <Login />
          } />
          <Route path={'/register'} element={
            <Registerpage />
          } />
          <Route path={'/create'} element={
            <Createpost />
          } />
          <Route path={'/post/:id'} element={
            <Postpage />
          } />
          <Route path={'/edit/:id'} element={
            <Editpost />
          } />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}


export default App;
