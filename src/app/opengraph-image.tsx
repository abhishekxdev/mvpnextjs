import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'MVP Studio - Build MVPs That Dominate and Grow'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom right, #4F46E5, #7C3AED)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              marginBottom: '20px',
            }}
          >
            MVP Studio
          </h1>
          <p
            style={{
              fontSize: '32px',
              marginTop: '20px',
            }}
          >
            Build MVPs That Dominate and Grow
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 