import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';

const Navbar = () => {
    const [open, setOpen] = useState(false)
  const routes = [
    { path: "/", name: "Home", id: "home" },
    { path: "/about", name: "About", id: "about" },
    { path: "/contact", name: "Contact", id: "contact" },
    { path: "/products", name: "Products", id: "products" },
    { path: "/profile/:id", name: "UserProfile", id: "user-profile" },
  ];

  return (
    <nav className="text-black bg-red-400 p-6">
        <div className=" md:hidden text-4xl" onClick={() => setOpen(!open)}>
            {
                open === true ? <CgClose></CgClose> : <HiMenuAlt1></HiMenuAlt1>
            }
        
        </div>
      <ul className={`md:flex absolute md:static duration-1000
      ${open ? 'top-16' : '-top-60'}
      bg-yellow-200 px-6`}>
        {routes.map((route) => (
         <Link  key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
