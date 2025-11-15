export {default} from 'next-auth/middleware'

export const config = {
  matcher: ['/movie/add', '/tv/add', '/game/add'],
};
