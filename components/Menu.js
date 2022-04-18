import Link from 'next/link'
import { Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap'

const Menu = () => {
  return (
    <Navbar bg='dark' variant='dark' className='p-2'>
      <NavbarBrand>My Next App</NavbarBrand>
      <Nav>
        <Link href='/' passHref >
          <NavLink>Home</NavLink>
        </Link>
        <Link href='/posts' passHref >
          <NavLink>Posts</NavLink>
        </Link>
        <Link href='/jokes/random' passHref >
          <NavLink>jokes</NavLink>
        </Link>
        <Link href='/books' passHref >
          <NavLink>books</NavLink>
        </Link>
        <Link href='/about' passHref >
          <NavLink>About</NavLink>
        </Link>
      </Nav>
    </Navbar>
  )
}

export default Menu