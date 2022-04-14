import Head from 'next/head';
import Link from 'next/link';

export default function Header() {
    return (
        <Head>
            <title>Kino Luleå</title>
            <meta name="description" content="A Kino website for Luleå" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
        </Head>,

        <header>
            <div className="logo">
                <h1>KinoLuleå</h1>
            </div>
            <nav>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/movies"><a>Movies</a></Link></li>
                    <li><Link href="/screenings"><a>Screenings</a></Link></li>
                    <li><Link href="/account"><a>Account</a></Link></li>
                    <li><Link href="/about"><a>About us</a></Link></li>
                </ul>
            </nav>
        </header>
    )
}