// Things that appear on many pages. Edit here, not in the pages.

export const site = {
  name: 'selim saleh',
  line: 'data & ai engineer, munich. free from december 2026.',
};

// The email is never written out in the HTML; Mail.astro assembles it in the browser.
export const email = { user: 'selimmoftahsaleh', domain: 'gmail.com' };

export const links = {
  github: 'https://github.com/sxlimsxleh',
  linkedin: 'https://www.linkedin.com/in/selimsaleh',
  substack: 'https://selimsaleh.substack.com',
  letterboxd: 'https://letterboxd.com/seleemmofta7/',
  paper: 'https://arxiv.org/abs/2606.03728',
};

// The CV PDF. Set to '/Selim_Saleh_CV.pdf' once the file is in public/ (phone number removed).
export const cvPdf: string | null = null;

// The tape: favourite songs. Each opens on Spotify until real track links are added.
export const songs: { title: string; artist: string; url?: string }[] = [
  { title: 'All My Friends', artist: 'LCD Soundsystem' },
  { title: 'Weird Fishes', artist: 'Radiohead' },
  { title: 'Turbines', artist: 'Black Country, New Road' },
  { title: 'Long Season', artist: 'Fishmans' },
  { title: 'Master of None', artist: 'Beach House' },
  { title: 'Rinsed', artist: 'Dean Blunt' },
];
export const songUrl = (s: (typeof songs)[number]) =>
  s.url ?? `https://open.spotify.com/search/${encodeURIComponent(`${s.title} ${s.artist}`)}`;

// The main navigation, in priority order.
export const nav = [
  { href: '/about', label: 'me' },
  { href: '/research', label: 'paper & thesis' },
  { href: '/projects', label: 'projects' },
  { href: '/cv', label: 'cv' },
  { href: '/after-hours', label: 'after hours' },
];
