import React from 'react'
import {Navbar, Form, FormControl, Button} from 'react-bootstrap'

function Search() {
  return (
      <>
      <Navbar bg="light" expand="lg">
  
 
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
 
</Navbar>
    
      
      </>
  )
}
export default Search