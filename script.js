document.addEventListener('DOMContentLoaded', () => {
    const theoryContainer = document.getElementById('questions-container');
    const examplesContainer = document.getElementById('examples-container');
    const searchInput = document.getElementById('search-input');
    
    // Views
    const homeView = document.getElementById('home-view');
    const theoryView = document.getElementById('theory-view');
    const examplesView = document.getElementById('examples-view');
    
    // Buttons/Tiles
    const tileTheory = document.getElementById('tile-theory');
    const tileExamples = document.getElementById('tile-examples');
    const backBtnTheory = document.getElementById('back-btn-theory');
    const backBtnExamples = document.getElementById('back-btn-examples');

    // Navigation logic
    function showView(view) {
        homeView.style.display = 'none';
        theoryView.style.display = 'none';
        examplesView.style.display = 'none';
        view.style.display = 'block';
    }

    tileTheory.addEventListener('click', () => {
        showView(theoryView);
        renderList(questionsData, theoryContainer, searchInput.value);
    });

    tileExamples.addEventListener('click', () => {
        showView(examplesView);
        renderList(examplesData, examplesContainer, '', true);
    });

    backBtnTheory.addEventListener('click', () => {
        showView(homeView);
    });

    backBtnExamples.addEventListener('click', () => {
        showView(homeView);
    });

    // Универсальная функция отрисовки аккордеона
    function renderList(dataArray, targetContainer, filterText = '', autoOpen = false) {
        targetContainer.innerHTML = '';
        
        const text = filterText.toLowerCase();
        const filteredData = dataArray.filter(item => 
            item.title.toLowerCase().includes(text) || 
            item.content.toLowerCase().includes(text)
        );

        if (filteredData.length === 0) {
            targetContainer.innerHTML = '<p style="text-align:center; color: var(--text-muted); padding: 2rem;">Ничего не найдено. Попробуйте другой запрос.</p>';
            return;
        }

        filteredData.forEach((item, index) => {
            const accordionItem = document.createElement('div');
            accordionItem.className = 'accordion-item' + (autoOpen ? ' active' : '');
            accordionItem.style.animationDelay = `${(index % 10) * 0.1}s`;

            const header = document.createElement('button');
            header.className = 'accordion-header';
            header.innerHTML = `
                <span>${item.title}</span>
                <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            `;

            const contentWrap = document.createElement('div');
            contentWrap.className = 'accordion-content';
            if (autoOpen) {
                contentWrap.style.maxHeight = 'none'; // Позволяет контенту свободно расти
            }
            
            const inner = document.createElement('div');
            inner.className = 'accordion-inner';
            inner.innerHTML = item.content;
            
            contentWrap.appendChild(inner);
            
            accordionItem.appendChild(header);
            accordionItem.appendChild(contentWrap);
            targetContainer.appendChild(accordionItem);

            header.addEventListener('click', () => {
                const isActive = accordionItem.classList.contains('active');
                
                // Если мы не в режиме autoOpen, то закрываем другие
                if (!autoOpen) {
                    targetContainer.querySelectorAll('.accordion-item.active').forEach(activeItem => {
                        if (activeItem !== accordionItem) {
                            activeItem.classList.remove('active');
                            activeItem.querySelector('.accordion-content').style.maxHeight = null;
                        }
                    });
                }

                if (!isActive) {
                    accordionItem.classList.add('active');
                    contentWrap.style.maxHeight = contentWrap.scrollHeight + "px";
                    // Если MathJax еще перерисовывает, уберем max-height после анимации
                    setTimeout(() => { contentWrap.style.maxHeight = 'none'; }, 500);
                } else {
                    accordionItem.classList.remove('active');
                    // Сначала зададим конкретную высоту, чтобы сработала анимация закрытия
                    if(contentWrap.style.maxHeight === 'none') {
                        contentWrap.style.maxHeight = contentWrap.scrollHeight + "px";
                        // Принудительный reflow
                        contentWrap.offsetHeight; 
                    }
                    contentWrap.style.maxHeight = null;
                }
            });
        });

        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([targetContainer]).catch(function (err) {
                console.error('MathJax error:', err.message);
            });
        }
    }

    // Логика поиска только для теории
    searchInput.addEventListener('input', (e) => {
        if (theoryView.style.display === 'block') {
            renderList(questionsData, theoryContainer, e.target.value, false);
        }
    });

    // Обработка изменения размера окна
    window.addEventListener('resize', () => {
        document.querySelectorAll('.accordion-item.active').forEach(activeItem => {
            const content = activeItem.querySelector('.accordion-content');
            content.style.maxHeight = 'none';
            const newHeight = content.scrollHeight;
            content.style.maxHeight = newHeight + "px";
        });
    });
});
