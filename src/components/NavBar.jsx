import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

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
                            <a href="#" class="text-white">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-white">
                                Productos
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-white">
                                Nosotros
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-white">
                                Contacto
                            </a>
                        </li>
                    </ul>

                    
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
