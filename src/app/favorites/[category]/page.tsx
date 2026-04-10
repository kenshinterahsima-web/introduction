import { notFound } from 'next/navigation'
import { favorites } from '@/data/favorites'
import ImageGrid from '@/components/ImageGrid'

export function generateStaticParams() {
  return favorites.map((cat) => ({ category: cat.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const cat = favorites.find((c) => c.slug === category)
  if (!cat) return {}
  return { title: `${cat.label} | けんしん` }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const cat = favorites.find((c) => c.slug === category)
  if (!cat) notFound()

  return (
    <div>
      {/* Header */}
      <div style={{ padding: '40px 24px 32px' }}>
        <p
          style={{
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: '#AAAAAA',
            marginBottom: '20px',
          }}
        >
          {cat.index} — {cat.label}
        </p>
        <h1
          style={{
            fontSize: '36px',
            fontWeight: 300,
            letterSpacing: '-0.03em',
            marginBottom: '32px',
          }}
        >
          {cat.label}
        </h1>

        {/* About block */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '0 20px',
            borderTop: '1px solid #0A0A0A',
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
            Items
          </span>
          <p
            style={{
              fontSize: '13px',
              fontWeight: 300,
              lineHeight: 1.8,
              color: '#666666',
            }}
          >
            {cat.items.length}個のアイテム。ホバーで一言コメントが表示されます。
          </p>
        </div>
      </div>

      {/* Image grid */}
      <ImageGrid items={cat.items} />
    </div>
  )
}
