import { getServerSession } from "next-auth"
import { authConfig } from "../configs/auth"


export default async function Profile() {
    const session = await getServerSession(authConfig);

    return (
        <main>
            <p>это твой профиль, {session?.user?.name}</p>
        </main>
    )
}