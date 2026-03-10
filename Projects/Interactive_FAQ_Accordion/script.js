const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");

faqQuestion.addEventListener('click', function() {
    faqAnswer.classList.toggle("show");
})