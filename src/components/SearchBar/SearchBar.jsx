import React from 'react'
import {
  Form
} from "react-bootstrap";

export default function SearchBar() {
  return (
    <Form>
      <Form.Control type="search"  placeholder="Search" />
    </Form>
  )
}
