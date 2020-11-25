const accordion = () => {

  const pageFeatures = document.querySelector('.page__features');
  const openButton = pageFeatures.querySelectorAll('.features__button');
  const answer = pageFeatures.querySelectorAll('.features__answer');
  const question = pageFeatures.querySelectorAll('.features__question');

  const toggleAnswer = a => {
    answer[a].classList.toggle('animate__fadeIn');
    answer[a].classList.toggle('features__answer_active');
  }

  pageFeatures.addEventListener('click', e => {
    let target = e.target;

    if (target && target.classList.contains('features__button') || target.classList.contains('features__question')) {
      for (let i = 0; i < openButton.length; i++) {
        if (target == openButton[i] || target == question[i])
            toggleAnswer(i);
        }
    }
  });
};

module.exports = accordion;
