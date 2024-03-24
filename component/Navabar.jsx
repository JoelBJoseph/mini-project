"use client";

import Link from "next/link";
import style from "/component/navbar.module.css"
import {useState} from "react";

const Navabar = () => {

    const [activeItem,setactiveItem] = useState('home');

    const handleClick = (itemname) => {
        setactiveItem(itemname)
    }

    const links = [
        {
            id: 1,
            url: "/",
            title: "Home"
        },
        {
            id: 2,
            url: "/about",
            title: "About"
        },
        {
            id: 3,
            url: "/services",
            title: "Services"
        },
        {
            id:4,
            url: "/team",
            title: "Team"
        },
        {
            id: 5,
            url: "/contact",
            title: "Contact"
        },
    ]

    return(
            <nav className={style.container}>
                <ul className={style.nav}>
                    {links.map((link, index) => (
                        <Link key={link.id} href={link.url} className={style.link}>
                        <span className={activeItem === link.title ? 'active' : ""}
                              onClick={() => handleClick(link.title)}>{link.title}</span>
                        </Link>))}
                    <Link  href={"/sign-in"} className={style.link}>
                        <button className={style.staff_login} type={"button"}>Sign in</button>
                    </Link>
                </ul>
            </nav>
    );
}
export default Navabar