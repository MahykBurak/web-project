export enum NAV_TABS {
  HOME = 'Home',
  ROOMS = 'Rooms',
  STATS = 'Stats',
}
export const ROUTES = Object.keys(NAV_TABS).map((key) => {
  return NAV_TABS[key as keyof typeof NAV_TABS].toLowerCase()
})
