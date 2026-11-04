import { mkdir, readFile, writeFile } from 'node:fs/promises'

const origin = 'https://jennyuiux.com'
const template = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')
const pages = [
  ['find-my-park', 'Find My Park — Jenny Kim', 'A context-aware park discovery experience. A UX and product design case study by Jenny Kim.'],
  ['aperture', 'Aperture Coffee Bar — Jenny Kim', 'Connecting coffee, live jazz, and community through service and web design. A case study by Jenny Kim.'],
  ['powerpause', 'PowerPause — Jenny Kim', 'Making home energy controls clearer and easier to use. A UX and interaction design case study by Jenny Kim.'],
  ['condo-connect', 'Condo Connect — Jenny Kim', 'Helping residents discover, book, and manage shared amenities. A service design case study by Jenny Kim.'],
  ['rewardrobe', 'RE:WARDROBE — Jenny Kim', 'Worn forward. A personal outdoor wardrobe, virtual styling, and lookbook experience designed by Jenny Kim.'],
]
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

for (const [slug, title, description] of pages) {
  const url = `${origin}/work/${slug}/`
  const html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<meta (?:property="og:title"|name="twitter:title") content=")[^"]*/g, `$1${escape(title)}`)
    .replace(/(<meta (?:name="description"|property="og:description"|name="twitter:description") content=")[^"]*/g, `$1${escape(description)}`)
  const directory = new URL(`../dist/work/${slug}/`, import.meta.url)
  await mkdir(directory, { recursive: true })
  await writeFile(new URL('index.html', directory), html)
}
console.log(`Generated sharing metadata for ${pages.length} case studies.`)
