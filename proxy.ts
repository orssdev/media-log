import authMiddleware from 'next-auth/middleware';

export default authMiddleware;

export const config = {
  matcher: ['/movie/add', '/tv/add', '/game/add']
};