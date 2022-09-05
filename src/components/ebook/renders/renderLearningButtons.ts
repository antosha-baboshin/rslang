export const renderLearningsButtons = (id: string): string => {
  if (!localStorage.autority) return '';
  else if (localStorage.level === 't') return `<div class="learning-button easy-button" id='easy-${id}'>Delete</div>
                                              <div class="learning-button learned-button" id='learn-${id}'>Learned</div>
                                              <div class="progress-wrapper">Word progress: <div class='word-progress' id='progress-${id}'></div></div>`;
  return `<div class="learning-button difficult-button" id='diff-${id}'>Difficult</div>
          <div class="learning-button learned-button" id='learn-${id}'>Learned</div>
          <div class="progress-wrapper">Word progress: <div class='word-progress' id='progress-${id}'></div></div>`
}