export const profile = {
  name: 'Sean Sajonia dela Cruz',
  shortName: 'Sean dela Cruz',
  role: 'Wedding & Events Host',
  city: 'Iligan City, Philippines',
  tagline:
    "Iligan City's premier host. Hosted events in the Philippines and Singapore.",
  followers: '80K',
  recommend: '100%',
  reviews: 9,
  phone: '0952 644 4652',
  email: 'seanpreildelacruz@spdcgroupofcompanies.com',
  youtube: 'https://youtube.com/c/SeandelaCruzOfficial',
  facebook: 'https://www.facebook.com/IliganHost/',
  established: 1996,
  hostingSince: 2018,
};

export const cities = [
  'Singapore',
  'Antipolo',
  'Manila',
  'Cebu',
  'Bohol',
  'Valencia',
  'Malaybalay',
  'Dahilayan',
  'Pagadian',
  'Cagayan de Oro',
  'Iligan',
];

export const services = [
  {
    no: '01',
    title: 'Weddings',
    body: 'A composed, gracious presence at the altar. From processional cues to reception games — every transition tuned for emotional rhythm.',
  },
  {
    no: '02',
    title: 'Debuts & Milestones',
    body: '18ths, 21sts, golden birthdays. Programs choreographed around the celebrant — never the script.',
  },
  {
    no: '03',
    title: 'Corporate & Brand Events',
    body: 'Launches, galas, awards nights. Bilingual emcee work that reads the room and lifts the brand.',
  },
  {
    no: '04',
    title: 'Destination Hosting',
    body: 'Booked across the Philippines and abroad. Travel-ready with full kit and professional rider.',
  },
];

export const reviews = [
  {
    quote:
      'Sean made our wedding day feel effortless. Every cue, every joke, every quiet moment — perfectly placed.',
    author: 'Mara & Jio',
    event: 'Wedding · Cagayan de Oro',
  },
  {
    quote:
      'Booked him for our company gala in Singapore. He read the crowd within minutes and ran the night flawlessly.',
    author: 'L. Tan',
    event: 'Corporate Gala · Singapore',
  },
  {
    quote:
      'My daughter’s 18th was elevated the moment Sean took the mic. Worth every peso.',
    author: 'The Resnera Family',
    event: 'Debut · Iligan',
  },
];

export const stats = [
  { value: '80K+', label: 'Following' },
  { value: '100%', label: 'Recommended' },
  { value: '11', label: 'Cities Hosted' },
  { value: '6', label: 'Sister Brands' },
];

// The SPDC Group of Companies — Sean's full brand portfolio
export const brands = [
  {
    no: '01',
    name: 'MSM',
    sub: 'Professional Host',
    tagline: 'The flagship — Sean dela Cruz on the mic.',
    accent: 'Hosting',
    image: '/images/brands/msm.jpg',
  },
  {
    no: '02',
    name: 'The Groom Squad',
    sub: 'Suit Gallery',
    tagline: 'Bespoke menswear showroom in Tipanoy, Iligan.',
    accent: 'Menswear',
    image: '/images/brands/tgs.jpg',
  },
  {
    no: '03',
    name: 'The Bride Squad',
    sub: 'Bridal Studio',
    tagline: "A dedicated atelier for the bride's day.",
    accent: 'Bridal',
    image: '/images/brands/tbs.jpg',
  },
  {
    no: '04',
    name: 'S&M',
    sub: 'Event Rentals',
    tagline: 'Furniture, lights, fixtures — staged and delivered.',
    accent: 'Rentals',
    image: '/images/brands/sm.jpg',
  },
  {
    no: '05',
    name: 'GLAMCAM360°',
    sub: 'The Ultimate 360 Experience',
    tagline: 'Slow-motion 360° video booth for guest moments.',
    accent: 'Photo & Video',
    image: '/images/brands/glamcam.jpg',
  },
  {
    no: '06',
    name: 'SPDC',
    sub: 'Group of Companies',
    tagline: 'The parent — every brand, one house.',
    accent: 'Holding Group',
    image: '/images/brands/spdc.jpg',
  },
];

export const portraitHero = '/images/sean-hero.jpg';

export const gallery = [
  { src: '/images/gallery/01-iligan-cultural.jpg', caption: 'Cultural Programme · Iligan' },
  { src: '/images/gallery/02-ballroom-manila.jpg', caption: 'Ballroom · Manila' },
  { src: '/images/gallery/03-grand-opening.jpg', caption: 'Grand Opening · The Groom Squad' },
  { src: '/images/gallery/04-varsity-iligan.jpg', caption: 'Varsity Night · Iligan' },
  { src: '/images/gallery/05-destination-wedding.jpg', caption: 'Destination Wedding · Bukidnon' },
  { src: '/images/gallery/06-outdoor-barong.jpg', caption: 'Outdoor Programme · Iligan' },
  { src: '/images/gallery/07-centerstage-msu.jpg', caption: 'Centerstage · MSU' },
  { src: '/images/gallery/08-pageant-muph.jpg', caption: 'Mutya ng Pilipinas · Iligan' },
  { src: '/images/gallery/09-alumni-night.jpg', caption: 'Alumni Homecoming · Iligan' },
  { src: '/images/gallery/10-highland-wedding.jpg', caption: 'Highland Wedding · Bukidnon' },
  { src: '/images/gallery/11-miss-world-asia.jpg', caption: 'Miss World Asia · Coronation' },
  { src: '/images/gallery/12-live-performance.jpg', caption: 'Live Programme · Mall Stage' },
];

export const archiveCategories = [
  { id: 'all', label: 'All Plates' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'pageants', label: 'Pageants' },
  { id: 'hosting', label: 'Live Hosting' },
  { id: 'studios', label: 'Studios' },
  { id: 'international', label: 'International' },
] as const;

export type ArchiveCategory = (typeof archiveCategories)[number]['id'];

export const archive: { src: string; caption: string; cat: Exclude<ArchiveCategory, 'all'> }[] = [
  // Weddings
  { src: '/images/archive/wed-01-onstage.jpg', caption: 'Reception · Iligan', cat: 'weddings' },
  { src: '/images/archive/wed-02-bride-group.jpg', caption: 'Wedding Party · Iligan', cat: 'weddings' },
  { src: '/images/archive/wed-03-church.jpg', caption: 'Ceremony · Iligan', cat: 'weddings' },
  { src: '/images/archive/wed-04-baguio.jpg', caption: 'Pre-Wedding · Baguio', cat: 'weddings' },
  { src: '/images/archive/wed-05-barong-couple.jpg', caption: 'Couple · Filipiniana', cat: 'weddings' },
  { src: '/images/gallery/05-destination-wedding.jpg', caption: 'Destination · Bukidnon', cat: 'weddings' },
  { src: '/images/gallery/10-highland-wedding.jpg', caption: 'Highland Wedding · Bukidnon', cat: 'weddings' },

  // Pageants
  { src: '/images/archive/pgt-01-mutya-backdrop.jpg', caption: 'Mutya ng Pilipinas · Iligan', cat: 'pageants' },
  { src: '/images/archive/pgt-02-mutya-finale.jpg', caption: 'Mutya Finale · Iligan', cat: 'pageants' },
  { src: '/images/archive/pgt-03-red-carpet.jpg', caption: 'Red Carpet · Pageant Night', cat: 'pageants' },
  { src: '/images/archive/pgt-04-mutya-cohost.jpg', caption: 'Co-Host · Mutya ng Pilipinas', cat: 'pageants' },
  { src: '/images/archive/pgt-05-miss-world-iligan.jpg', caption: 'Miss World · Iligan', cat: 'pageants' },
  { src: '/images/archive/deb-01-purple-gown.jpg', caption: 'Debut · Maggie Cajelis', cat: 'pageants' },
  { src: '/images/archive/deb-02-red-gown.jpg', caption: 'Debut · Iligan', cat: 'pageants' },
  { src: '/images/gallery/08-pageant-muph.jpg', caption: 'Mutya ng Pilipinas · Iligan', cat: 'pageants' },
  { src: '/images/gallery/11-miss-world-asia.jpg', caption: 'Miss World Asia · Coronation', cat: 'pageants' },

  // Live Hosting
  { src: '/images/archive/host-01-lasalle-homecoming.jpg', caption: 'High School Homecoming · 2025', cat: 'hosting' },
  { src: '/images/archive/host-02-alumni-stage.jpg', caption: 'Alumni Gala · Iligan', cat: 'hosting' },
  { src: '/images/archive/host-03-graduation.jpg', caption: 'Graduation · Cagayan de Oro', cat: 'hosting' },
  { src: '/images/gallery/01-iligan-cultural.jpg', caption: 'Cultural Programme · Iligan', cat: 'hosting' },
  { src: '/images/gallery/03-grand-opening.jpg', caption: 'Grand Opening · The Groom Squad', cat: 'hosting' },
  { src: '/images/gallery/04-varsity-iligan.jpg', caption: 'Varsity Night · Iligan', cat: 'hosting' },
  { src: '/images/gallery/06-outdoor-barong.jpg', caption: 'Outdoor Programme · Iligan', cat: 'hosting' },
  { src: '/images/gallery/07-centerstage-msu.jpg', caption: 'Centerstage · MSU', cat: 'hosting' },
  { src: '/images/gallery/09-alumni-night.jpg', caption: 'Alumni Homecoming · Iligan', cat: 'hosting' },
  { src: '/images/gallery/12-live-performance.jpg', caption: 'Live Programme · Mall Stage', cat: 'hosting' },

  // Studios (TBS + TGS)
  { src: '/images/archive/studio-01-tbs-interior.jpg', caption: 'The Bride Squad · Atelier', cat: 'studios' },
  { src: '/images/archive/studio-02-tbs-products.jpg', caption: 'The Bride Squad · Bouquet', cat: 'studios' },
  { src: '/images/archive/studio-03-tgs-storefront.jpg', caption: 'The Groom Squad · Tipanoy', cat: 'studios' },
  { src: '/images/archive/studio-04-tgs-accessories.jpg', caption: 'The Groom Squad · Accessories', cat: 'studios' },

  // International
  { src: '/images/archive/intl-01-okada-night.jpg', caption: 'Okada Manila · Pre-Show', cat: 'international' },
  { src: '/images/gallery/02-ballroom-manila.jpg', caption: 'Ballroom · Manila', cat: 'international' },
];

export const tour = [
  {
    no: 'I',
    title: 'Singapore',
    sub: 'First International Event',
    date: 'January · 2024',
    venue: 'Marina Bay',
    image: '/images/tour/singapore-first.jpg',
  },
  {
    no: 'II',
    title: 'Singapore',
    sub: 'Once Again — Second International',
    date: 'September · 2024',
    venue: 'Singapore',
    image: '/images/tour/singapore-once-again.jpg',
  },
  {
    no: 'III',
    title: 'Manila',
    sub: 'Live in Okada',
    date: 'November · 2024',
    venue: 'Okada Manila',
    image: '/images/tour/manila-okada.jpg',
  },
];
