const screens = {
  socials: { image: 'assets/socials.png', alt: 'Polarys Socials screen showing Iowa State games', caption: 'SOCIALS / A little local context.' },
  resources: { image: 'assets/resources.png', alt: 'Polarys Resources screen with DUI resources and state law links', caption: 'RESOURCES / Somewhere to start.' },
  settings: { image: 'assets/settings.png', alt: 'Polarys Settings screen with location and departure reminders', caption: 'SETTINGS / Make it work for you.' }
};
document.querySelectorAll('[data-screen]').forEach(button => {
  button.addEventListener('click', () => {
    const screen = screens[button.dataset.screen];
    const image = document.getElementById('explore-image');
    image.src = screen.image;
    image.alt = screen.alt;
    document.getElementById('screen-caption').textContent = screen.caption;
    document.querySelectorAll('[data-screen]').forEach(item => {
      item.classList.toggle('active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
  });
});
