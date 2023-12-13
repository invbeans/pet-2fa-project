"use client"

import Link from 'next/link';
//import Image from 'next/image'
import styles from './page.module.css'
import {useSession, signIn, signOut} from 'next-auth/react'

export default function Home() {
  //потом поделю на стр и раскидаю
  const session = useSession();
  console.log(session);

  return (
    <main className={styles.main}>
      <h1>Сервис генерации временных кодов для 2FA</h1>
      {session?.data ? <p>Привет, {session.data.user.name}</p> : <p>Для продолжения работы войдите в Ваш аккаунт</p>}
      {session?.data && <p>Посетитель авторизован</p>}
      {session?.data ? <Link href="#" onClick={() => signOut({callbackUrl: "/"})}>Выйти</Link>
      : <Link href="/api/auth/signin" onClick={() => signIn({callbackUrl: "/"})}>Войти</Link>}
    </main>
  )
}
