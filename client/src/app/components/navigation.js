"use client"

import { useSession } from "next-auth/react"
import Link from "next/link";

export default function Navigation() {
    const session = useSession();

    return (
        <nav>
            <Link href='/'>Домой</Link>
            {session?.data && <Link href="/services">Сервисы</Link>}
            {session?.data && <Link href="/profile">Профиль</Link>}
        </nav>
    )
}