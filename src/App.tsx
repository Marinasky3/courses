import React, { useState } from 'react'
import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { CoursePage } from './pages/CoursePage/CoursePage'
import { AuthPage } from './pages/AuthPage/AuthPage'

const App = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {isLogin ? (
            <>
              <Route
                path="/"
                element={<HomePage setIsLogin={setIsLogin} isLogin={isLogin} />}
              />
              <Route
                path="/course/:courseId"
                element={
                  <CoursePage setIsLogin={setIsLogin} isLogin={isLogin} />
                }
              />
            </>
          ) : (
            <Route
              path="/auth"
              element={<AuthPage setIsLogin={setIsLogin} isLogin={isLogin} />}
            />
          )}
           <Route path="*" element={<AuthPage setIsLogin={setIsLogin} isLogin={isLogin} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
