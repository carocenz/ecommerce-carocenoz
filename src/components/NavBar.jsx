import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto">
        <div class="flex justify-between items-center">
          <a href="#" class="text-white text-2xl font-bold">
            Habitat
          </a>

          <ul class="flex space-x-4">
            <li>
              <NavLink to="/" class="text-white">Home</NavLink>
            </li>
            <li>
              <NavLink to="/category/vehicles" class="text-white">Vehicles</NavLink>
            </li>
            <li>
              <NavLink to="/category/electronics" class="text-white">Electronics</NavLink>
            </li>
            <li>
              <NavLink to="/category/games" class="text-white">Games</NavLink>
            </li>
          </ul>

          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
