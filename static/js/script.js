// 📜 ResumeXpert: script.js - All-in-One Interactions & Enhancements

// ✅ Auto scroll to top on page load
window.onload = function () {
  window.scrollTo(0, 0);
};

// ✅ Clear chatbot input after submit
const chatForm = document.querySelector('form');
const chatInput = document.querySelector('input[name="user_input"]');

if (chatForm && chatInput) {
  chatForm.addEventListener('submit', () => {
    setTimeout(() => {
      chatInput.value = '';
    }, 100);
  });
}

// ✅ Validate uploaded file type (Only .pdf or .docx)
document.querySelectorAll('input[type="file"]').forEach(input => {
  input.addEventListener('change', function () {
    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    const file = this.files[0];
    if (file && !allowedTypes.includes(file.type)) {
      alert('Only PDF or DOCX files are allowed!');
      this.value = '';
    }
  });
});

// ✅ Optional: Loading Spinner on form submit (if loader is present)
const forms = document.querySelectorAll('form');
const loader = document.getElementById('loader');

forms.forEach(form => {
  form.addEventListener('submit', () => {
    if (loader) loader.style.display = 'block';
  });
});

// ✅ (Optional) Theme toggle logic (future-proof)
/*
const toggleBtn = document.getElementById('themeToggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = document.body.classList.contains('dark-mode') ? "☀️ Light Mode" : "🌙 Dark Mode";
  });
}
*/
