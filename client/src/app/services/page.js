"use client"

import { useSession } from "next-auth/react"

export default function Services() {
    const session = useSession();

    return (
        <main>
            <p>Здесь можно будет добавлять/удалять сервисы и получать коды</p>
        </main>
    )
}