'use client'

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation"


const links = [
    {
        name: 'Dashboard',
        href: '/dashboard',
        icon: ''
    },
    {
        name: 'Tickets',
        href: '/tickets',
        icon: ''
    },
    {
        name: 'Users',
        href: '/users',
        icon: ''
    }
]


export default function NavLinks() {
    const pathname = usePathname();

    return(
        <>
        {
            links.map((link) =>{
                return(
                    <Link 
                    key={link.name}
                    href={link.href}
                    className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-red-100 hover:text-red-600 md:flex-none md:justify-start md:p-2 md:px-3",
                    {
                        "bg-red-100  text-red-600": pathname === link.href
                    }
                    )}>
                         <p className="hidden md:block">{link.name}</p>
                    </Link>
                )
            })
        }
        </>
    )
}