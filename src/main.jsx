import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './routes/routes.jsx'
import { RouterProvider } from 'react-router'
import BookingProvider from './providers/BookingProvider.jsx'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookingProvider>
      <RouterProvider router={router} />
      <Toaster position='top-right' />

    </BookingProvider>
</StrictMode>,
)


