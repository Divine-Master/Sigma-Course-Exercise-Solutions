import React from 'react'


const Navbar = () => {
  return (
    <nav className="flex justify-between bg-gray-900 text-white p-1.5">
      <div className="m-0.5">
        <span className="text-2xl p-0.5 md:text-4xl md:p-1.5">CardCreator</span>
      </div>
      <div className="flex justify-center align-middle p-0.5">
        <ul className="flex m-1 gap-5">
          <li><a href="/">Home</a></li>
          <li><a href="/">About us</a></li>
          <li><a href="/">Support us</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar