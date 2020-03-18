const getArticleContent = () => {
  let articleContent = '';
  const article = document.body.getElementsByClassName('columns small-12 medium-offset-2 medium-8 end')[1];
  const paragraphs = article.querySelectorAll('p:not([class])');
  paragraphs.forEach((paragraph) => { articleContent += `${paragraph.innerText} `; });
  return articleContent;
};

const recite = () => {
  const synth = window.speechSynthesis;
  const articleContent = getArticleContent();
  const utterThis = new SpeechSynthesisUtterance(articleContent);
  utterThis.pitch = 1;
  utterThis.rate = 1;
  utterThis.lang = 'en-US';

  synth.speak(utterThis);
};

const onMessage = (message) => {
  switch (message.action) {
    case 'RECITE':
        recite();
      break;
    case 'STOP_RECITE':
        window.speechSynthesis.cancel();
      break;
    default:
      break;
  }
}

chrome.runtime.onMessage.addListener(onMessage);
