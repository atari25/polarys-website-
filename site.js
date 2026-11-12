// Links to a setup question should reveal its answer as well as scroll to it.
function openLinkedQuestion() {
  const question = document.getElementById(window.location.hash.slice(1));
  if (question instanceof HTMLDetailsElement) question.open = true;
}
window.addEventListener("hashchange", openLinkedQuestion);
openLinkedQuestion();
