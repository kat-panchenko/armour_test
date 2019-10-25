window.addEventListener("load", function () {

    const search = document.querySelector('.search'),
        searchBtn = document.querySelector('#search_btn'),
        contactForm = document.querySelector('#validation_form'),
        addForm = document.querySelector('#add_button');

    //очистка поискового поля как имитация поиска запроса
    searchBtn.addEventListener('click', () => {
        search.value = '';
    });

    //открытие контактной формы при клике на кнопку "+"
    addForm.addEventListener('click', () => {
        contactForm.style.display = "flex";
    });

    //активные табы
    let tabs = document.querySelectorAll("ul.nav_tabs > li");
    function activeTab(event) {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("active");
        }
        let clickedTab = event.currentTarget;
        clickedTab.classList.add("active");
        event.preventDefault();
        let tabWrapper = document.querySelectorAll(".tab_wrapper");
        for (let i = 0; i < tabWrapper.length; i++) {
            tabWrapper[i].classList.remove("active");
        }
        let anchor = event.target;
        let activeId = anchor.getAttribute("href");
        let activePane = document.querySelector(activeId);
        activePane.classList.add("active");
    }
    //активация таба при клике
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", activeTab);
    }


    //очистка плейсхолдера поля сообщения при клике
    {
        const textarea = contactForm.querySelector('textarea');
        textarea.addEventListener('click', () => {
            textarea.value = '';
        });
    }

    //валидация номера телефона
    function phoneNumber() {
        const inputNumber = contactForm.querySelector('#number');
        inputNumber.onblur = function () {
            let number = new RegExp(/\d{10}/g);
            if (!this.value.match(number)) {
                this.classList.add('invalid_input');
                this.message.focus();
            }
        };
        inputNumber.onfocus = function () {
            if (this.classList.contains('invalid_input')) {
                this.classList.remove('invalid_input');
            }
        }
    }
    phoneNumber();
    validation();

    //закрытие формы по клику на крестик и очистка полей
    const closeForm = contactForm.querySelector('.close_form');
    closeForm.addEventListener('click', () => {
        const inputs = contactForm.querySelectorAll('.required');
        for (let input of inputs) {
            input.value = '';
        }
        contactForm.style.display = 'none';
    });

    //показ модального окна после отправки валидной формы
    function showModal() {
        const modalWrapper = document.querySelector('.modal_wrapper');
        const modalWindow = document.createElement('div');
        modalWindow.className = '';
        modalWindow.innerHTML = `  
                                  <div class="modal_info">
                                  <h3>Successfully! We\`ve received your request!</h3>
                                  </div>`;
        modalWrapper.style.display = 'block';
        modalWrapper.appendChild(modalWindow);
    }

    //валидация формы
    function validation() {
        const submitBtn = contactForm.querySelector('#submit');
        const inputs = contactForm.querySelectorAll('.required');
        submitBtn.addEventListener('click', () => {
            for (let input of inputs) {
                if (!input.value) {
                    input.classList.add('invalid_input');
                    input.message.focus();
                } else {
                    input.classList.remove('invalid_input');
                    input.classList.add('valid_input');
                }
            }
            contactForm.style.display = 'none';
            showModal();
        });
    }
});