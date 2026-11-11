/*
 * All campaign copy and verified data in one place.
 * Brand-specific versions of the site change this file, not the components.
 * Rules: no em dashes, no invented metrics, prospective partners are never shown as confirmed.
 */
import coverPortrait from '../assets/images/cover-bridal-portrait.webp'
import proposalPhoto from '../assets/images/engagement-proposal.webp'
import bouquetPhoto from '../assets/images/bridal-bouquet.webp'
import courthousePhoto from '../assets/images/courthouse-couple.webp'
import ringPortrait from '../assets/images/creator-ring-portrait.webp'
import versacePhoto from '../assets/images/campaign-versace.webp'
import michaelKorsPhoto from '../assets/images/campaign-michael-kors.webp'
import kenyaPoster from '../assets/images/campaign-kenya-moore-poster.webp'
import boxIllustration from '../assets/illustrations/proposal-box.svg'
import frameReveal from '../assets/illustrations/frame-curated-reveal.svg'
import frameBeauty from '../assets/illustrations/frame-beauty-edit.svg'
import frameProposal from '../assets/illustrations/frame-proposal-moment.svg'

export const sections = [
  { id: 'cover', number: '00', short: 'Cover', title: 'The Bridesmaid Edit' },
  { id: 'story', number: '01', short: 'The Story', title: 'Eleven Women. One Beautiful Beginning.' },
  { id: 'box', number: '02', short: 'The Box', title: 'A Gift Worth Remembering.' },
  { id: 'content', number: '03', short: 'Storytelling', title: 'Beyond the Box.' },
  { id: 'creator', number: '04', short: 'Partner', title: 'Let’s Create Something Beautiful Together.' },
] as const

export type SectionId = (typeof sections)[number]['id']

export const creator = {
  name: 'Cydney Hill',
  handle: '@therealcydneytaylor',
  portfolio: 'cydneytaylorhill.com',
  portfolioUrl: 'https://cydneytaylorhill.com',
  instagramUrl: 'https://www.instagram.com/therealcydneytaylor',
  tiktokUrl: 'https://www.tiktok.com/@therealcydneytaylor',
  location: 'South Florida',
  weddingDate: 'June 5, 2027',
}

export const cover = {
  eyebrow: 'A Curated Bridal Beauty Partnership Experience',
  issue: 'Vol. 01',
  subheadline: 'An Editorial Celebration of Friendship, Beauty & the Moments Before “I Do”',
  byline: 'Cydney Hill | June 2027',
  seal: 'Eleven women · One celebration · ',
  edition: 'Master Partnership Presentation',
  coverLines: ['Friendship, beauty', 'and the moments', 'before “I do”'],
  verticalLine: 'Modern romance',
  image: {
    src: coverPortrait,
    alt: 'Cydney Hill in an ivory lace corset gown with a satin skirt and neck scarf, leaning on a black and brass railing',
    width: 1131,
    height: 2000,
  },
}

export const story = {
  eyebrow: 'The Story',
  headline: ['Eleven Women.', 'One Beautiful', 'Beginning.'],
  lede: 'Some of life’s most meaningful moments are shared with the women who have been there through every chapter.',
  body: [
    'As I prepare for my wedding, I want to celebrate the 11 women standing beside me with something more personal than a traditional bridesmaid proposal.',
    'The Bridesmaid Edit brings together friendship, beauty, and thoughtful gifting in a curated experience designed to create lasting memories.',
    'Through authentic storytelling and elevated content, participating brands have an opportunity to become part of these meaningful moments.',
  ],
  numeral: '11',
  stats: [
    { value: '11', label: 'Bridesmaids, including four maids of honor' },
    { value: 'One', label: 'Curated Experience' },
    { value: 'Multiple', label: 'Storytelling Moments' },
  ],
  images: {
    proposal: {
      src: proposalPhoto,
      alt: 'Cydney’s engagement: her partner kneels on a stage in front of a brick wall, holding her hand while she laughs',
      width: 1212,
      height: 1600,
      caption: 'Where it began. The proposal.',
    },
    bouquet: {
      src: bouquetPhoto,
      alt: 'Bridal bouquet of white calla lilies, anthurium, burgundy orchids and trailing amaranthus against a brick wall',
      width: 844,
      height: 1500,
    },
  },
}

export const box = {
  eyebrow: 'The Curated Proposal Box',
  headline: ['A Gift Worth', 'Remembering.'],
  subheadline: 'Thoughtfully Curated. Beautifully Presented. Personally Meaningful.',
  body: [
    'Each proposal box will be designed as a personalized expression of gratitude, featuring an intentional selection of beauty, fragrance, and self-care essentials.',
    'Every product will contribute to a cohesive experience that feels luxurious, personal, and genuinely useful.',
  ],
  categoriesLabel: 'Potential Product Categories',
  categories: [
    'Fragrance minis and travel sprays',
    'Lip care and skincare essentials',
    'Body care and self-care products',
    'Haircare and beauty accessories',
    'Bridal-day essentials',
  ],
  card: { line: '[Name], will you be my', word: 'Bridesmaid?' },
  captionLabel: 'Concept',
  details: [
    { title: 'The personalized card', crop: { x: 130, y: 70, w: 440, h: 240 }, card: true },
  ],
  /* Annotation positions on the illustration, as percentages, in the same order as categories */
  hotspots: [
    { x: 59.1, y: 56.7 },
    { x: 53.6, y: 82 },
    { x: 64.7, y: 50.5 },
    { x: 61.5, y: 73.2 },
    { x: 50.2, y: 47.4 },
  ],
  caption: 'Conceptual visualization. Final products and packaging subject to confirmed partnerships.',
  image: {
    src: boxIllustration,
    alt: 'Illustration of an open ivory magnetic proposal box from above: a personalized card in the lid, satin lining, a silver tray with a photo strip, an engraved compact, unbranded serum, ampoule, lip balm, tortoiseshell comb and hand cream, beside a burgundy satin wrapped box, calla lilies and a dusty rose ribbon',
    width: 900,
    height: 840,
  },
}

export const storyboard = {
  eyebrow: 'Content & Brand Storytelling',
  headline: ['Beyond the', 'Box.'],
  subheadline: 'A Story That Continues Long After the Proposal.',
  body: 'The Bridesmaid Edit is designed to create authentic opportunities for brand storytelling throughout the bridal journey. From the excitement of opening a proposal box to the beauty rituals leading up to the wedding, participating brands can become part of moments that feel personal, relevant, and naturally shareable.',
  frames: [
    {
      number: '01',
      title: 'The Curated Reveal',
      text: 'A cinematic Reel or TikTok showcasing the proposal box assembly, thoughtful product selection, and final presentation.',
      src: frameReveal,
      alt: 'Concept illustration: gift boxes wrapped in burgundy and champagne satin with a white calla lily',
      kind: 'Illustration',
    },
    {
      number: '02',
      title: 'The Beauty Edit',
      text: 'Editorial product close-ups, beauty routines, and storytelling highlighting selected brand partners.',
      src: frameBeauty,
      alt: 'Concept illustration: an unbranded fragrance bottle, lip oil and cream jar on champagne silk',
      kind: 'Illustration',
    },
    {
      number: '03',
      title: 'The Proposal Moment',
      text: 'Authentic bridesmaid reactions and personal moments as the gifts are revealed.',
      src: frameProposal,
      alt: 'Concept illustration: a handwritten proposal card, a photo strip, a calla lily and a burgundy ribbon on ivory satin',
      kind: 'Illustration',
    },
    {
      number: '04',
      title: 'The Wedding Journey',
      text: 'Additional opportunities for bridal preparation, bachelorette celebrations, getting-ready content, and wedding-weekend essentials.',
      src: courthousePhoto,
      alt: 'Cydney in an ivory lace corset gown holding white calla lilies, walking down courthouse steps with her partner in a burgundy suit',
      kind: 'Cydney’s photograph',
    },
  ],
  stripLabel: 'Proposed content concepts',
  frameLabel: 'Sc.',
  noteLabel: 'Note',
  disclaimer: 'Proposed content concepts, not completed deliverables. Frames 01 to 03 are original illustrations; frame 04 is Cydney’s own photograph.',
}

export const credentials = {
  eyebrow: 'The Creator & Partnership Invitation',
  headline: ['Let’s Create', 'Something', 'Beautiful Together.'],
  intro:
    'Cydney Hill is a South Florida-based beauty, fashion, wellness, and lifestyle content creator who brings together thoughtful storytelling, strategic marketing, and polished visual content. With experience collaborating with established beauty and fragrance brands, she creates content designed to connect with audiences while supporting meaningful brand visibility.',
  brands: [
    'Valentino',
    'Versace',
    'Maison Margiela',
    'Michael Kors',
    'Estée Lauder',
    'Kenya Moore Haircare',
    'Juvia’s Place',
    'Maybelline',
  ],
  brandsLabel: 'Selected Brand Experience',
  featuredLabel: 'Featured campaign',
  contactLabels: { social: 'Instagram & TikTok', portfolio: 'Portfolio' },
  highlight: {
    value: '1.3M',
    label: 'Organic views',
    campaign: 'Kenya Moore Hair Spa grand opening',
    note: 'One short-form video, posted on Kenya Moore’s profile during launch week.',
    metrics: [
      { value: '78.4K', label: 'Likes' },
      { value: '5,739', label: 'Comments' },
      { value: '9,988', label: 'Shares' },
      { value: '1,556', label: 'Saves' },
    ],
    video: {
      src: '/media/kenya-moore-hair-spa.mp4',
      poster: kenyaPoster,
      title: 'Kenya Moore Hair Spa grand opening video by Cydney Hill',
      caption: 'Grand opening video',
    },
  },
  opportunitiesLabel: 'Partnership Opportunities',
  opportunities: [
    'Product gifting for 11 bridesmaids',
    'Sponsored short-form content',
    'Dedicated product storytelling',
    'Wedding journey brand integrations',
    'Additional licensing and usage opportunities by agreement',
  ],
  closing: 'Let’s make the moments before “I do” just as unforgettable.',
  closingLead: 'Let’s make the moments before “I\u00a0do” just as',
  closingAccent: 'unforgettable.',
  monogram: ['C', 'H'],
  breakdownLabel: 'Engagement breakdown',
  images: {
    portrait: {
      src: ringPortrait,
      alt: 'Cydney Hill smiling in an ivory lace corset, extending her hand to show a marquise engagement ring',
      width: 856,
      height: 1836,
    },
    versace: {
      src: versacePhoto,
      alt: 'Cydney holding a Versace Dylan Purple fragrance bottle beside her face',
      width: 900,
      height: 1600,
      label: 'Versace',
    },
    michaelKors: {
      src: michaelKorsPhoto,
      alt: 'Cydney holding a rose gold Michael Kors fragrance bottle to her cheek against a blue sky',
      width: 900,
      height: 1600,
      label: 'Michael Kors',
    },
  },
}
