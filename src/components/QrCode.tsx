/** QR code for https://cydneytaylorhill.com (generated with segno, error correction M). */
const PATH =
  'M0 0.5h7m2 0h2m1 0h1m2 0h1m1 0h2m3 0h7m-29 1h1m5 0h1m1 0h1m1 0h1m2 0h4m2 0h1m2 0h1m5 0h1m-29 1h1m1 0h3m1 0h1m4 0h2m2 0h2m1 0h1m1 0h1m1 0h1m1 0h3m1 0h1m-29 1h1m1 0h3m1 0h1m1 0h2m2 0h1m1 0h2m1 0h1m1 0h2m1 0h1m1 0h3m1 0h1m-29 1h1m1 0h3m1 0h1m1 0h2m1 0h3m4 0h2m2 0h1m1 0h3m1 0h1m-29 1h1m5 0h1m2 0h9m2 0h1m1 0h1m5 0h1m-29 1h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7m-21 1h4m1 0h2m4 0h2m-20 1h1m1 0h4m1 0h1m2 0h1m1 0h1m1 0h1m2 0h1m2 0h2m1 0h2m1 0h1m-26 1h2m3 0h1m3 0h1m1 0h2m2 0h3m3 0h3m1 0h1m-28 1h2m1 0h1m1 0h2m4 0h1m1 0h3m5 0h2m1 0h1m1 0h1m-23 1h1m2 0h2m2 0h3m1 0h5m3 0h1m1 0h1m2 0h1m-28 1h6m8 0h2m2 0h1m1 0h2m2 0h1m1 0h1m-28 1h1m2 0h1m3 0h1m2 0h1m1 0h1m1 0h1m3 0h1m3 0h1m1 0h1m1 0h1m1 0h1m-28 1h1m4 0h2m2 0h1m2 0h4m1 0h3m2 0h1m1 0h1m2 0h1m-28 1h1m1 0h3m2 0h1m3 0h3m3 0h3m1 0h1m1 0h5m-27 1h1m3 0h3m2 0h4m2 0h2m1 0h1m2 0h1m1 0h1m1 0h2m-29 1h3m1 0h2m2 0h2m1 0h1m5 0h4m3 0h3m-27 1h2m2 0h1m1 0h1m1 0h1m1 0h1m1 0h3m1 0h2m1 0h2m2 0h2m3 0h1m-29 1h4m3 0h1m2 0h1m2 0h1m1 0h2m4 0h2m3 0h1m-27 1h3m1 0h1m1 0h3m1 0h5m1 0h2m2 0h5m1 0h1m-19 1h1m2 0h1m1 0h1m1 0h1m1 0h1m2 0h1m3 0h4m-28 1h7m2 0h2m1 0h1m1 0h2m3 0h2m1 0h1m1 0h1m1 0h1m-27 1h1m5 0h1m1 0h6m4 0h3m3 0h2m1 0h2m-29 1h1m1 0h3m1 0h1m1 0h2m1 0h2m2 0h1m1 0h1m1 0h6m2 0h2m-29 1h1m1 0h3m1 0h1m1 0h2m1 0h2m1 0h1m2 0h2m4 0h1m1 0h3m-28 1h1m1 0h3m1 0h1m2 0h2m4 0h1m2 0h1m1 0h2m1 0h6m-29 1h1m5 0h1m1 0h2m1 0h3m2 0h1m4 0h1m2 0h3m1 0h1m-29 1h7m3 0h2m1 0h1m1 0h2m3 0h2m1 0h2'

export function QrCode({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="-2 -2 33 33" className={className} role="img" aria-label="QR code linking to cydneytaylorhill.com" shapeRendering="crispEdges">
      <rect x="-2" y="-2" width="33" height="33" fill="rgb(var(--c-ivory))" />
      <path d={PATH} stroke="rgb(var(--c-espresso))" />
    </svg>
  )
}
