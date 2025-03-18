import IndexPage from '@/pages/IndexPage'
import LoginPage from '@/pages/LoginPage'
import MainLayout from '@/layouts/MainLayout'
import PrivateRoute from '@/components/PrivateRoute'
import NotFoundPage from '@/pages/NotFoundPage'
import NotePage from '@/pages/NotePage'

const routes = [
  {
    element: <PrivateRoute element={<MainLayout />} />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: '/note/:id',
        element: <NotePage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]

export default routes
