function compute() {
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;


    if (principal < 1) {
        alert('Enter a positive number')
        document.getElementById("principal").focus()
        return
    }
    console.log(principal, rate, years)

    actualYear = 2021 + Number(years)

    interest = principal * years * rate / 100



    console.log('interest', interest, actualYear)
    document.getElementById("result").innerHTML =


        '<p>If you deposit<span class="highlight" > ' + principal + '</span>, at an interest rate of <span class="highlight" > ' + rate + '%</span>.You will receive an amount of <span class="highlight" > ' + interest + '</span>,in the year <span class="highlight" > ' + actualYear + '</span></p>'


}

function slider(val) {

    val = document.getElementById("rate").value;
    document.getElementById("sliderValue").innerHTML = val


    console.log(val)


}