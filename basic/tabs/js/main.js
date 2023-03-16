'use strict';

window.addEventListener('DOMContentLoaded', () => load);

function load() {
    const tabs = document.querySelectorAll('.tabheader_item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader_items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.remove('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        if(e?.target?.classList.contains('tabheader_item')) {
            tabs.forEach((el, i) => {
                if(el == e.target) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

}

