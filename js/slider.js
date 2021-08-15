let rangeSlider = document.querySelector('#range-slider');
let rangePrice = document.querySelector('.range__price');
if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [0, 1000],
        connect: true,
        range: {
            'min': 0,
            'max': 1000
        },
        step: 1,
        format: {
            to: function (value) {
                return value.toFixed(0);
            },
            from: function (value) {
                return parseFloat(value);
            },
        }
    });
}

rangeSlider.noUiSlider.on('update', values => {
    rangePrice.innerHTML = `Цена: ${values[0]} грн - ${values[1]} грн`
});