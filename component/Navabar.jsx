"use client";

import Link from "next/link";
import {useRouter} from "next/router";

const Navabar = () => {

    const router = useRouter([])

    return (

        <nav>
            <ul>
                <li>
                    <Link href="/" passHref>
                        <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="./Home/about" passHref>
                        <a className={router.pathname === '/Home/about' ? 'active' : ''}>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/Home/services" passHref>
                        <a className={router.pathname === '/Home/services' ? 'active' : ''}>Services</a>
                    </Link>
                </li>
                <li>
                    <Link href="/Home/contact" passHref>
                        <a className={router.pathname === '/Home/contact' ? 'active' : ''}>Services</a>
                    </Link>
                </li>
                {/* Add more menu items as needed */}
            </ul>
        </nav>

    );
}
export default Navabar