'use client'

import Image from 'next/image'
import { FavoriteItem } from '@/data/favorites'

export default function ImageGrid({ items }: { items: FavoriteItem[] }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1px',
        background: '#E8E8E8',
        borderTop: '1px solid #E8E8E8',
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            background: '#FFFFFF',
            aspectRatio: '1 / 1',
            overflow: 'hidden',
            position: 'relative',
          }}
          className="group"
        >
          {item.image ? (
            <Image
              src={item.image}
              fill
              style={{ objectFit: 'cover' }}
              alt={item.name}
            />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                background: '#F5F5F5',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              <span style={{ fontSize: '22px' }}>{item.emoji}</span>
              <span
                style={{
                  fontSize: '9px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#666666',
                  textAlign: 'center',
                  padding: '0 4px',
                }}
              >
                {item.name}
              </span>
            </div>
          )}

          {/* Hover overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(10,10,10,0.88)',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '8px',
              opacity: 0,
              transition: 'opacity 0.18s',
            }}
            className="group-hover:opacity-100"
          >
            <span
              style={{
                fontSize: '9px',
                color: '#FFFFFF',
                fontWeight: 300,
                lineHeight: 1.5,
              }}
            >
              {item.comment}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
