import Link from 'next/link'
import { LINKS } from '@/lib/links'

const navItems = [
  {
    index: '01',
    name: 'Portfolio',
    description: 'Web制作の実績',
    href: LINKS.portfolio,
    external: true,
  },
  {
    index: '02',
    name: 'X (Twitter)',
    description: '日々の思考と発信',
    href: LINKS.x,
    external: true,
  },
  {
    index: '03',
    name: 'Favorites',
    description: '好きなことを100個',
    href: '/favorites',
    external: false,
  },
  {
    index: '04',
    name: 'Contact',
    description: 'お仕事のご相談',
    href: `mailto:hello@kenshin-terashima.com`,
    external: true,
  },
]

export default function TopPage() {
  return (
    <div>
      {/* Header block */}
      <div style={{ padding: '40px 24px 32px' }}>
        <p
          style={{
            fontSize: '10px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#AAAAAA',
            marginBottom: '16px',
          }}
        >
          Web Designer&nbsp;&nbsp;Freelance&nbsp;&nbsp;2025—
        </p>
        <h1
          style={{
            fontSize: '52px',
            fontWeight: 300,
            letterSpacing: '-0.03em',
            lineHeight: 1.0,
            marginBottom: '12px',
          }}
        >
          けんしん
        </h1>
        <p
          style={{
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#666666',
            marginBottom: '40px',
          }}
        >
          Web Designer
        </p>

        {/* About block */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '0 20px',
            borderTop: '1px solid #E8E8E8',
            paddingTop: '20px',
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
            フリーランスでWeb制作をしています。
            デザインからコーディングまで一貫対応。
            働き方そのものをデザインすることをテーマに活動しています。
          </p>
        </div>
      </div>

      {/* Ruler */}
      <div style={{ height: '1px', background: '#0A0A0A', margin: '0 24px' }} />

      {/* Navigation label */}
      <div style={{ padding: '28px 24px 12px' }}>
        <p
          style={{
            fontSize: '10px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#AAAAAA',
          }}
        >
          Navigation
        </p>
      </div>

      {/* Nav grid 2×2 */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        {navItems.map((item, i) => {
          const isRightCol = i % 2 === 1
          const Tag = item.external ? 'a' : Link
          const extraProps = item.external
            ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
            : { href: item.href }

          return (
            <Tag
              key={item.index}
              {...(extraProps as any)}
              style={{
                display: 'block',
                position: 'relative',
                borderTop: '1px solid #E8E8E8',
                borderRight: isRightCol ? 'none' : '1px solid #E8E8E8',
                padding: '20px 24px',
                textDecoration: 'none',
                color: '#0A0A0A',
                transition: 'background 0.15s',
              }}
              className="hover:bg-[#F5F5F5] active:bg-[#E8E8E8]"
            >
              <p
                style={{
                  fontSize: '10px',
                  color: '#AAAAAA',
                  marginBottom: '12px',
                }}
              >
                {item.index}
              </p>
              <span
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '16px',
                  fontSize: '10px',
                  color: '#AAAAAA',
                }}
              >
                {item.external ? '↗' : '→'}
              </span>
              <p
                style={{
                  fontSize: '15px',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  marginBottom: '6px',
                }}
              >
                {item.name}
              </p>
              <p
                style={{
                  fontSize: '11px',
                  color: '#666666',
                  fontWeight: 300,
                }}
              >
                {item.description}
              </p>
            </Tag>
          )
        })}
      </div>
    </div>
  )
}
