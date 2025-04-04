import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// import BackgroundLine from '../src/image/backgroundLine.svg'
import Login from './pages/login/Login';
import { LoginAdmin } from './pages/login/Login';

import CreateEvent from './popUpForm/createEvent/CreateEvent';
import Main from './pages/main/Main';
import Header from './element/header/Header';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function EventRouteWrapper() {
  const [showModal, setShowModal] = useState(false);

  const handleSave = (eventData) => {
    console.log('Сохраненные данные:', eventData);
    setShowModal(false);
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Создать мероприятие
      </Button>

      <CreateEvent
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
        onDelete={() => {
          console.log('Удаление мероприятия');
          setShowModal(false);
        }}
      />
    </>
  );
}
function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  console.log(token);

  return (
    <div className="App">
      <Header />
      {/*  <img className='backgorund__img' src={BackgroundLine} alt="" /> */}

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={token ? <Navigate to="/main" /> : <Login setToken={setToken} />}
          />
          <Route path="/login" element={<Login setToken={setToken} />} />
          {/* <Route
            path="/createEvent"
            element={token ? <EventRouteWrapper /> : <Navigate to="/" />}
          /> */}
          <Route path="/main" element={token ? <Main token={token} /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
