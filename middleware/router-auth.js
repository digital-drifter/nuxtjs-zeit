export default function({ store, redirect, route }) {
  // eslint-disable-next-line no-unused-expressions
  store.state.user != null && route.name === 'login' ? redirect('/admin') : ''
  // eslint-disable-next-line no-unused-expressions
  store.state.user == null && isAdminRoute(route) ? redirect('/login') : ''
}

function isAdminRoute(route) {
  if (route.matched.some((record) => record.path === '/admin')) {
    return true
  }
}
