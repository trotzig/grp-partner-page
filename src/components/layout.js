import React from "react"

// Component imports, try to keep all the imports here and keep it tidy! :)
import NavBar from "./NavBar/index"
import Header from "./Header/index"
import Button from "./Button/index"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Header button={<Button />} />
      <main> {children}</main>
    </>
  )
}

export default Layout
