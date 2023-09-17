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
    <nav>
        <div className=" md:hidden text-4xl" onClick={() => setOpen(!open)}>
            {
                open === true ? <CgClose></CgClose> : <HiMenuAlt1></HiMenuAlt1>
            }
        
        </div>
      <ul className="md:flex">
        {routes.map((route) => (
         <Link  key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
