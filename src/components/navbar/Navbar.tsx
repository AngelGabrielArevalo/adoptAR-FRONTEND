// components/Navbar.js

import Link from "next/link";

function Navbar() {
    return (
        <nav className="bg-gray-800 p-4 fixed w-full top-0 z-50">
            <div className="w-full flex justify-between items-center px-2">
                <div>
                    <Link href="/">AdoptAR Amor</Link>
                </div>
                <div>
                    <button>
                        <Link href="/login">Ingresar</Link>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
