/**
 * Exports the site as a landscape 1920 x 1080 PDF, one slide per page.
 * Usage: npm run export:pdf  (builds first, then serves dist with vite preview)
 */
import { preview } from 'vite'
import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'

const out = process.argv[2] ?? 'exports/the-bridesmaid-edit.pdf'
await mkdir('exports', { recursive: true })

const server = await preview({ preview: { port: 4174, strictPort: false } })
const url = server.resolvedUrls.local[0]

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } })
await page.emulateMedia({ media: 'print' })
await page.goto(url, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)
await page.pdf({ path: out, width: '1920px', height: '1080px', printBackground: true, preferCSSPageSize: true })

await browser.close()
server.httpServer.close()
console.log(`Saved ${out}`)
