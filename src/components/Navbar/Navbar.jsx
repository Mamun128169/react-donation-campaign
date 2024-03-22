import { NavLink } from "react-router-dom"
import logo from "../../assets/Logo.png"
import './Navbar.css'

const Navbar = () => {
  const links = <>
    <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"/donation"}>Donation</NavLink>
    <NavLink to={"/statistics"}>Statistics</NavLink>
  </>

  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="flex-1">
        <NavLink to={"/"}>
          <img className="w-[200px]" src={logo}alt="logo" />
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="text-lg font-medium menu menu-horizontal px-1 flex gap-4 md:gap-10">
         {links}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
