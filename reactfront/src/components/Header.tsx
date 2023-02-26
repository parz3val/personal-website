// Header for the portfolio page.
// layout has 3 links to other pages.
// # home --> Self link 
// # blogs --> to blogs page
// # projects --> to projects page
import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
    return (
<>
<header className={`antialiased  text-2xl font-fira-code 
`}>
<nav >
<hr className={styles.solid_line} />
<div  className={`${styles.header_titles_bar} flex justify-center`}>
<div className="flex space-x-80">
<Link href="/" passHref className=""> 
<span className={``}>{"# <_$"} </span>
</Link>

<Link href="/blogs" passHref> 
<span> #blogs </span>
</Link>

<Link href="/projects" passHref> 
<span> #projects </span>
</Link>

</div>
</div>
<hr className={styles.solid_line} />
</nav>
</header>
</>
    );
}

