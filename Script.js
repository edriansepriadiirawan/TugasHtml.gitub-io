function changeBackgroundColor() {
    const colors = ['#FF0000', '#0000FF', '#00FF00', '#FFFFFF'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}
