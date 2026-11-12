// Links to a setup question should reveal its answer as well as scroll to it.
function openLinkedQuestion() {
  const question = document.getElementById(window.location.hash.slice(1));
  if (question instanceof HTMLDetailsElement) question.open = true;
}
window.addEventListener("hashchange", openLinkedQuestion);
openLinkedQuestion();

const walkthrough = {
  bar: {
    label: "Before the reminder",
    heading: "You’re out.\nPolarys keeps track.",
    description:
      "With location access set up, Polarys recognizes visits to bars. You can also save a friend’s place for house-party nights.",
    image: "home.png",
    alt: "Polarys home screen showing time spent at a venue and the ride button",
    caption: "The home screen in Polarys",
  },
  leave: {
    label: "When you head out",
    heading: "A small question.\nA useful moment.",
    description:
      "After time at the bar, detecting your departure can trigger a reminder: “How are you getting home?” Tap it to open your ride options.",
    image: "reminder.png",
    alt: "Polarys notification asking How are you getting home?",
    caption: "The departure reminder on an iPhone",
  },
  ride: {
    label: "Your way home",
    heading: "Find a ride.\nText a friend.",
    description:
      "Open Uber or Lyft with your saved home as the destination, check transit, or text a friend. You choose what works for you.",
    image: "ride.png",
    alt: "The Ride screen with Uber, Lyft, transit, and Text a Friend",
    caption: "Ride options in Polarys",
  },
};
document.querySelectorAll("[data-demo]").forEach((button) => {
  button.addEventListener("click", () => {
    const step = walkthrough[button.dataset.demo];
    document
      .querySelectorAll("[data-demo]")
      .forEach((item) =>
        item.setAttribute("aria-pressed", String(item === button)),
      );
    document.getElementById("demo-label").textContent = step.label;
    document.getElementById("demo-heading").innerText = step.heading;
    document.getElementById("demo-description").textContent = step.description;
    const image = document.getElementById("demo-image");
    image.src = "assets/" + step.image;
    image.alt = step.alt;
    document
      .querySelector(".demo-phone")
      .classList.toggle("is-lock", button.dataset.demo === "leave");
    document.getElementById("demo-caption").textContent = step.caption;
  });
});
