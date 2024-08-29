document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const resetButton = document.getElementById('reset');
    let count = 0;

    incrementButton.addEventListener('click', () => {
        if (count < 10) {
            count++;
            counter.textContent = count;
        }
        if (count === 10) {
            alert('You have reached the maximum value');
        }
    });

    decrementButton.addEventListener('click', () => {
        if (count > 0) {
            count--;
            counter.textContent = count;
        }
        if (count === 0) {
            alert('You have reached the minimum value');
        }
    });

    resetButton.addEventListener('click', () => {
        count = 0;
        counter.textContent = count;
    });
});
