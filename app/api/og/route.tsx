import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#09090b',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
          fontFamily: 'monospace',
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle, #1f1f23 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            opacity: 0.6,
            display: 'flex',
          }}
        />

        {/* Cyan accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '4px',
            height: '100%',
            background: '#0bd3d3',
            display: 'flex',
          }}
        />

        {/* Top label */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '80px',
            fontSize: '14px',
            color: '#0bd3d3',
            opacity: 0.6,
            letterSpacing: '4px',
            display: 'flex',
          }}
        >
          // PORTFOLIO 2026
        </div>

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 900,
              color: '#e2e8f0',
              lineHeight: 1,
              letterSpacing: '-2px',
              display: 'flex',
            }}
          >
            Nahuel González
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '2px',
                background: '#0bd3d3',
                display: 'flex',
              }}
            />
            <div
              style={{
                fontSize: '22px',
                color: '#0bd3d3',
                letterSpacing: '2px',
                display: 'flex',
              }}
            >
              Frontend Engineer · Data Analyst
            </div>
          </div>

          <div
            style={{
              fontSize: '18px',
              color: '#e2e8f0',
              opacity: 0.45,
              maxWidth: '700px',
              lineHeight: 1.5,
              display: 'flex',
            }}
          >
            Building products at the intersection of business logic and modern interfaces.
          </div>
        </div>

        {/* Tech pills */}
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            left: '80px',
            display: 'flex',
            gap: '12px',
          }}
        >
          {['Next.js', 'TypeScript', 'GSAP', 'Power BI', 'Tailwind'].map((tech) => (
            <div
              key={tech}
              style={{
                padding: '6px 16px',
                border: '1px solid #1f1f23',
                color: '#e2e8f0',
                opacity: 0.4,
                fontSize: '13px',
                letterSpacing: '1px',
                display: 'flex',
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            fontSize: '13px',
            color: '#0bd3d3',
            opacity: 0.5,
            letterSpacing: '2px',
            display: 'flex',
          }}
        >
          nahuelgl-portfolio.vercel.app
        </div>

        {/* Magenta accent corner */}
        <div
          style={{
            position: 'absolute',
            top: '0px',
            right: '0px',
            width: '0',
            height: '0',
            borderStyle: 'solid',
            borderWidth: '0 60px 60px 0',
            borderColor: 'transparent #f92672 transparent transparent',
            opacity: 0.5,
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
