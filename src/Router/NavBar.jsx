import { useContext } from "react"
import Context from "../Context/Context"
import { Navbar, Nav, Form, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"

const NavBar = () =>
{
  
  const {setSearch, search} = useContext(Context)
  const navigate = useNavigate()

  const find =(e)=>
    {
        e.preventDefault()
        navigate('/results/'+search)
        window.location.reload()
    }

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="md" className="fixed-top">
      <Navbar.Brand href="/" className="navB">
       Anime </Navbar.Brand>
       <div className="Navig">
          <Nav className="links">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/top">Top Airing</Nav.Link>
            <Nav.Link href="/genres">Genres</Nav.Link>
          </Nav>
          <div className="search">
          <Form onSubmit={find} className="d-flex">
            <Form.Control
              type="search"
              placeholder="search"
              className="m-1"
              aria-label="Search"
              required
              onChange={(e)=>setSearch(e.target.value)}
            />
            <Button type="submit" variant="light" className="image"><img width={'18px'} src="/search.png" alt="search" className="mx-2"/></Button>
          </Form>
          </div>
          
      </div>
    </Navbar>
  )
}

export default NavBar