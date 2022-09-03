export const renderLearningsButtons = (id: string): string => {
  if (!localStorage.autority) return '';
  else if (localStorage.level === 't') return `<div class="learning-button easy-button" id='diff-${id}'>Easy</div>
                                              <div class="learning-button" id='learn-${id}'>Learned</div>`;
  return `<div class="learning-button difficult-button" id='diff-${id}'>Difficult</div>
          <div class="learning-button learned-button" id='learn-${id}'>Learned</div>`
}