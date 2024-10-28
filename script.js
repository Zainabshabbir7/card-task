var cardNumberInput = document.getElementsByClassName('card-number-input')[0];
        var cardHolderInput = document.getElementsByClassName('card-holder-input')[0];
        var monthInput = document.getElementsByClassName('month-input')[0];
        var yearInput = document.getElementsByClassName('year-input')[0];
        var cvvInput = document.getElementsByClassName('cvv-input')[0];

        var cardNumberBox = document.getElementsByClassName('card-number-box')[0];
        var cardHolderName = document.getElementsByClassName('card-holder-name')[0];
        var expMonth = document.getElementsByClassName('exp-month')[0];
        var expYear = document.getElementsByClassName('exp-year')[0];
        var cvvBox = document.getElementsByClassName('cvv-box')[0];
        var front = document.getElementsByClassName('front')[0];
        var back = document.getElementsByClassName('back')[0];

        cardNumberInput.oninput = function () {
            cardNumberBox.innerText = cardNumberInput.value;
        }

        cardHolderInput.oninput = function () {
            cardHolderName.innerText = cardHolderInput.value;
        }

        monthInput.oninput = function () {
            expMonth.innerText = monthInput.value;
        }

        yearInput.oninput = function () {
            expYear.innerText = yearInput.value;
        }

        cvvInput.onmouseenter = function () {
            front.style.transform = 'perspective(1000px) rotateY(-180deg)';
            back.style.transform = 'perspective(1000px) rotateY(0deg)';
        }

        cvvInput.onmouseleave = function () {
            front.style.transform = 'perspective(1000px) rotateY(0deg)';
            back.style.transform = 'perspective(1000px) rotateY(180deg)';
        }

        cvvInput.oninput = function () {
            cvvBox.innerText = cvvInput.value;
        }