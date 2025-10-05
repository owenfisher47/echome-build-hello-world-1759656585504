import styles from './page.module.css'

export default function Home() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Hello, World! 👋</h1>
        <p className={styles.subtitle}>
          Welcome to your Next.js application
        </p>
        <div className={styles.info}>
          <p className={styles.date}>Today is {currentDate}</p>
          <p className={styles.description}>
            This is a simple Hello World page built with Next.js, TypeScript, and CSS modules.
          </p>
        </div>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>⚡ Fast</h3>
            <p>Built with Next.js for optimal performance</p>
          </div>
          <div className={styles.feature}>
            <h3>🔒 Type Safe</h3>
            <p>Written in TypeScript for better development experience</p>
          </div>
          <div className={styles.feature}>
            <h3>🎨 Styled</h3>
            <p>Beautiful gradient background and clean design</p>
          </div>
        </div>
      </div>
    </main>
  )
}