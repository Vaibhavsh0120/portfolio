import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          backgroundColor: '#000',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '90px',
          color: '#fff',
          fontFamily: 'Inter, system-ui, sans-serif',

          /* subtle grid texture */
          backgroundImage:
            'linear-gradient(135deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      >
        {/* Accent glow line */}
        <div
          style={{
            width: '90px',
            height: '4px',
            backgroundColor: '#ffffff',
            marginBottom: '36px',
            boxShadow: '0 0 14px rgba(255,255,255,0.55)',
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: '92px',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 1.08,
            textShadow:
              '0 0 22px rgba(255,255,255,0.35), 0 0 2px rgba(255,255,255,0.9)',
          }}
        >
          Vaibhav Sharma
        </div>

        {/* Role */}
        <div
          style={{
            marginTop: '22px',
            fontSize: '34px',
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            opacity: 0.85,
            textShadow: '0 0 12px rgba(255,255,255,0.25)',
          }}
        >
          Software Developer
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: 'auto',
            fontSize: '22px',
            opacity: 0.6,
            letterSpacing: '0.05em',
          }}
        >
          vaibhavsh0120.vercel.app
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
