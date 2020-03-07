$('label[for]').on('click', function (e) {
    var target = window[this.htmlFor];
    target.checked = !target.checked;
    e.preventDefault();
});
