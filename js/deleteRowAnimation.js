document.querySelectorAll('.delete').forEach(function (item) {
    item.addEventListener('click', function (e) {
        // First we get the
        let newClass = this.getAttribute('data-delete');
        let getParent = item.parentNode
        if (newClass === 'shredder') {

            getParent.classList.add('shredding');
            let shredAmount = 10;
            let width = document.querySelector('.item.shred').getBoundingClientRect().width / shredAmount;
            let animationName = 'spinALittle';
            let animationDelay = 0;
            for (let x = 0; x <= shredAmount; ++x) {
                animationDelay += 1;
                if (x % 2 === 0) {
                    animationName = 'spinALittleAlt';
                } else {
                    animationName = 'spinALittle';
                }
                if (x % 3 === 0) {
                    animationDelay = 0;
                }
                let newEl = document.createElement('div');
                newEl.classList.add('item-wrap');
                newEl.innerHTML = `<div class="item">${getParent.innerHTML}</div>`;
                newEl.querySelector('.animation-assets').innerHTML = '';
                let clip = `clip-path: inset(0px ${(shredAmount - x - 1) * width}px 0 ${(x * width)}px); animation-delay: 0.${animationDelay}s; transform-origin: ${x * width}px 125px; animation-name: ${animationName};`
                newEl.children[0].setAttribute('style', clip);
                getParent.querySelector('.animation-assets').append(newEl);

            }
        } else {
            getParent.classList.add(newClass);
        }
    });
});
