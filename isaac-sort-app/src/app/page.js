import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.intro}>
        <h1>This is the header</h1>
        <button>Log in</button>
        <button>Join the Club</button>
      </header>

      <main className={styles.main}>
        <h1
          style={{
            color: "#5a3013",
            fontSize: "75px",
            paddingTop: "100px",
            marginTop: "100px",
          }}
        >
          Welcome to SocialSpace
        </h1>
        <p style={{ color: "#5a3013", fontSize: "20px", fontStyle: "italic" }}>
          No ads, no algorithms - just people you actually know.
        </p>
        <div>
          <button>Log in</button>
          <button>Join the Club</button>
        </div>
      </main>

      <footer>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
        </div>
      </footer>
    </div>
  );
}
