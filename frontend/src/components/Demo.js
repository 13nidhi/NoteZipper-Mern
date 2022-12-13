import React, { useState } from 'react'

const Demo = (props) => {
    const [compState, SetCompState] = useState("Component state");

  return (
    <div>
      <h1>hello {props.name}</h1>
      <span>this is a {compState}</span>
    </div>
  )
}

export default Demo
