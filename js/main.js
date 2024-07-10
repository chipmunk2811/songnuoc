const button = document.getElementById('changePage');
const links = document.querySelectorAll('a');
const spans = document.querySelectorAll('span');
button.addEventListener('click', function () {
    // Kiểm tra giá trị hiện tại của nút và chuyển đổi giữa 'open' và 'close'
    if (button.value === 'open') {
        button.value = 'close';
        links.forEach(link => {
            link.classList.add('hidden');
        });
        spans.forEach(span => {
            span.classList.add('hidden');
        });
    } else {
        button.value = 'open';
        links.forEach(link => {
           
            link.classList.remove('hidden');
        });
        spans.forEach(span => {
           
            span.classList.remove('hidden');
        });
    }
});