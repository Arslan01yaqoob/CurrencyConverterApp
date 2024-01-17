
var tl = gsap.timeline()

function time() {

    var a = 0
    setInterval(function () {


        a = a + Math.floor(Math.random() * 25)
        if (a < 100) {
            document.querySelector("#loader h1").innerHTML = a + "%"
        } else {
            a = 100
            document.querySelector("#loader h1").innerHTML = a + "%"
        }
    }, 150)
}

tl.to("#loader h1", {

    delay: 0.5,
    onStart: time()
})

tl.to("#loader", {
    top: "-100vh",
    duration: 1,
})

tl.from("#page1", {

    y: 700,
    duration: 1,
    scale: 0,
})


tl.from("#box", {
    y: 700,
    duration: 0.5,
    scale: 0,
    stagger:1,
})



var select = document.querySelectorAll('.Currency'),
    input_currency = document.getElementById('input_currency'),
    output_currency = document.getElementById('output_currency');



const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
    .then(data => data.json())
    .then((data) => {
        const entries = Object.entries(data);
        // console.log(entries)
        // alert(`10 GBP = ${data.rates.USD} USD`);
        for (i = 0; i < entries.length; i++) {
            select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`
            select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`
        }
    });

function converter() {

    var input_currency_val = input_currency.value;
    if (select[0].value != select[1].value) {
        // alert("Right")
        const host = 'api.frankfurter.app';
        fetch(`https://${host}/latest?amount=${input_currency_val}&from=${select[0].value}&to=${select[1].value}`)
            .then(val => val.json())
            .then((val) => {

                output_currency.value =  Object.values(val.rates)[0];
                // alert(`10 GBP = ${data.rates.USD} USD`);
            });


    } else {
        alert('please selact two different country')
    }

}
