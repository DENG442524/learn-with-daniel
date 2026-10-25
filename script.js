const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
  });
}

const aiCreatorForm = document.querySelector('#ai-creator-form');

if (aiCreatorForm) {
  const result = document.querySelector('#ai-creator-result');
  const output = document.querySelector('#ai-creator-output');

  aiCreatorForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const projectName = aiCreatorForm.elements.projectName.value.trim();
    const projectGoal = aiCreatorForm.elements.projectGoal.value.trim();

    if (!projectName || !projectGoal || !result || !output) {
      return;
    }

    output.textContent = `Project: ${projectName}

Goal: ${projectGoal}

1. Decide exactly what examples your AI will recognise or sort.
2. Collect a small set of safe, accurate examples and label them.
3. Try a beginner-friendly tool such as Teachable Machine with those examples.
4. Test it with examples it has not seen and record what it gets wrong.
5. Improve your examples, then ask a teacher or trusted adult to review your project.`;
    result.hidden = false;
  });
}

const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  const contactStatus = document.querySelector('#contact-status');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = contactForm.elements.name.value.trim();
    const email = contactForm.elements.email.value.trim();
    const message = contactForm.elements.message.value.trim();
    const subject = `Message from ${name}`;
    const body = `From: ${name}\nReply email: ${email}\n\n${message}`;
    const mailto = `mailto:danielirewamiri011@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (contactStatus) {
      contactStatus.textContent = 'Opening your email app with your message...';
    }

    window.location.href = mailto;
  });
}
