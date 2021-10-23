window.addEventListener('load', function () {
    const counter = this.document.querySelector('.counter');
    var num = 0;
    const loverCounter = this.document.querySelector('.loverCounter');
    const addCounter = this.document.querySelector('.addCounter');


    counter.append(num);
    loverCounter.addEventListener('click', function () {
        num--;
        counter.textContent = num

    });
    addCounter.addEventListener('click', function () {
        num++;
        counter.textContent = num
    });

})