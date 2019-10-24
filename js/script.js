window.addEventListener("load", function() {

    const search = document.querySelector('.search'),
        searchBtn = document.querySelector('#search_btn');

    const contactForm = document.querySelector('#validation_form'),
        addForm = document.querySelector('#add_button');

    searchBtn.addEventListener('click', () => {
        const searchText = new RegExp(search.value.trim(), 'i');
        search.value = '';
    });

    addForm.addEventListener('click', () => {
        contactForm.style.display = "flex";
    });

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
        let anchorReference = event.target;
        let activePaneId = anchorReference.getAttribute("href");
        let activePane = document.querySelector(activePaneId);
        activePane.classList.add("active");
    }
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", activeTab);
    }

  /*  function telephoneCheck(str) {
    const inputNumber = contactForm.querySelector('#number');
        let number = new RegExp(/^\(?(\d{2})?(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{2}[-|\S]\d{2}$/);
        if(inputNumber.matches(number)) {
            inputNumber.classList.add('valid_input');
        }
        return number.test(str);
    }*/

  const textarea = contactForm.querySelector('textarea');
  console.log(textarea);
  textarea.addEventListener('click', () => {
      textarea.value = '';
  });

    const submitBtn = document.querySelector('#submit');
    submitBtn.addEventListener('click', () => {

    });
});