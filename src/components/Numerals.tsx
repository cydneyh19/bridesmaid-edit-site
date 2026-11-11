/**
 * Cormorant Garamond only has old-style figures ("11" reads as "ıı").
 * Wrap any digits inside serif copy so they render in Inter.
 */
export function Numerals({ text }: { text: string }) {
  const parts = text.split(/(\d[\d.,]*)/)
  return (
    <>
      {parts.map((part, i) =>
        /^\d/.test(part) ? (
          <span key={i} className="font-sans text-[0.82em] font-light tracking-normal">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  )
}
