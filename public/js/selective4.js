var x, y;
var X, Y;
var flag = 0;
var count = 0;
var x1, y1, a1, b1, x2, y2, aa, bb, x4, y4, a4, b4, x5, y5, a5, b5, a2, b2;

function setup() {
    createCanvas(800, 800);
    x = 400;
    y = 0;
    X = 1;
    Y = 0.1;
    a = 800;
    b = 40;
    A = -1;
    B = 0.1;
    x1 = 400;
    y1 = 160;
    a1 = 800;
    b1 = 80;
    a2 = 800;
    b2 = 80;
    x2 = 400;
    y2 = 0;
    aa = 0;
    bb = 0;
    x3 = 400;
    y3 = 200;
    a3 = 800;
    b3 = 120;
    x4 = 400;
    y4 = 0;
    a4 = 800;
    b4 = 160;
    x5 = 400;
    y5 = 240;
    a5 = 800;
    b5 = 280;


    arr = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0];
    button1 = createButton('1');
    button1.style('font-size', '17px');
    button1.style('background-color', 'yellow');
    button1.position(20, 180);
    button1.mousePressed(f1);
    button2 = createButton('2');
    button2.style('font-size', '17px');
    button2.style('background-color', 'yellow');
    button2.position(40, 180);
    button2.mousePressed(f2);
    button3 = createButton('3');
    button3.style('font-size', '17px');
    button3.style('background-color', 'yellow');
    button3.position(60, 180);
    button3.mousePressed(f3);
    button4 = createButton('4');
    button4.style('font-size', '17px');
    button4.style('background-color', 'yellow');
    button4.position(80, 180);
    button4.mousePressed(f4);
    button5 = createButton('5');
    button5.style('font-size', '17px');
    button5.style('background-color', 'yellow');
    button5.position(100, 180);
    button5.mousePressed(f5);
    button6 = createButton('6');
    button6.style('font-size', '17px');
    button6.style('background-color', 'yellow');
    button6.position(120, 180);
    button6.mousePressed(f6);
    button7 = createButton('7');
    button7.style('font-size', '17px');
    button7.style('background-color', 'yellow');
    button7.position(140, 180);
    button7.mousePressed(f7);
    button8 = createButton('8');
    button8.style('font-size', '17px');
    button8.style('background-color', 'yellow');
    button8.position(160, 180);
    button8.mousePressed(f8);
    button9 = createButton('9');
    button9.style('font-size', '17px');
    button9.style('background-color', 'yellow');
    button9.position(180, 180);
    button9.mousePressed(f9);
    button10 = createButton('10');
    button10.style('font-size', '17px');
    button10.style('background-color', 'yellow');
    button10.position(200, 180);
    button10.mousePressed(f10);




}
document.querySelector(".right").innerHTML = "select the first 4 frames to be sent";

function overwrite() {
    document.querySelector(".right").style.display = "none";
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
    button5.disabled = true;
    button6.disabled = true;
    button7.disabled = true;
    button8.disabled = true;
    button9.disabled = true;
    button10.disabled = true;
    var millisecondsToWait = 4000;
    setTimeout(function() {
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        button4.disabled = false;
        button5.disabled = false;
        button6.disabled = false;
        button7.disabled = false;
        button8.disabled = false;
        button9.disabled = false;
        button10.disabled = false;
        yellowch();
    }, millisecondsToWait);
}


function yellowch() {
    button1.style('background-color', 'yellow');
    button2.style('background-color', 'yellow');
    button3.style('background-color', 'yellow');
    button4.style('background-color', 'yellow');
    button5.style('background-color', 'yellow');
    button6.style('background-color', 'yellow');
    button7.style('background-color', 'yellow');
    button8.style('background-color', 'yellow');
    button9.style('background-color', 'yellow');
    button10.style('background-color', 'yellow');

}

function wrongclick() {
    document.querySelector(".right").style.display = "block";
    document.querySelector(".right").innerHTML = "Wrong frame selected";
}


count = 0;

function f1() {
    if (!(arr[0])) {
        wrongclick();
        button1.style('background-color', 'red');
        flag = 0;
    } else if (arr[0] == 2) {} else {
        button1.style('background-color', 'green');
        count += 1;
        arr[0] = 2;
        if ((count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 12)) {
            overwrite();
        }

    }
};


function f2() {
    if (!(arr[1])) {
        wrongclick();
        button2.style('background-color', 'red');
        flag = 0;
    } else if (arr[1] == 2) {} else {
        button2.style('background-color', 'green');
        count += 1;
        arr[1] = 2;
        if ((count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 12)) {
            overwrite();
        }
    }
};

function f3() {
    if (!(arr[2])) {
        wrongclick();
        button3.style('background-color', 'red');
        flag = 0;
    } else if (arr[2] == 2) {} else {
        button3.style('background-color', 'green');
        count += 1;
        arr[2] = 2;
        if ((count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 12)) {
            overwrite();
        }
    }
};

function f4() {
    if (!(arr[3])) {
        wrongclick();
        button4.style('background-color', 'red');
        flag = 0;
    } else if (arr[3] == 2) {} else {
        button4.style('background-color', 'green');
        count += 1;
        arr[3] = 2;
        if ((count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 12)) {
            overwrite();
        }
    }

};

function f5() {
    if (!(arr[4])) {
        wrongclick();
        button5.style('background-color', 'red');
        flag = 0;
    } else if (arr[4] == 2) {} else {
        button5.style('background-color', 'green');
        count += 1;
        arr[4] = 2;
        if ((count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 12)) {
            overwrite();
        }
    }

};

function f6() {
    if (!(arr[5])) {
        wrongclick();
        button6.style('background-color', 'red');
        flag = 0;
    } else if (arr[5] == 2) {} else {
        button6.style('background-color', 'green');
        count += 1;
        arr[5] = 2;
        if ((count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 12)) {
            overwrite();
        }

    }
};

function f7() {
    if (!(arr[6])) {
        wrongclick();
        button7.style('background-color', 'red');
        flag = 0;
    } else if (arr[6] == 2) {} else {
        button7.style('background-color', 'green');
        count += 1;
        arr[6] = 2;
        if ((count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 12)) {
            overwrite();
        }

    }
};

function f8() {
    if (!(arr[7])) {
        wrongclick();
        button8.style('background-color', 'red');
        flag = 0;
    } else if (arr[7] == 2) {} else {
        button8.style('background-color', 'green');
        count += 1;
        arr[7] = 2;
        if ((count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 12)) {
            overwrite();
        }

    }
};

function f9() {
    if (!(arr[8])) {
        wrongclick();
        button9.style('background-color', 'red');
        flag = 0;
    } else if (arr[8] == 2) {} else {
        button9.style('background-color', 'green');
        count += 1;
        arr[8] = 2;
        if ((count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 12)) {
            overwrite();
        }

    }
};

function f10() {

    if (!(arr[9])) {
        wrongclick();
        button10.style('background-color', 'red');
        flag = 0;
    } else if (arr[9] == 2) {} else {
        button10.style('background-color', 'green');
        count += 1;
        arr[9] = 2;
        if ((count == 4) || (count == 5) || (count == 6) || (count == 7) || (count == 8) || (count == 12)) {
            overwrite();
        }

    }
};

function alert1() {
    document.querySelector(".right").style.display = "block";
    document.querySelector(".right").innerHTML = "Select the next frame to be sent";
}

cnt1 = 0;
cnt2 = 0;
cnt3 = 0;
cnt4 = 0;
cnt5 = 0;
cnt6 = 0;



function coloursq1() {
    stroke(400);
    fill('red');
    square(60, 100, 40);

}

function coloursq2() {
    stroke(400);
    fill('blue');
    square(60, 150, 40);
}

function coloursq3() {
    stroke(400);
    fill(192, 192, 192);
    square(60, 200, 40);
}

function coloursq4() {
    stroke(400);
    fill(255, 204, 0);
    square(60, 250, 40);

}

function lines() {
    strokeWeight(4);
    stroke('black');
    line(400, 0, 400, 640);
    line(799, 0, 799, 640);
}

function texts() {
    fill(0);
    text('Reciever', 740, 640);
    text('Sender', 405, 640);
    text('1', 380, 15);
    text('2', 380, 55);
    text('3', 380, 95);
    text('4', 380, 135);
    text('5', 380, 175);
    text('6', 380, 215);
    text('7', 380, 255);
    text('8', 380, 295);
    text('9', 380, 335);
    text('10', 380, 375);
    text('1', 780, 55);
    text('2', 780, 95);
    text('3', 780, 135);
    text('4', 780, 175);
    text('5', 780, 215);
    text('6', 780, 255);
    text('7', 780, 295);
    text('8', 780, 335);
    text('9', 780, 375);
    text('10', 780, 415);
    text('represents a normal frame sent', 110, 125);
    text('represents a corrupted frame', 110, 175);
    text('represents a Negative ACK', 110, 225);
    text('represents an ACK', 110, 275);
    text('THE WINDOW SIZE IS', 60, 75);
    textSize(18);
    text('4', 212, 74);
    textSize(25);
    stroke(0);
    strokeWeight(2);
    text('SELECTIVE-REPEAT ARQ', 20, 375);
    stroke(400);
    strokeWeight(4);
}

function draw() {
    background(400);
    strokeWeight(4);
    stroke('black');
    square(200, 50, 35);

    // text('6', 380, 215);
    // text('7', 380, 255);
    // text('8', 380, 295);
    // text('9', 380, 335);
    // text('10', 380, 375);

    coloursq1();
    coloursq4();
    coloursq2();
    coloursq3();
    texts();
    textSize(12);
    // text('1', 780, 55);
    // text('2', 780, 95);
    // text('3', 780, 135);
    // text('4', 780, 175);
    // text('5', 780, 215);
    // text('6', 780, 255);
    // text('7', 780, 295);
    // text('8', 780, 335);
    // text('9', 780, 375);
    // text('10', 780, 415);
    // text('Reciever', 740, 540);
    // text('Sender', 405, 540);

    lines();
    textSize(12);
    stroke('black');
    fill(400);


    strokeWeight(4);
    stroke('black');

    if (count == 4) { cnt1 = 1; }
    if (count == 5) { cnt2 = 1; }
    if (count == 6) { cnt3 = 1; }
    if (count == 7) { cnt4 = 1; }
    if (count == 8) { cnt5 = 1; }
    if (count == 12) { cnt6 = 1; }

    if (cnt1 == 1) {

        if (x <= 7000) {
            stroke('red');
            x = x + X; //400  1
            y = y + Y; //0    0.1
            if (x <= 1000) {
                line(x, y, 400, 0);
            }

            if (cnt3 != 1) {
                line(x, y + 80, 400, 80);
            }
            if (cnt4 != 1) {
                line(x, y + 120, 400, 120);
            }

            if (cnt2 != 1) {
                if (x >= 600) {
                    xx = 600;
                    yy = 20;
                } else {
                    xx = x;
                    yy = y
                }

                line(xx, yy + 40, 400, 40);
            }
        }
        if (x >= 950) {
            stroke(255, 204, 0);
            if (a >= 400) {
                a = a + A;
                b = b + B;
                line(a, b, 800, 40);
            }

            if (a == 400) {
                arr = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0];
                alert1();
            }
        }
    }

    if (cnt2 == 1) {
        stroke('red');
        if (x1 <= 5000) {
            x1 = x1 + X;
            y1 = y1 + Y;
            line(x1, y1, 400, 160);

        }
        if (x1 <= 5000) {
            stroke(169, 169, 169);
            if (a1 >= 400) {
                a1 = a1 + A;
                b1 = b1 + B;
                line(a1, b1, 800, 80);
            }
            if (a1 == 400) {
                arr = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0];
                document.querySelector(".right").style.display = "block";
                document.querySelector(".right").innerHTML = "Negative ACK recieved select the next frame";
            }


        }
    }
    if (cnt3 == 1) {
        if (x2 <= 5000) {
            stroke('red');
            x2 = x2 + X;
            y2 = y2 + Y;

            line(x2, y2 + 40, 400, 40);


        }
        if (x2 >= 950) {
            stroke(255, 204, 0);
            if (a3 >= 400) {
                a3 = a3 + A;
                b3 = b3 + B;
                if (a3 >= 600) {
                    aa = a3;
                    bb = b3;
                } else {
                    aa = 600;
                    bb = 140;
                }
                if (cnt4 != 1) {
                    line(aa, bb, 800, 120);
                }

            }
            if (a3 == 400) {
                arr = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0];
                document.querySelector(".right").style.display = "block";
                document.querySelector(".right").innerHTML = "ack 3 lost, select the next frame";
            }
        }

    }
    if (cnt4 == 1) {

        if (x4 <= 5000) {
            stroke('red');
            x4 = x4 + X;
            y4 = y4 + Y;

            line(x4, y4 + 80, 400, 80);


        }
        if (x4 <= 5000) {
            stroke(255, 204, 0);
            if (a4 >= 400) {
                a4 = a4 + A;
                b4 = b4 + B;
                line(a4, b4, 800, 160);
            }
            if (a4 == 400) {
                arr = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
                alert1();
            }


        }

    }



    if (cnt5 == 1) {

        if (x3 <= 5000) {
            stroke('red');
            x3 = x3 + X;
            y3 = y3 + Y;
            if (x3 < 1000) {
                line(x3, y3, 400, 200);
            }

        }
        if (x3 >= 950) {
            cnt1 = 0;
            cnt2 = 0;
            cnt3 = 0;
            cnt4 = 0;
            stroke(255, 204, 0);
            if (a2 >= 400) {
                a2 = a2 + A;
                b2 = b2 + B;
                line(a2, b2, 800, 80);
                line(a2, b2 + 40, 800, 120);
                line(a2, b2 + 120, 800, 200);
                line(a2, b2 + 160, 800, 240);
            }

            if (a2 == 400) {
                arr = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
                document.querySelector(".right").style.display = "block";
                document.querySelector(".right").innerHTML = "Select the next 4 frames";
            }
        }
    }
    if (cnt6 == 1) {
        if (x5 <= 5000) {
            stroke('red');
            x5 = x5 + X;
            y5 = y5 + Y;
            if (x5 < 1000) {
                line(x5, y5, 400, 240);
                line(x5, y5 + 40, 400, 280);
                line(x5, y5 + 80, 400, 320);
                line(x5, y5 + 120, 400, 360);
            }
            if (x5 >= 950) {
                stroke(255, 204, 0);
                if (a5 >= 400) {
                    a5 = a5 + A;
                    b5 = b5 + B;

                    line(a5, b5, 800, 280);
                    line(a5, b5 + 40, 800, 320);
                    line(a5, b5 + 80, 800, 360);
                    line(a5, b5 + 120, 800, 400);
                }
                // alert("select next frame");
                if (a5 == 400) {
                    arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    document.querySelector(".right").style.display = "block";
                    document.querySelector(".right").innerHTML = "10 frames sent!!!";
                }
            }


        }
    }

};
// arr[3] arr[3][] rr4[4] = 25 arr[5 aarr[] document.querySelector(".right").style.display = "block"; 5 =
//         document.querySelector(".right").style.display = "block"; 2 2 document.querySelector(".right").style.display = "block"; arr8