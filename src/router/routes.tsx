import CategoryPage from '@/pages/CategoryPage'
import CharacterPage from '@/pages/CharacterPage'
import LocationPage from '@/pages/LocationPage'
import EpisodePage from '@/pages/EpisodePage'
import IndexPage from '@/pages/IndexPage'
import LoginPage from '@/pages/LoginPage'
import MainLayout from '@/layouts/MainLayout'
import PrivateRoute from '@/components/PrivateRoute'
import NotFoundPage from '@/pages/NotFoundPage'

const routes = [
  {
    element: <PrivateRoute element={<MainLayout />} />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      }],
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
