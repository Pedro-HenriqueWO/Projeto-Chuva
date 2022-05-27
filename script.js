
let showButton = document.querySelector('#showButton');

showButton.onclick = function () {
    let div = document.getElementById('resume');
    behavior: 'smooth'
    if (div.style.maxHeight <= '11%') {
        div.style.maxHeight = '26%';
    }
    else {
        div.style.maxHeight = '11%';
    }
};

