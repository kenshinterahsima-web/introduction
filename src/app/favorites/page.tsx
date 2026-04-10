import Link from 'next/link'
import { favorites } from '@/data/favorites'

export const metadata = {
  title: 'Favorites | けんしん',
}

export default function FavoritesPage() {
  return (
    <div>
      {/* Header */}
      <div style={{ padding: '40px 24px 0' }}>
        <p
          style={{
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: '#AAAAAA',
            marginBottom: '40px',
          }}
        >
          03 — Favorites
        </p>
        <h1
          style={{
            fontSize: '36px',
            fontWeight: 300,
            letterSpacing: '-0.03em',
            marginBottom: '32px',
          }}
        >
          My Favorites
        </h1>

        {/* About block */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '0 20px',
            borderTop: '1px solid #0A0A0A',
            paddingTop: '20px',
            marginBottom: '0',
          }}
        >
          <span
            style={{
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#AAAAAA',
              paddingTop: '2px',
            }}
          >
            About
          </span>
          <p
            style={{
              fontSize: '13px',
              fontWeight: 300,
              lineHeight: 1.8,
              color: '#666666',
            }}
          >
            好きなことを100個並べています。自分を構成している要素です。
          </p>
        </div>
      </div>

      {/* Category list */}
      <div style={{ marginTop: '32px' }}>
        {favorites.map((cat, i) => (
          <Link
            key={cat.id}
            href={`/favorites/${cat.slug}`}
            style={{
              display: 'grid',
              gridTemplateColumns: '40px 1fr 56px 24px',
              alignItems: 'center',
              padding: '16px 24px',
              borderTop: i === 0 ? '1px solid #0A0A0A' : '1px solid #E8E8E8',
              textDecoration: 'none',
              color: '#0A0A0A',
              transition: 'background 0.15s',
            }}
            className="hover:bg-[#F5F5F5]"
          >
            <span
              style={{
                fontSize: '10px',
                color: '#AAAAAA',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span style={{ fontSize: '14px', fontWeight: 500 }}>{cat.label}</span>
            <span
              style={{
                fontSize: '10px',
                color: '#AAAAAA',
                textAlign: 'right',
              }}
            >
              {cat.items.length}
            </span>
            <span
              style={{
                fontSize: '12px',
                color: '#AAAAAA',
                textAlign: 'right',
              }}
            >
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
