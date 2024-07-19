const curePathname = (pathname) => pathname.replace('shorts/', 'watch?v=');

if (window.location.pathname.startsWith('/shorts')) {
  window.location.href = curePathname(window.location.pathname);
}

navigation.addEventListener('navigate', (event) => {
  const url = new URL(event.destination.url);

  if (!url.pathname.startsWith('/shorts')) {
    return;
  }

  window.location.href = curePathname(url.pathname);
});
