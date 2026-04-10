'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const isTop = pathname === '/'

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        background: '#FFFFFF',
        zIndex: 10,
        borderBottom: '1px solid #0A0A0A',
        padding: '20px 24px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Link
        href="/"
        style={{
          fontSize: '13px',
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#0A0A0A',
          textDecoration: 'none',
        }}
      >
        Kenshin
      </Link>
      {!isTop && (
        <Link
          href={pathname.split('/').slice(0, -1).join('/') || '/'}
          style={{
            fontSize: '11px',
            letterSpacing: '0.08em',
            color: '#666666',
            textDecoration: 'none',
          }}
        >
          ← Back
        </Link>
      )}
    </nav>
  )
}
