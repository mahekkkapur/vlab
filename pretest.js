function result1() {
    if (document.getElementById('q1').checked) {
        document.getElementById('q1p').innerHTML = "correct";
        document.getElementById('q1p').style.color="green"
    } else {
        document.getElementById('q1p').innerHTML = "wrong ans, the correct option is A ";
        document.getElementById('q1p').style.color="red"

    }

    if (document.getElementById('q8').checked) {
        document.getElementById('q2p').innerHTML = "correct";
        document.getElementById('q2p').style.color="green"
        
    } else {
        document.getElementById('q2p').innerHTML = "wrong ans, the correct option is D ";
        document.getElementById('q2p').style.color="red"
    }

    if (document.getElementById('q10').checked) {
        document.getElementById('q3p').innerHTML = "correct";
        document.getElementById('q3p').style.color="green"
    } else {
        document.getElementById('q3p').innerHTML = "wrong ans, the correct option is B ";
        document.getElementById('q3p').style.color="red"
    }
    if (document.getElementById('q14').checked) {
        document.getElementById('q4p').innerHTML = "correct";
        document.getElementById('q4p').style.color="green"
    } else {
        document.getElementById('q4p').innerHTML = "wrong ans, the correct option is B ";
        document.getElementById('q4p').style.color="red"
    }
    if (document.getElementById('q18').checked) {
        document.getElementById('q5p').innerHTML = "correct";
        document.getElementById('q5p').style.color="green"
    } else {
        document.getElementById('q5p').innerHTML = "wrong ans, the correct option is B ";
        document.getElementById('q5p').style.color="red"
    }
}

