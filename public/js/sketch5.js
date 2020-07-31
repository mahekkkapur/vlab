var x, y, xx;
var X, Y;
var flag = 0;
alert0();

function setup() {
    createCanvas(800, 816);
    x = 400;
    y = 0;
    X = 1;
    Y = 0.1;
    a = 800;
    b = 40;
    A = -1;
    B = 0.1;
    x1 = 400;
    y1 = 200;
    a1 = 800;
    b1 = 80;
    x2 = 400;
    y2 = 240;
    a2 = 800;
    b2 = 120;
    x3 = 400;
    y3 = 80;
    a3 = 800;
    b3 = 120;
    x4 = 400;
    y4 = 280;
    a4 = 800;
    b4 = 160;
    x5 = 400;
    y5 = 320;
    a5 = 800;
    b5 = 200;
    x6 = 400;
    y6 = 360;
    x7 = 400;
    y7 = 200;
    a7 = 800;
    b7 = 240;
    m = 0;

    textSize(12);
    //nostroke();


    arr = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
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


};

function wrongclick() {
    document.querySelector(".right").innerHTML = "Wrong frame selected";
}

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



count = 0;
c3 = 0;
c4 = 0;
c5 = 0;


function f1() {
    if (!(arr[0])) {
        wrongclick();
        button1.style('background-color', 'red');
        flag = 0;
    } else if (arr[0] == 2) {} else {
        button1.style('background-color', 'green');
        count += 1;
        arr[0] = 2;
        if ((count == 5) || (count == 6) || (count == 7) || (count == 12) || (count == 13) || (count == 14) || (count == 15) || (count == 20)) {
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
        if ((count == 5) || (count == 6) || (count == 7) || (count == 12) || (count == 13) || (count == 14) || (count == 15) || (count == 20)) {
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
        if ((count == 5) || (count == 6) || (count == 7) || (count == 12) || (count == 13) || (count == 14) || (count == 15) || (count == 20)) {
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
        if ((count == 5) || (count == 6) || (count == 7) || (count == 12) || (count == 13) || (count == 14) || (count == 15) || (count == 20)) {
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
        if ((count == 5) || (count == 6) || (count == 7) || (count == 12) || (count == 13) || (count == 14) || (count == 15) || (count == 20)) {
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
        if ((count == 5) || (count == 6) || (count == 7) || (count == 12) || (count == 13) || (count == 14) || (count == 15) || (count == 20)) {
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
        if ((count == 5) || (count == 6) || (count == 7) || (count == 12) || (count == 13) || (count == 14) || (count == 15) || (count == 20)) {
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
        if ((count == 5) || (count == 6) || (count == 7) || (count == 12) || (count == 13) || (count == 14) || (count == 15) || (count == 20)) {
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
        if ((count == 5) || (count == 6) || (count == 7) || (count == 12) || (count == 13) || (count == 14) || (count == 15) || (count == 20)) {
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
        if ((count == 5) || (count == 6) || (count == 7) || (count == 12) || (count == 13) || (count == 14) || (count == 15) || (count == 20)) {
            overwrite();
        }
    }

};

function alert00() {
    document.querySelector(".right").style.display = "block";
    document.querySelector(".right").innerHTML = "Select the correct first five frames to be sent";
}

function alert0() {
    document.querySelector(".right").style.display = "block";
    document.querySelector(".right").innerHTML = "Select the correct five frames to be sent";
}

function alert1() {
    document.querySelector(".right").style.display = "block";
    document.querySelector(".right").innerHTML = "Select the next frame to be sent";
}

function alert2() {
    document.querySelector(".right").style.display = "block";
    document.querySelector(".right").innerHTML = "The acknowledgement for the frame 3 is lost";
}

function alert3() {
    document.querySelector(".right").style.display = "block";
    document.querySelector(".right").innerHTML = "The packet 6 is lost, so no acknowledgement received";
}

function alert4() {
    document.querySelector(".right").style.display = "block";
    document.querySelector(".right").innerHTML = "All the 10 packets were sent !!!";
}

// function disbale_button(){
//   button1.attribute('disabled', '');
//   button2.attribute('disabled', '');
//   button3.attribute('disabled', '');
//   button4.attribute('disabled', '');
//   button5.attribute('disabled', '');
//   button6.attribute('disabled', '');
//   button7.attribute('disabled', '');
//   button8.attribute('disabled', '');
//   button9.attribute('disabled', '');
//   button10.attribute('disabled', '');
// }

// function enable_button(){
//   button1.removeAttribute('disabled');
//   button2.removeAttribute('disabled');
//   button3.removeAttribute('disabled');
//   button4.removeAttribute('disabled');
//   button5.removeAttribute('disabled');
//   button6.removeAttribute('disabled');
//   button7.removeAttribute('disabled');
//   button8.removeAttribute('disabled');
//   button9.removeAttribute('disabled');
//   button10.removeAttribute('disabled');

// }


cnt1 = 0;
cnt2 = 0;
cnt3 = 0;
cnt4 = 0;
cnt5 = 0;
cnt6 = 0;
cnt7 = 0;
cnt8 = 0;
c = 0

function coloursq1() {
    stroke(400);
    fill('red');
    square(60, 100, 40);

}

function coloursq4() {
    stroke(400);
    fill(255, 204, 0);
    square(60, 150, 40);

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
    text('represents an ACK', 110, 175);
    text('THE WINDOW SIZE IS', 60, 75);
    textSize(18);
    text('5', 212, 74);
    textSize(25);
    stroke(0);
    strokeWeight(2);
    text('GO-BACK-N ARQ', 20, 375);
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

    if (count == 5) {
        cnt1 = 1;
    }
    if (count == 6) {
        cnt2 = 1;
    }
    if (count == 7) {
        cnt3 = 1;
    }

    if (count == 12) {
        cnt4 = 1;
    }

    if (count == 13) {
        cnt5 = 1;
    }

    if (count == 14) {
        cnt6 = 1;
    }

    if (count == 15) {
        cnt7 = 1;
    }

    if (count == 20) {
        cnt8 = 1;
    }


    if (cnt1 == 1) {
        if (x <= 5000) {
            stroke('red');
            x = x + X;
            y = y + Y;
            if (x <= 1000) {
                line(x, y, 400, 0);
            }
            if (cnt2 != 1) {
                line(x, y + 40, 400, 40);
            }
            if (cnt3 != 1) {
                line(x, y + 80, 400, 80);
            }
            if (cnt4 != 1) {
                line(x, y + 120, 400, 120);
                line(x, y + 160, 400, 160);
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
                arr = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
                alert1();
            }

        }

    }

    if (cnt2 == 1) {

        stroke('red');
        if (x1 <= 5000) {
            x1 = x1 + X;
            y1 = y1 + Y;
            if (cnt4 != 1) {
                line(x1, y1, 400, 200);
            }
        }
        if (x1 <= 5000) {
            stroke(255, 204, 0);
            if (a1 >= 400) {
                a1 = a1 + A;
                b1 = b1 + B;
                if (cnt4 != 1)
                    line(a1, b1, 800, 80);
            }
            if (a1 == 400) {
                arr = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
                alert1();
            }

        }
        if (cnt3 == 1) {
            stroke('red');
            if (x2 <= 5000) {
                x2 = x2 + X;
                y2 = y2 + Y;
                if (cnt4 != 1) {
                    line(x2, y2, 400, 240);
                }
            }
            if (x2 <= 5000) {
                stroke(255, 204, 0);
                if (a2 >= 600) {
                    a2 = a2 + A;
                    b2 = b2 + B;
                }
                if (x2 <= 1000) {
                    line(a2, b2, 800, 120);
                }
                if (x2 == 750) {
                    arr = [0, 0, 1, 1, 1, 1, 1, 0, 0, 0];
                    alert2();
                    alert0();
                }

            }

        }

        if (cnt4 == 1) {
            if (x3 <= 5000) {
                stroke('red');
                x3 = x3 + X;
                y3 = y3 + Y;
                if (cnt8 != 1) {
                    if (x3 <= 1000) {
                        line(x3, y3, 400, 80);
                    }
                    if (cnt5 != 1) {
                        line(x3, y3 + 40, 400, 120);
                    }
                    if (cnt6 != 1) {
                        line(x3, y3 + 80, 400, 160);
                    }
                    if (x3 >= 600) {
                        xx = 600;
                        yy = 100;
                    } else {
                        xx = x3;
                        yy = y3
                    }
                    if (cnt8 != 1) {
                        line(xx, yy + 120, 400, 200);
                        line(x3, y3 + 160, 400, 240);
                    }
                }
            }

        }
        if (x3 >= 950) {
            stroke(255, 204, 0);
            if (a3 >= 400) {
                a3 = a3 + A;
                b3 = b3 + B;
                line(a3, b3, 800, 120);
            }
            if (a3 == 400) {
                arr = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
                alert1();
            }
        }

    }

    if (cnt5 == 1) {
        stroke('red');
        if (x4 <= 5000) {
            stroke('red');
            if (x4 <= 5000) {
                x4 = x4 + X;
                y4 = y4 + Y;
                if (cnt8 != 1)
                    line(x4, y4, 400, 280);
            }
        }
        if (x4 <= 5000) {
            stroke(255, 204, 0);
            if (a4 >= 400) {
                a4 = a4 + A;
                b4 = b4 + B;
                if (cnt7 != 1) { line(a4, b4, 800, 160); }
            }
            if (a4 == 400) {
                arr = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
                alert1();
            }

        }
    }

    if (cnt6 == 1) {
        stroke('red');
        if (x5 <= 5000) {
            stroke('red');
            if (x5 <= 5000) {
                x5 = x5 + X;
                y5 = y5 + Y;
                if (cnt8 != 1)
                    line(x5, y5, 400, 320);
            }
        }
        if (x5 <= 5000) {
            stroke(255, 204, 0);
            if (a5 >= 400) {
                a5 = a5 + A;
                b5 = b5 + B;
                if (cnt8 != 1) { line(a5, b5, 800, 200); }
            }
            if (a5 == 400) {
                arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
                alert1();
            }
        }

    }

    if (cnt7 == 1) {
        stroke('red');
        if (x6 <= 5000) {
            stroke('red');
            if (x6 <= 5000) {
                x6 = x6 + X;
                y6 = y6 + Y;
                if (cnt8 != 1)
                    line(x6, y6, 400, 360);
            }
        }
        if (x6 == 900) {
            arr = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1];
            alert3();
            alert0();
        }
    }

    if (cnt8 == 1) {
        if (x7 <= 1000) {
            stroke('red');
            x7 = x7 + X;
            y7 = y7 + Y;
            line(x7, y7, 400, 200);
            line(x7, y7 + 40, 400, 240);
            line(x7, y7 + 80, 400, 280);
            line(x7, y7 + 120, 400, 320);
            line(x7, y7 + 160, 400, 360);


        }
        if (x7 >= 950) {
            stroke(255, 204, 0);
            a7 = a7 + A;
            b7 = b7 + B;
            if (a7 >= 400) {
                line(a7, b7, 800, 240);
                // line(a7, b7 + 40, 800, 280);
                line(a7, b7 + 40, 800, 281);
                line(a7, b7 + 80, 800, 320);
                line(a7, b7 + 120, 800, 360);
                line(a7, b7 + 160, 800, 400);
            }
        }

        if (a7 == 400) {
            arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            alert4();
        }

    }



};