document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.controls input');
    function handleUpdate() {
        const suffix = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

    const btn = document.querySelector("#btn");
    let img = document.querySelector("#image");

    btn.addEventListener('click', function() {
        var XHR = new XMLHttpRequest();

        XHR.onreadystatechange = function() {
            if(XHR.readyState == 4 && XHR.status == 200) {
                var url = JSON.parse(XHR.responseText).message;
                img.src = url;
            }
        }
        XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
        XHR.send();
    })
})