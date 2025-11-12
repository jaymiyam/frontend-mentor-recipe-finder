export { default } from 'next-auth/middleware';

// set up protected paths using next-auth
export const config = {
  matcher: ['/recipes/add', '/profile'],
};
