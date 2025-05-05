document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.clickable');
    items.forEach(function (item) {
        item.addEventListener('click', function () {
            alert('小心詐騙!');
        });
    });
});