import Link from 'next/link'

function Header() {
  return (
    <header>
        <div>
            <Link href="/" alt="Home">
                AS
            </Link>
        </div>
        <div>
            <ul>
                <li><Link href="/">About</Link></li>
                <li><Link href="/">Technos & Tools</Link></li>
                <li><Link href="/">Projects</Link></li>
                <li><Link href="/">Contact</Link></li>
            </ul>
        </div>
    </header>
  )
}

export default Header;