import React from 'react'
import {
  Form
} from "react-bootstrap";

export default function SearchBar() {
  return (
    <Form  style={{width: "100%"}}>
      <Form.Group  controlId="">
        <Form.Control type="search"  placeholder="Search" />
      </Form.Group>
    </Form>
  )
}
