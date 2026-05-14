const jsItems = document.querySelectorAll('.js-tooltip');

jsItems.forEach(item => {
    // Tạo phần tử tooltip trong bộ nhớ
    const tipBox = document.createElement('div');
    tipBox.className = 'tooltip';
    tipBox.innerText = item.getAttribute('data-tip');
    item.appendChild(tipBox);

    item.addEventListener('mouseenter', () => {
        // Bạn có thể thêm logic kiểm tra va chạm màn hình ở đây
        console.log("Tooltip triggered via JS");
    });
});