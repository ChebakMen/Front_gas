import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import BackgroundLine from '../src/image/backgroundLine.svg'
import { Login } from './pages/login/Login';
import { Registration } from './element/regisrtation/Resistration';
import CreateEvent from './popUpForm/createEvent/CreateEvent';
import Main from './pages/main/Main';

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
  return (
    <div className="App">
      {/* <img className='backgorund__img' src={BackgroundLine} alt="" /> */}

      <BrowserRouter>
        <Routes>
          {/* Временная заглушка, заменить на основую ссылку главное страницы */}
          <Route path="/" element={<Login />} />

          <Route path="/createEvent" element={<EventRouteWrapper />} />

          <Route path="/main" element={<Main />} />
          {/* Рабочая ссылка, настроена верно */}
          <Route path="/registration" element={<Registration />} />
          {/* <Route path='/resertPassword' element={} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
