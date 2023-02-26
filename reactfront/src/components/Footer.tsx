// Header for the portfolio page.
// layout has 3 links to other pages.
// # home --> Self link 
// # blogs --> to blogs page
// # projects --> to projects page
import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Footer() {
    return (
<>
<footer className={`antialiased  text-2xl font-fira-code 
`}>
<nav >
<hr className={styles.solid_line} />
<div  className={`${styles.header_titles_bar} flex justify-center`}>
<div className="flex space-x-80">
<Link href="https://github.com/parz3val" passHref className=""> 
<span className={``}>#github</span>
</Link>

<Link href="mailto:harriskunwar@hotmail.com" passHref> 
<span> #email </span>
</Link>

<Link href="https://linkedin.com/in/harriskunwar" passHref> 
<span> #linkedin </span>
</Link>

</div>
</div>
<hr className={styles.solid_line} />
</nav>
</footer>
</>
    );
}

