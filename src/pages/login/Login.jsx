import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Обработка данных формы
    console.log({ email, password, rememberPassword });
  };

  return (
    <div className="container mt-5 loginFon">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Вход</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Пароль
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberPassword"
                    checked={rememberPassword}
                    onChange={(e) => setRememberPassword(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="rememberPassword">
                    Запомнить пароль
                  </label>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Войти
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Login };
