import * as React from "react"

function Menu(props) {
  return (
    <svg width={16} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16 12v3H0v-3h16zm0-6v3H0V6h16zm0-6v3H0V0h16z"
        fill="#69707D"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default Menu;
