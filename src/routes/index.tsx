import { lazy } from 'react'
import { Navigate, type RouteProps } from 'react-router-dom'

//home
const About = lazy(() => import('@/pages/about/index'))
const BlogClassic = lazy(() => import('@/pages/blog/classic/index'))
const BlogGrid = lazy(() => import('@/pages/blog/grid/index'))
const BlogSingle = lazy(() => import('@/pages/blog/single/index'))
const Contact = lazy(() => import('@/pages/contact/index'))
const HomeImage = lazy(() => import('@/pages/home/image/index'))
// const HomeLight = lazy(() => import('@/pages/home/light/index'))
// const HomeDark = lazy(() => import('@/pages/home/dark/index'))
const PortfolioMasonry = lazy(() => import('@/pages/portfolio/masonry/index'))
const PortfolioGrid = lazy(() => import('@/pages/portfolio/grid/index'))
const Service = lazy(() => import('@/pages/service/index'))

const ShopLayout = lazy(() => import('@/pages/shop/layout/index'))
const ShopDetail = lazy(() => import('@/pages/shop/detail/index'))
const ShopAccount = lazy(() => import('@/pages/shop/account/index'))

export type RoutesProps = {
  path: RouteProps['path']
  name: string
  element: RouteProps['element']
  exact?: boolean
}

const initialRoutes: RoutesProps[] = [
  {
    path: '/',
    name: 'root',
    element: <Navigate to="/home/image" />,
  },
]

const homePages: RoutesProps[] = [
  {
    path: '/about',
    name: 'About',
    element: <About />,
  },
  {
    path: '/blog/classic',
    name: 'BlogClassic',
    element: <BlogClassic />,
  },
  {
    path: '/blog/grid',
    name: 'BlogGrid',
    element: <BlogGrid />,
  },
  {
    path: '/blog/single',
    name: 'BlogSingle',
    element: <BlogSingle />,
  },
  {
    path: '/contact',
    name: 'Contact',
    element: <Contact />,
  },
  {
    path: '/home/image',
    name: 'HomeImage',
    element: <HomeImage />,
  },
  // {
  //   path: '/home/light',
  //   name: 'HomeLight',
  //   element: <HomeLight />,
  // },
  // {
  //   path: '/home/dark',
  //   name: 'HomeDark',
  //   element: <HomeDark />,
  // },
  {
    path: '/portfolio/masonry',
    name: 'PortfolioMasonry',
    element: <PortfolioMasonry />,
  },
  {
    path: '/portfolio/grid',
    name: 'PortfolioGrid',
    element: <PortfolioGrid />,
  },
  {
    path: '/service',
    name: 'Service',
    element: <Service />,
  },
  {
    path: '/shop/layout',
    name: 'ShopLayout',
    element: <ShopLayout />,
  },
  {
    path: '/shop/detail',
    name: 'ShopDetail',
    element: <ShopDetail />,
  },
  {
    path: '/shop/account',
    name: 'ShopAccount',
    element: <ShopAccount />,
  },

]

export const appRoutes = [...initialRoutes, ...homePages]
