//import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Сервис генерации временных кодов для 2FA</h1>
      <p>Для продолжения работы войдите в Ваш аккаунт</p>
    </main>
  )
}
