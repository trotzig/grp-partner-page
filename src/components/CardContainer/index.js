import React from "react"
import "./index.scss"

const CardContainer = ({ children }) => {
  return (
    <>
      <div className="card-container">{children}</div>
    </>
  )
}

export default CardContainer
