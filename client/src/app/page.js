"use client"

//import Image from 'next/image'
import styles from './page.module.css'
import {useSession} from 'next-auth/react'

export default function Home() {
  //потом поделю на стр и раскидаю
  const session = useSession();
  console.log(session);

  return (
    <main className={styles.main}>
      <h1>Сервис генерации временных кодов для 2FA</h1>
      <p>Для продолжения работы войдите в Ваш аккаунт</p>
      {session?.data && <p>Посетитель авторизован</p>}
    </main>
  )
}
