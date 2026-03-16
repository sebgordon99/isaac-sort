import styles from '../page.module.css'

// Save as app/about/layout.jsx

export default function PageLayout({ children }) {
// Supports nested structures via the children prop
return (
<main className={styles.main}>
{children}
</main>
)
}

// Updated page.jsx: <main> layout structure moved to layout.jsx
export default function About() {
return (
<div className="About">
<h1>About</h1>
<p>This is the about page.
Nothing to see, go <Link href="/">home</Link>.</p>
</div>
)
}