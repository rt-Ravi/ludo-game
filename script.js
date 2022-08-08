const red_btn = document.getElementById("red-btn");
const blue_btn = document.getElementById("blue-btn");
const yellow_btn = document.getElementById("yellow-btn");
const green_btn = document.getElementById("green-btn");
const boxes = [];
const red_circle = [];
const blue_circle = [];
const yellow_circle = [];
const green_circle = [];

const reds = [true, true, true, true];
const blues = [true, true, true, true];
const yellows = [true, true, true, true];
const greens = [true, true, true, true];

const red_start = 15;
const blue_start = 2;
const yellow_start = 41;
const green_start = 28;

const red_boxes = [document.getElementById("15"),];
const blue_boxes = [document.getElementById("2"),];
const yellow_boxes = [document.getElementById("41"),];
const green_boxes = [document.getElementById("28"),];

var count = 0;

var intervali;

var mon = false;

for (let i = 1; i <= 5; i++) {
    let va = "r" + i;
    red_boxes[i] = document.getElementById(va);
    va = "b" + i;
    blue_boxes[i] = document.getElementById(va);
    va = "y" + i;
    yellow_boxes[i] = document.getElementById(va);
    va = "g" + i;
    green_boxes[i] = document.getElementById(va);
}

var num = 0;
var red_current = new Array(3);
var blue_current = new Array(3);
var yellow_current = new Array(3);
var green_current = new Array(3);

var red_inside = [];
var red_in = [false, false, false, false];
var red_win = [false, false, false, false];

var blue_inside = [];
var blue_in = [false, false, false, false];
var blue_win = [false, false, false, false];

var yellow_inside = [];
var yellow_in = [false, false, false, false];
var yellow_win = [false, false, false, false];

var green_inside = [];
var green_in = [false, false, false, false];
var green_win = [false, false, false, false];



for (let i = 0; i <= 3; i++) {
    let valid;
    valid = "red-gitti" + i;
    red_circle[i] = document.getElementById(valid);

    valid = "blue-gitti" + i;
    blue_circle[i] = document.getElementById(valid);

    valid = "yellow-gitti" + i;
    yellow_circle[i] = document.getElementById(valid);

    valid = "green-gitti" + i;
    green_circle[i] = document.getElementById(valid);
}

for (let i = 1; i <= 52; i++) {
    boxes[i] = document.getElementById(i);
}


var red_turn = false, blue_turn = true;

function red() {
    if (red_turn == true) {
        red_rotate(red_btn);
        red_turn = false;
        blue_turn = true;
    }
}

function blue() {
    if (blue_turn == true) {
        blue_rotate(blue_btn);
        blue_turn = false;
        red_turn = true;
    }
}

function yellow() {
    yellow_rotate(yellow_btn);
}

function green() {
    green_rotate(green_btn);
}

function red_rotate(btn) {
    // intervali = null;
    mon = true;
    btn.style = "transform: rotateY(360deg);";
    setTimeout(() => {
        btn.style = "transform: rotateY(0deg);";
        setTimeout(() => {
            num = Math.round(Math.random() * 6);
            if (num == 0)
                num = 6;
            btn.textContent = num;

            if ((num == 6 && !reds[0] && reds[1]) || (num == 6 && !reds[0] && reds[2]) || (num == 6 && !reds[0] && reds[3]) || (num == 6 && !reds[1] && reds[0]) || (num == 6 && !reds[1] && reds[2]) || (num == 6 && !reds[1] && reds[3]) || (num == 6 && !reds[2] && reds[0]) || (num == 6 && !reds[2] && reds[1]) || (num == 6 && !reds[2] && reds[3]) || (num == 6 && !reds[3] && reds[0]) || (num == 6 && !reds[3] && reds[1]) || (num == 6 && !reds[3] && reds[2])) {
                if ((btn.id) == "red-btn") {

                    let run = false;

                    if (!red_in[0] && !reds[0]) {
                        boxes[red_current[0]].addEventListener("click", () => {
                            if (!run && !red_win[0]) {
                                red_run(0);
                                run = true;
                            }
                        });
                    }


                    if (!red_in[1] && !reds[1]) {
                        boxes[red_current[1]].addEventListener("click", () => {
                            if (!run) {
                                red_run(1);
                                run = true;
                            }

                        });
                    }


                    if (!red_in[2] && !reds[2]) {
                        boxes[red_current[2]].addEventListener("click", () => {
                            if (!run) {
                                red_run(2);
                                run = true;
                            }

                        });
                    }


                    if (!red_in[3] && !reds[3]) {
                        boxes[red_current[3]].addEventListener("click", () => {
                            if (!run) {
                                red_run(3);
                                run = true;
                            }

                        });
                    }

                    let click = 0;
                    red_circle[1].addEventListener("click", () => {
                        if (click == 0 && !run && !red_win[1] && num == 6) {
                            red_circle[1].style = "background-color:transparent;";
                            boxes[red_start].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                            reds[1] = false;
                            click++;
                            run = true;
                            red_current[1] = red_start;
                        }
                    });

                    red_circle[2].addEventListener("click", () => {
                        if (click == 0 && !run && !red_win[2] && num == 6) {
                            red_circle[2].style = "background-color:transparent;";
                            boxes[red_start].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                            reds[2] = false;
                            num = 0;
                            click++;
                            run = true;
                            red_current[2] = red_start;
                        }
                    });

                    red_circle[3].addEventListener("click", () => {
                        if (click == 0 && !run && !red_win[3] && num == 6) {
                            red_circle[3].style = "background-color:transparent;";
                            boxes[red_start].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                            reds[3] = false;
                            num = 0;
                            click++;
                            run = true;
                            red_current[3] = red_start;
                        }
                    });
                }
            }


            else if ((num <= 6 && !reds[0] && !reds[1]) || (num <= 6 && !reds[0] && !reds[2]) || (num <= 6 && !reds[0] && !reds[3]) || (num <= 6 && !reds[1] && !reds[2]) || (num <= 6 && !reds[1] && !reds[3]) || (num <= 6 && !reds[2] && !reds[3])) {
                let gitti_mov = false;

                if (red_in[0] && !reds[0]) {
                    red_boxes[red_inside[0]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            if ((red_inside[0] == 5 && num >= 2) || (red_inside[0] == 4 && num >= 3) || (red_inside[0] == 3 && num >= 4) || (red_inside[0] == 2 && num >= 5) || (red_inside[0] == 1 && num >= 6)) {

                            }
                            else {
                                red_run(0);
                                gitti_mov = true;
                            }
                        }
                    })
                }

                if (red_in[1] && !reds[1]) {
                    red_boxes[red_inside[1]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            if ((red_inside[1] == 5 && num >= 2) || (red_inside[1] == 4 && num >= 3) || (red_inside[1] == 3 && num >= 4) || (red_inside[1] == 2 && num >= 5) || (red_inside[1] == 1 && num >= 6)) {

                            }
                            else {
                                red_run(1);
                                gitti_mov = true;
                            }
                        }
                    })
                }

                if (red_in[2] && !reds[2]) {
                    red_boxes[red_inside[2]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            if ((red_inside[2] == 5 && num >= 2) || (red_inside[2] == 4 && num >= 3) || (red_inside[2] == 3 && num >= 4) || (red_inside[2] == 2 && num >= 5) || (red_inside[2] == 1 && num >= 6)) {

                            }
                            else {
                                red_run(2);
                                gitti_mov = true;
                            }
                        }
                    })
                }

                if (red_in[3] && !reds[3]) {
                    red_boxes[red_inside[3]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            if ((red_inside[3] == 5 && num >= 2) || (red_inside[3] == 4 && num >= 3) || (red_inside[3] == 3 && num >= 4) || (red_inside[3] == 2 && num >= 5) || (red_inside[3] == 1 && num >= 6)) {

                            }
                            else {
                                red_run(3);
                                gitti_mov = true;
                            }
                        }
                    })
                }


                if (!red_in[0] && !reds[0]) {

                    boxes[red_current[0]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            red_run(0);
                            gitti_mov = true;
                        }

                    })
                }


                if (!red_in[1] && !reds[1]) {
                    boxes[red_current[1]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            red_run(1);
                            gitti_mov = true;
                        }

                    })
                }


                if (!red_in[2] && !reds[2]) {
                    boxes[red_current[2]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            red_run(2);
                            gitti_mov = true;
                        }

                    })
                }


                if (!red_in[3] && !reds[3]) {
                    boxes[red_current[3]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            red_run(3);
                            gitti_mov = true;
                        }

                    })
                }

            }

            else if (num == 6 && reds[0]) {
                if ((btn.id) == "red-btn") {
                    if (!red_win[0])
                        red_out();
                }
            }

            else if (num == 6 && reds[0] && reds[1] && reds[2] && reds[3]) {
                let click = 0;
                let run = false;
                red_circle[1].addEventListener("click", () => {
                    if (click == 0 && !run && !red_win[1] && num == 6) {
                        red_circle[1].style = "background-color:transparent;";
                        boxes[red_start].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                        reds[1] = false;
                        click++;
                        run = true;
                        red_current[1] = red_start;
                    }
                });

                red_circle[2].addEventListener("click", () => {
                    if (click == 0 && !run && !red_win[2] && num == 6) {
                        red_circle[2].style = "background-color:transparent;";
                        boxes[red_start].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                        reds[2] = false;
                        num = 0;
                        click++;
                        run = true;
                        red_current[2] = red_start;
                    }
                });

                red_circle[3].addEventListener("click", () => {
                    if (click == 0 && !run && !red_win[3] && num == 6) {
                        red_circle[3].style = "background-color:transparent;";
                        boxes[red_start].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                        reds[3] = false;
                        num = 0;
                        click++;
                        run = true;
                        red_current[3] = red_start;
                    }
                });
            }

            else if (num <= 5 && !reds[0]) {

                if ((btn.id) == "red-btn") {
                    if (!red_win[0])
                        red_run(0);
                }
            }

            else if (num <= 5 && !reds[1]) {

                if ((btn.id) == "red-btn") {
                    if (!red_win[1])
                        red_run(1);
                }
            }

            else if (num <= 5 && !reds[2]) {

                if ((btn.id) == "red-btn") {
                    if (!red_win[2])
                        red_run(2);
                }
            }

            else if (num <= 5 && !reds[3]) {

                if ((btn.id) == "red-btn") {
                    if (!red_win[3])
                        red_run(3);
                }
            }

        }, 350);
    }, 350);
}

function red_out() {
    reds[0] = false;
    red_circle[0].style = "background-color:transparent;";
    boxes[red_start].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
    red_current[0] = red_start;
}

function red_run(git) {
    if ((red_inside[git] == 1 && num == 6) || (red_inside[git] == 2 && num >= 5) || (red_inside[git] == 3 && num >= 4) || (red_inside[git] == 4 && num >= 3) || (red_inside[git] == 5 && num >= 2)) {

    }

    else {
        if (mon) {
            console.log("bro i ran");
            intervali = setInterval(() => {
                if (!red_in[git])
                    red_current[git] += 1;

                if (red_current[git] == 53) {
                    red_current[git] = 1;
                }

                if (red_in[git]) {
                    red_inside[git]++;
                    if (red_inside[git] >= 6) {
                        red_boxes[red_inside[git] - 1].style = "background-color:red;";
                        red_win[git] = true;
                        reds[git] = true;
                        red_in[git] = false;
                    }
                    else {
                        var gittiOnback = false;
                        for (var x = 0; x <= 3; x++) {
                            if (git == x)
                                continue;
                            else {
                                if ((red_inside[git] - 1) == red_inside[x]) {
                                    red_boxes[red_inside[git] - 1].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                    gittiOnback = true;
                                }
                            }
                        }
                        if (gittiOnback == false)
                            red_boxes[red_inside[git] - 1].style = "background-color:red;";

                        red_boxes[red_inside[git]].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                    }
                }

                else if (red_current[git] == 1) {
                    var gittiOn52 = false;
                    for (let x = 0; x <= 3; x++) {

                        if (blue_current[x] == 52) {
                            boxes[52].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                            gittiOn52 = true;
                            break;
                        }

                        else if (green_current[x] == 52) {
                            boxes[52].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                            gittiOn52 = true;
                            break;
                        }

                        else if (yellow_current[x] == 52) {
                            boxes[52].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                            gittiOn52 = true;
                            break;
                        }

                        if (git == x)
                            continue;
                        else {
                            if (red_current[x] == 52) {
                                boxes[52].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                gittiOn52 = true;
                                break;
                            }
                        }
                    }
                    if (gittiOn52 == false)
                        boxes[52].style = "background-color:transparent;";

                    boxes[red_current[git]].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                }

                else if (red_current[git] == 14) {
                    var gittiOn13 = false;
                    red_in[git] = true;
                    red_inside[git] = 1;
                    for (let x = 0; x <= 3; x++) {

                        if (green_current[x] == 13) {
                            boxes[13].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                            gittiOn13 = true;
                            break;
                        }

                        else if (yellow_current[x] == 13) {
                            boxes[13].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                            gittiOn13 = true;
                            break;
                        }

                        else if (blue_current[x] == 13) {
                            boxes[13].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                            gittiOn13 = true;
                            break;
                        }

                        if (git == x)
                            continue;
                        else {
                            if (red_current[x] == 13) {
                                boxes[13].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                gittiOn13 = true;
                                break;
                            }
                        }
                    }
                    if (gittiOn13 == false)
                        boxes[13].style = "background-color:transparent;";

                    red_boxes[1].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                    red_current[git] = 0;
                }

                else {
                    var gittiback = true;
                    for (let x = 0; x <= 3; x++) {

                        if ((red_current[git] - 1) == blue_current[x]) {
                            boxes[red_current[git] - 1].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                            gittiback = true;
                            break;
                        }

                        else if ((red_current[git] - 1) == yellow_current[x]) {
                            boxes[red_current[git] - 1].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                            gittiback = true;
                            break;
                        }

                        else if ((red_current[git] - 1) == green_current[x]) {
                            boxes[red_current[git] - 1].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                            gittiback = true;
                            break;
                        }

                        if ((red_current[git] - 1) == blue_current[x]) {
                            boxes[red_current[git] - 1].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                            gittiback = true;
                            break;
                        }

                        else if ((red_current[git] - 1) == yellow_current[x]) {
                            boxes[red_current[git] - 1].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                            gittiback = true;
                            break;
                        }

                        else if ((red_current[git] - 1) == green_current[x]) {
                            boxes[red_current[git] - 1].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                            gittiback = true;
                            break;
                        }

                        else if (git == x)
                            continue;

                        else {
                            if ((red_current[git] - 1) == red_current[x]) {
                                console.log("red_current[git]-1 = " + red_current[git] - 1);
                                console.log("red_current[x] = " + red_current[x]);
                                boxes[red_current[git] - 1].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                gittiback = true;
                                break;
                            } else {
                                gittiback = false;
                            }
                        }
                    }

                    if (!gittiback) {

                        if ((red_current[git] - 1) == 15)
                            boxes[red_current[git] - 1].style = "background-color:red;";
                        else if ((red_current[git] - 1) == 28)
                            boxes[red_current[git] - 1].style = "background-color:green;";
                        else if ((red_current[git] - 1) == 41)
                            boxes[red_current[git] - 1].style = "background-color:yellow;";
                        else if ((red_current[git] - 1) == 2)
                            boxes[red_current[git] - 1].style = "background-color:blue;";
                        else {
                            boxes[red_current[git] - 1].style = "background-color:transparent;";
                        }
                    }

                    boxes[red_current[git]].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                }


                // console.log("i = " + count);
                // console.log("num = " + num);

                count++;

                if (count >= num) {
                    if (red_in[git] == false && red_current[git] != 15 && red_current[git] != 28 && red_current[git] != 41 && red_current[git] != 2) {
                        for (let x = 0; x <= 3; x++) {
                            var blockrun = false;

                            if (red_current[git] == blue_current[x]) {
                                console.log("over");
                                var cutInterval = setInterval(() => {
                                    if (blue_current[x] == 2) {
                                        var gittion2pos = false;
                                        for (var u = 0; u <= 3; u++) {
                                            if (red_current[u] == 2) {
                                                boxes[2].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                                gittion2pos = true;
                                                break;
                                            }
                                            else if (green_current[u] == 2) {
                                                boxes[2].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                gittion2pos = true;
                                                break;
                                            }
                                            else if (yellow_current[u] == 2) {
                                                boxes[2].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                gittion2pos = true;
                                                break;
                                            }
                                            if (x == u)
                                                continue;
                                            else {
                                                if (blue_current[u] == 2) {
                                                    boxes[2].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                                    gittion2pos = true;
                                                    break;
                                                }
                                            }
                                        }
                                        if (gittion2pos == false) {
                                            boxes[2].style = "background-color:blue;";
                                        }
                                        blue_circle[x].style = "background-color:blue;";

                                        blue_current[x] = undefined;
                                        blues[x] = true;
                                        clearInterval(cutInterval);

                                    }

                                    else {
                                        boxes[blue_current[x] - 1].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                        if (blockrun) {
                                            var colorturn = false;
                                            for (var t = 0; t <= 3; t++) {
                                                if (blue_current[x] == red_current[t]) {
                                                    boxes[blue_current[x]].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                                    colorturn = true;
                                                    break;
                                                }
                                                else if (blue_current[x] == yellow_current[t]) {
                                                    boxes[blue_current[x]].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                    colorturn = true;
                                                    break;
                                                }

                                                else if (blue_current[x] == green_current[t]) {
                                                    boxes[blue_current[x]].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                    colorturn = true;
                                                    break;
                                                }

                                                else if (x == t)
                                                    continue;

                                                else if (blue_current[x] == blue_current[t]) {
                                                    boxes[blue_current[x]].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                                    colorturn = true;
                                                    break;
                                                }
                                            }
                                            if (colorturn == false) {
                                                if (blue_current[x] == 41) {
                                                    boxes[blue_current[x]].style = "background-color:yellow;";

                                                }

                                                else if (blue_current[x] == 28) {
                                                    boxes[blue_current[x]].style = "background-color:green;";

                                                }

                                                else if (blue_current[x] == 15) {
                                                    boxes[blue_current[x]].style = "background-color:red;";

                                                }

                                                else
                                                    boxes[blue_current[x]].style = "background-color:transparent;";
                                            }
                                        }

                                        blue_current[x]--;
                                        blockrun = true;
                                    }

                                }, 400);

                                break;

                            }

                            else if (red_current[git] == yellow_current[x]) {
                                console.log("over");
                                var cutInterval = setInterval(() => {
                                    if (yellow_current[x] == 41) {
                                        var gittionyellowSt = false;
                                        for (var u = 0; u <= 3; u++) {

                                            if (blue_current[u] == 41) {
                                                boxes[41].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                                gittionyellowSt = true;
                                                break;
                                            }

                                            else if (green_current[u] == 41) {
                                                boxes[41].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                gittionyellowSt = true;
                                                break;
                                            }

                                            else if (red_current[u] == 41) {
                                                boxes[41].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                                gittionyellowSt = true;
                                                break;
                                            }

                                            if (x == u)
                                                continue;

                                            else {
                                                if (yellow_current[u] == 41) {
                                                    boxes[41].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                    gittionyellowSt = true;
                                                    break;
                                                }
                                            }
                                        }

                                        if (gittionyellowSt == false) {
                                            boxes[41].style = "background-color:yellow;";
                                        }

                                        yellow_circle[x].style = "background-color:yellow;";
                                        yellows[x] = true;
                                        yellow_current[x] = undefined;
                                        clearInterval(cutInterval);
                                    }

                                    else {

                                        if (yellow_current[x] == 1) {
                                            var nogittion1 = false;
                                            boxes[52].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                            for (var j = 0; j <= 3; j++) {
                                                if (green_current[j] == 1) {
                                                    boxes[1].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                    nogittion1 = true;
                                                    break;
                                                }

                                                else if (red_current[j] == 1) {
                                                    boxes[1].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                                    nogittion1 = true;
                                                    break;
                                                }

                                                if (x == j)
                                                    continue;
                                                else {
                                                    if (yellow_current[j] == 1) {
                                                        boxes[1].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                        nogittion1 = true;
                                                        break;
                                                    }
                                                }
                                            }
                                            if (nogittion1 == false) {
                                                boxes[1].style = "background-color:transparent;";
                                            }
                                        }

                                        else {

                                            boxes[yellow_current[x] - 1].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";

                                            if (blockrun) {
                                                var colorturn = false;
                                                for (var t = 0; t <= 3; t++) {
                                                    if (yellow_current[x] == blue_current[t]) {
                                                        boxes[yellow_current[x]].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }
                                                    else if (yellow_current[x] == red_current[t]) {
                                                        boxes[yellow_current[x]].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }

                                                    else if (yellow_current[x] == green_current[t]) {
                                                        boxes[yellow_current[x]].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }
                                                }
                                                if (colorturn == false) {
                                                    if (yellow_current[x] == 41) {
                                                        boxes[yellow_current[x]].style = "background-color:yellow;";

                                                    }


                                                    else if (yellow_current[x] == 2) {
                                                        boxes[yellow_current[x]].style = "background-color:blue;";
                                                    }

                                                    else if (yellow_current[x] == 28) {
                                                        boxes[yellow_current[x]].style = "background-color:green;";

                                                    }

                                                    else if (yellow_current[x] == 15) {
                                                        boxes[yellow_current[x]].style = "background-color:red;";

                                                    }

                                                    else
                                                        boxes[yellow_current[x]].style = "background-color:transparent;";
                                                }
                                            }
                                        }

                                        yellow_current[x]--;

                                        if (yellow_current[x] == 0)
                                            yellow_current[x] = 52;

                                        blockrun = true;
                                    }

                                }, 400);

                                break;


                            }

                            else if (red_current[git] == green_current[x]) {
                                console.log("over");
                                var cutInterval = setInterval(() => {
                                    if (green_current[x] == 28) {
                                        var gittiongreenSt = false;
                                        for (var u = 0; u <= 3; u++) {

                                            if (blue_current[u] == 28) {
                                                boxes[28].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                                gittiongreenSt = true;
                                                break;
                                            }

                                            else if (red_current[u] == 28) {
                                                boxes[28].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                                gittiongreenSt = true;
                                                break;
                                            }

                                            else if (yellow_current[u] == 28) {
                                                boxes[28].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                gittiongreenSt = true;
                                                break;
                                            }

                                            if (x == u)
                                                continue;

                                            else {
                                                if (green_current[u] == 28) {
                                                    boxes[28].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                    gittiongreenSt = true;
                                                    break;
                                                }
                                            }
                                        }

                                        if (gittiongreenSt == false) {
                                            boxes[28].style = "background-color:green;";
                                        }

                                        green_circle[x].style = "background-color:green;";
                                        greens[x] = true;
                                        green_current[x] = undefined;
                                        clearInterval(cutInterval);
                                    }

                                    else {

                                        if (green_current[x] == 1) {
                                            var nogittion1 = false;
                                            boxes[52].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                            for (var j = 0; j <= 3; j++) {
                                                if (red_current[j] == 1) {
                                                    boxes[1].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                                    nogittion1 = true;
                                                    break;
                                                }

                                                else if (yellow_current[j] == 1) {
                                                    boxes[1].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                    nogittion1 = true;
                                                    break;
                                                }

                                                if (x == j)
                                                    continue;
                                                else {
                                                    if (green_current[j] == 1) {
                                                        boxes[1].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                        nogittion1 = true;
                                                        break;
                                                    }
                                                }
                                            }
                                            if (nogittion1 == false) {
                                                boxes[1].style = "background-color:transparent;";
                                            }
                                        }

                                        else {

                                            boxes[green_current[x] - 1].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";

                                            if (blockrun) {
                                                var colorturn = false;
                                                for (var t = 0; t <= 3; t++) {
                                                    if (green_current[x] == blue_current[t]) {
                                                        boxes[green_current[x]].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }
                                                    else if (green_current[x] == yellow_current[t]) {
                                                        boxes[green_current[x]].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }

                                                    else if (green_current[x] == red_current[t]) {
                                                        boxes[green_current[x]].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }
                                                }
                                                if (colorturn == false) {
                                                    if (green_current[x] == 41) {
                                                        boxes[green_current[x]].style = "background-color:yellow;";

                                                    }


                                                    else if (green_current[x] == 2) {
                                                        boxes[green_current[x]].style = "background-color:blue;";
                                                    }

                                                    else if (green_current[x] == 28) {
                                                        boxes[green_current[x]].style = "background-color:green;";

                                                    }

                                                    else if (green_current[x] == 15) {
                                                        boxes[green_current[x]].style = "background-color:red;";

                                                    }

                                                    else
                                                        boxes[green_current[x]].style = "background-color:transparent;";
                                                }
                                            }
                                        }

                                        green_current[x]--;

                                        if (green_current[x] == 0)
                                            green_current[x] = 52;

                                        blockrun = true;
                                    }

                                }, 400);

                                break;

                            }

                        }
                    }
                    count = 0;
                    clearInterval(intervali);
                    console.log("stoped");
                }
            }, 300);
            mon = false;
        }
    }
}




























function blue_rotate(btn) {
    // intervali = null;
    mon = true;
    btn.style = "transform: rotateY(360deg);";
    setTimeout(() => {
        btn.style = "transform: rotateY(0deg);";
        setTimeout(() => {
            num = Math.round(Math.random() * 6);
            if (num == 0)
                num = 6;
            btn.textContent = num;

            if ((num == 6 && !blues[0] && blues[1]) || (num == 6 && !blues[0] && blues[2]) || (num == 6 && !blues[0] && blues[3]) || (num == 6 && !blues[1] && blues[0]) || (num == 6 && !blues[1] && blues[2]) || (num == 6 && !blues[1] && blues[3]) || (num == 6 && !blues[2] && blues[0]) || (num == 6 && !blues[2] && blues[1]) || (num == 6 && !blues[2] && blues[3]) || (num == 6 && !blues[3] && blues[0]) || (num == 6 && !blues[3] && blues[1]) || (num == 6 && !blues[3] && blues[2])) {
                if ((btn.id) == "blue-btn") {

                    let run = false;

                    if (!blue_in[0] && !blues[0]) {
                        boxes[blue_current[0]].addEventListener("click", () => {
                            if (!run && !blue_win[0]) {
                                blue_run(0);
                                run = true;
                            }
                        });
                    }


                    if (!blue_in[1] && !blues[1]) {
                        boxes[blue_current[1]].addEventListener("click", () => {
                            if (!run) {
                                blue_run(1);
                                run = true;
                            }

                        });
                    }


                    if (!blue_in[2] && !blues[2]) {
                        boxes[blue_current[2]].addEventListener("click", () => {
                            if (!run) {
                                blue_run(2);
                                run = true;
                            }

                        });
                    }


                    if (!blue_in[3] && !blues[3]) {
                        boxes[blue_current[3]].addEventListener("click", () => {
                            if (!run) {
                                blue_run(3);
                                run = true;
                            }

                        });
                    }

                    let click = 0;

                    blue_circle[0].addEventListener("click", () => {
                        if (click == 0 && !run && !blue_win[0] && num == 6) {
                            blue_circle[0].style = "background-color:transparent;";
                            boxes[blue_start].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                            blues[0] = false;
                            click++;
                            run = true;
                            blue_current[0] = blue_start;
                        }
                    })

                    blue_circle[1].addEventListener("click", () => {
                        if (click == 0 && !run && !blue_win[1] && num == 6) {
                            blue_circle[1].style = "background-color:transparent;";
                            boxes[blue_start].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                            blues[1] = false;
                            click++;
                            run = true;
                            blue_current[1] = blue_start;
                        }
                    });

                    blue_circle[2].addEventListener("click", () => {
                        if (click == 0 && !run && !blue_win[2] && num == 6) {
                            blue_circle[2].style = "background-color:transparent;";
                            boxes[blue_start].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                            blues[2] = false;
                            num = 0;
                            click++;
                            run = true;
                            blue_current[2] = blue_start;
                        }
                    });

                    blue_circle[3].addEventListener("click", () => {
                        if (click == 0 && !run && !blue_win[3] && num == 6) {
                            blue_circle[3].style = "background-color:transparent;";
                            boxes[blue_start].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                            blues[3] = false;
                            num = 0;
                            click++;
                            run = true;
                            blue_current[3] = blue_start;
                        }
                    });
                }
            }


            else if ((num <= 6 && !blues[0] && !blues[1]) || (num <= 6 && !blues[0] && !blues[2]) || (num <= 6 && !blues[0] && !blues[3]) || (num <= 6 && !blues[1] && !blues[2]) || (num <= 6 && !blues[1] && !blues[3]) || (num <= 6 && !blues[2] && !blues[3])) {
                let gitti_mov = false;

                if (blue_in[0] && !blues[0]) {
                    blue_boxes[blue_inside[0]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            blue_run(0);
                            gitti_mov = true;
                        }
                    })
                }

                if (blue_in[1] && !blues[1]) {
                    blue_boxes[blue_inside[1]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            blue_run(1);
                            gitti_mov = true;
                        }
                    })
                }

                if (blue_in[2] && !blues[2]) {
                    blue_boxes[blue_inside[2]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            blue_run(2);
                            gitti_mov = true;
                        }
                    })
                }

                if (blue_in[3] && !blues[3]) {
                    blue_boxes[blue_inside[3]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            blue_run(3);
                            gitti_mov = true;
                        }
                    })
                }


                if (!blue_in[0] && !blues[0]) {

                    boxes[blue_current[0]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            blue_run(0);
                            gitti_mov = true;
                        }

                    })
                }


                if (!blue_in[1] && !blues[1]) {
                    boxes[blue_current[1]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            blue_run(1);
                            gitti_mov = true;
                        }

                    })
                }


                if (!blue_in[2] && !blues[2]) {
                    boxes[blue_current[2]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            blue_run(2);
                            gitti_mov = true;
                        }

                    })
                }


                if (!blue_in[3] && !blues[3]) {
                    boxes[blue_current[3]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            blue_run(3);
                            gitti_mov = true;
                        }

                    })
                }

            }

            else if (num == 6 && blues[0]) {
                if ((btn.id) == "blue-btn") {
                    if (!blue_win[0])
                        blue_out();
                }
            }

            else if ((num == 6 && blues[0] && blues[1]) && blues[2] && blues[3]) {
                let click = 0;
                let run = false;


                blue_circle[0].addEventListener("click", () => {
                    if (click == 0 && !run && !blue_win[0] && num == 6) {
                        blue_circle[0].style = "background-color:transparent;";
                        boxes[blue_start].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                        blues[0] = false;
                        click++;
                        run = true;
                        blue_current[0] = blue_start;
                    }
                });



                blue_circle[1].addEventListener("click", () => {
                    if (click == 0 && !run && !blue_win[1] && num == 6) {
                        blue_circle[1].style = "background-color:transparent;";
                        boxes[blue_start].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                        blues[1] = false;
                        click++;
                        run = true;
                        blue_current[1] = blue_start;
                    }
                });



                blue_circle[2].addEventListener("click", () => {
                    if (click == 0 && !run && !blue_win[2] && num == 6) {
                        blue_circle[2].style = "background-color:transparent;";
                        boxes[blue_start].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                        blues[2] = false;
                        num = 0;
                        click++;
                        run = true;
                        blue_current[2] = blue_start;
                    }
                });


                blue_circle[3].addEventListener("click", () => {
                    if (click == 0 && !run && !blue_win[3] && num == 6) {
                        blue_circle[3].style = "background-color:transparent;";
                        boxes[blue_start].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                        blues[3] = false;
                        num = 0;
                        click++;
                        run = true;
                        blue_current[3] = blue_start;
                    }
                });

            }

            else if (num <= 5 && !blues[0]) {

                if ((btn.id) == "blue-btn") {
                    if (!blue_win[0])
                        blue_run(0);
                }
            }

            else if (num <= 5 && !blues[1]) {

                if ((btn.id) == "blue-btn") {
                    if (!blue_win[1])
                        blue_run(1);
                }
            }

            else if (num <= 5 && !blues[2]) {

                if ((btn.id) == "blue-btn") {
                    if (!blue_win[2])
                        blue_run(2);
                }
            }

            else if (num <= 5 && !blues[3]) {

                if ((btn.id) == "blue-btn") {
                    if (!blue_win[3])
                        blue_run(3);
                }
            }

        }, 350);
    }, 350);
}

function blue_out() {
    blues[0] = false;
    blue_circle[0].style = "background-color:transparent;";
    boxes[blue_start].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
    blue_current[0] = blue_start;
}

function blue_run(git) {
    if ((blue_inside[git] == 1 && num == 6) || (blue_inside[git] == 2 && num >= 5) || (blue_inside[git] == 3 && num >= 4) || (blue_inside[git] == 4 && num >= 3) || (blue_inside[git] == 5 && num >= 2)) {

    }

    else {
        if (mon) {
            console.log("blue i ran");
            intervali = setInterval(() => {
                if (!blue_in[git])
                    blue_current[git] += 1;

                if (blue_current[git] == 53) {
                    blue_in[git] = true;
                    blue_current[git] = 0;
                    blue_inside[git] = 0;

                    var gittiOn52 = false;
                    for (var x = 0; x <= 3; x++) {

                        if (red_current[x] == 52) {
                            boxes[52].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                            gittiOn52 = true;
                            break;
                        }
                        else if (green_current[x] == 52) {
                            boxes[52].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                            gittiOn52 = true;
                            break;
                        }
                        else if (yellow_current[x] == 52) {
                            boxes[52].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                            gittiOn52 = true;
                            break;
                        }

                        if (git == x)
                            continue;

                        else {
                            if (blue_current[x] == 52) {
                                boxes[52].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                gittiOn52 = true;
                                break;
                            }

                        }
                    }

                    if (gittiOn52 == false)
                        boxes[52].style = "background-color:transparent;";
                }

                if (blue_in[git]) {
                    blue_inside[git]++;
                    if (blue_inside[git] >= 6) {
                        blue_boxes[blue_inside[git] - 1].style = "background-color:blue;";
                        blue_win[git] = true;
                        blues[git] = true;
                        blue_in[git] = false;
                    }
                    else {
                        var gittiOnback = false;
                        for (var x = 0; x <= 3; x++) {
                            if (git == x)
                                continue;
                            else {
                                if ((blue_inside[git] - 1) == blue_inside[x]) {
                                    blue_boxes[blue_inside[git] - 1].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                    gittiOnback = true;
                                }
                            }
                        }
                        if (gittiOnback == false) {
                            if ((blue_inside[git] - 1) > 0) {
                                blue_boxes[blue_inside[git] - 1].style = "background-color:blue;";
                                console.log("t ran");
                            }
                        }


                        blue_boxes[blue_inside[git]].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                    }
                }

                else {

                    var gittiback = true;
                    for (let x = 0; x <= 3; x++) {

                        if ((blue_current[git] - 1) == red_current[x]) {
                            boxes[blue_current[git] - 1].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                            gittiback = true;
                            break;
                        }

                        else if ((blue_current[git] - 1) == yellow_current[x]) {
                            boxes[blue_current[git] - 1].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                            gittiback = true;
                            break;
                        }

                        else if ((blue_current[git] - 1) == green_current[x]) {
                            boxes[blue_current[git] - 1].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                            gittiback = true;
                            break;
                        }

                        else if (git == x)
                            continue;
                        else {
                            if ((blue_current[git] - 1) == blue_current[x]) {
                                console.log("blue_current[git]-1 = " + blue_current[git] - 1);
                                console.log("blue_current[x] = " + blue_current[x]);
                                boxes[blue_current[git] - 1].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                gittiback = true;
                                break;
                            }

                            else {
                                gittiback = false;
                            }
                        }
                    }

                    if (!gittiback) {

                        if ((blue_current[git] - 1) == 15)
                            boxes[blue_current[git] - 1].style = "background-color:red;";
                        else if ((blue_current[git] - 1) == 28)
                            boxes[blue_current[git] - 1].style = "background-color:green;";
                        else if ((blue_current[git] - 1) == 41)
                            boxes[blue_current[git] - 1].style = "background-color:yellow;";
                        else if ((blue_current[git] - 1) == 2)
                            boxes[blue_current[git] - 1].style = "background-color:blue;";
                        else {
                            boxes[blue_current[git] - 1].style = "background-color:transparent;";
                        }
                    }

                    boxes[blue_current[git]].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                }

                // console.log("i = " + count);
                // console.log("num = " + num);

                count++;

                if (count >= num) {
                    if (blue_in[git] == false && blue_current[git] != 15 && blue_current[git] != 28 && blue_current[git] != 41 && blue_current[git] != 2) {
                        for (let x = 0; x <= 3; x++) {
                            var blockrun = false;
                            var gittionredSt = false;
                            if (blue_current[git] == red_current[x]) {
                                console.log("over");
                                var cutInterval = setInterval(() => {
                                    if (red_current[x] == 15) {
                                        for (var u = 0; u <= 3; u++) {

                                            if (blue_current[u] == 15) {
                                                boxes[2].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                                gittionredSt = true;
                                                break;
                                            }

                                            else if (green_current[u] == 15) {
                                                boxes[2].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                gittionredSt = true;
                                                break;
                                            }

                                            else if (yellow_current[u] == 15) {
                                                boxes[2].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                gittionredSt = true;
                                                break;
                                            }

                                            if (x == u)
                                                continue;

                                            else {
                                                if (red_current[u] == 15) {
                                                    boxes[2].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                                    gittionredSt = true;
                                                    break;
                                                }
                                            }
                                        }

                                        if (gittionredSt == false) {
                                            boxes[15].style = "background-color:red;";
                                        }

                                        red_circle[x].style = "background-color:red;";
                                        reds[x] = true;
                                        red_current[x] = undefined;
                                        clearInterval(cutInterval);
                                    }

                                    else {

                                        if (red_current[x] == 1) {
                                            var nogittion1 = false;
                                            boxes[52].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                            for (var j = 0; j <= 3; j++) {
                                                if (green_current[j] == 1) {
                                                    boxes[1].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                    nogittion1 = true;
                                                    break;
                                                }

                                                else if (yellow_current[j] == 1) {
                                                    boxes[1].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                    nogittion1 = true;
                                                    break;
                                                }

                                                if (x == j)
                                                    continue;
                                                else {
                                                    if (red_current[j] == 1) {
                                                        boxes[1].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                                        nogittion1 = true;
                                                        break;
                                                    }
                                                }
                                            }
                                            if (nogittion1 == false) {
                                                boxes[1].style = "background-color:transparent;";
                                            }
                                        }

                                        else {

                                            boxes[red_current[x] - 1].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";

                                            if (blockrun) {
                                                var colorturn = false;
                                                for (var t = 0; t <= 3; t++) {
                                                    if (red_current[x] == blue_current[t]) {
                                                        boxes[red_current[x]].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }
                                                    else if (red_current[x] == yellow_current[t]) {
                                                        boxes[red_current[x]].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }

                                                    else if (red_current[x] == green_current[t]) {
                                                        boxes[red_current[x]].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }
                                                }
                                                if (colorturn == false) {
                                                    if (red_current[x] == 41) {
                                                        boxes[red_current[x]].style = "background-color:yellow;";

                                                    }


                                                    else if (red_current[x] == 2) {
                                                        boxes[red_current[x]].style = "background-color:blue;";
                                                    }

                                                    else if (red_current[x] == 28) {
                                                        boxes[red_current[x]].style = "background-color:green;";

                                                    }

                                                    else if (red_current[x] == 15) {
                                                        boxes[red_current[x]].style = "background-color:red;";

                                                    }

                                                    else
                                                        boxes[red_current[x]].style = "background-color:transparent;";
                                                }
                                            }
                                        }

                                        red_current[x]--;

                                        if (red_current[x] == 0)
                                            red_current[x] = 52;

                                        blockrun = true;
                                    }

                                }, 400);

                                break;

                            }


                            else if (blue_current[git] == yellow_current[x]) {
                                console.log("over");
                                var cutInterval = setInterval(() => {
                                    if (yellow_current[x] == 41) {
                                        var gittionyellowSt = false;
                                        for (var u = 0; u <= 3; u++) {

                                            if (blue_current[u] == 41) {
                                                boxes[41].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                                gittionyellowSt = true;
                                                break;
                                            }

                                            else if (green_current[u] == 41) {
                                                boxes[41].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                gittionyellowSt = true;
                                                break;
                                            }

                                            else if (red_current[u] == 41) {
                                                boxes[41].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                                gittionyellowSt = true;
                                                break;
                                            }

                                            if (x == u)
                                                continue;

                                            else {
                                                if (yellow_current[u] == 41) {
                                                    boxes[41].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                    gittionyellowSt = true;
                                                    break;
                                                }
                                            }
                                        }

                                        if (gittionyellowSt == false) {
                                            boxes[41].style = "background-color:yellow;";
                                        }

                                        yellow_circle[x].style = "background-color:yellow;";
                                        yellows[x] = true;
                                        yellow_current[x] = undefined;
                                        clearInterval(cutInterval);
                                    }

                                    else {

                                        if (yellow_current[x] == 1) {
                                            var nogittion1 = false;
                                            boxes[52].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                            for (var j = 0; j <= 3; j++) {
                                                if (green_current[j] == 1) {
                                                    boxes[1].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                    nogittion1 = true;
                                                    break;
                                                }

                                                else if (red_current[j] == 1) {
                                                    boxes[1].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                                    nogittion1 = true;
                                                    break;
                                                }

                                                if (x == j)
                                                    continue;
                                                else {
                                                    if (yellow_current[j] == 1) {
                                                        boxes[1].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                        nogittion1 = true;
                                                        break;
                                                    }
                                                }
                                            }
                                            if (nogittion1 == false) {
                                                boxes[1].style = "background-color:transparent;";
                                            }
                                        }

                                        else {

                                            boxes[yellow_current[x] - 1].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";

                                            if (blockrun) {
                                                var colorturn = false;
                                                for (var t = 0; t <= 3; t++) {
                                                    if (yellow_current[x] == blue_current[t]) {
                                                        boxes[yellow_current[x]].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }
                                                    else if (yellow_current[x] == red_current[t]) {
                                                        boxes[yellow_current[x]].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }

                                                    else if (yellow_current[x] == green_current[t]) {
                                                        boxes[yellow_current[x]].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }
                                                }
                                                if (colorturn == false) {
                                                    if (yellow_current[x] == 41) {
                                                        boxes[yellow_current[x]].style = "background-color:yellow;";

                                                    }


                                                    else if (yellow_current[x] == 2) {
                                                        boxes[yellow_current[x]].style = "background-color:blue;";
                                                    }

                                                    else if (yellow_current[x] == 28) {
                                                        boxes[yellow_current[x]].style = "background-color:green;";

                                                    }

                                                    else if (yellow_current[x] == 15) {
                                                        boxes[yellow_current[x]].style = "background-color:red;";

                                                    }

                                                    else
                                                        boxes[yellow_current[x]].style = "background-color:transparent;";
                                                }
                                            }
                                        }

                                        yellow_current[x]--;

                                        if (yellow_current[x] == 0)
                                            yellow_current[x] = 52;

                                        blockrun = true;
                                    }

                                }, 400);

                                break;


                            }


                            else if (blue_current[git] == green_current[x]) {
                                console.log("over");
                                var cutInterval = setInterval(() => {
                                    if (green_current[x] == 28) {
                                        var gittiongreenSt = false;
                                        for (var u = 0; u <= 3; u++) {

                                            if (blue_current[u] == 28) {
                                                boxes[28].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                                gittiongreenSt = true;
                                                break;
                                            }

                                            else if (red_current[u] == 28) {
                                                boxes[28].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                                gittiongreenSt = true;
                                                break;
                                            }

                                            else if (yellow_current[u] == 28) {
                                                boxes[28].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                gittiongreenSt = true;
                                                break;
                                            }

                                            if (x == u)
                                                continue;

                                            else {
                                                if (green_current[u] == 28) {
                                                    boxes[28].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                    gittiongreenSt = true;
                                                    break;
                                                }
                                            }
                                        }

                                        if (gittiongreenSt == false) {
                                            boxes[28].style = "background-color:green;";
                                        }

                                        green_circle[x].style = "background-color:green;";
                                        greens[x] = true;
                                        green_current[x] = undefined;
                                        clearInterval(cutInterval);
                                    }

                                    else {

                                        if (green_current[x] == 1) {
                                            var nogittion1 = false;
                                            boxes[52].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                            for (var j = 0; j <= 3; j++) {
                                                if (red_current[j] == 1) {
                                                    boxes[1].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                                    nogittion1 = true;
                                                    break;
                                                }

                                                else if (yellow_current[j] == 1) {
                                                    boxes[1].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                    nogittion1 = true;
                                                    break;
                                                }

                                                if (x == j)
                                                    continue;
                                                else {
                                                    if (green_current[j] == 1) {
                                                        boxes[1].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                        nogittion1 = true;
                                                        break;
                                                    }
                                                }
                                            }
                                            if (nogittion1 == false) {
                                                boxes[1].style = "background-color:transparent;";
                                            }
                                        }

                                        else {

                                            boxes[green_current[x] - 1].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";

                                            if (blockrun) {
                                                var colorturn = false;
                                                for (var t = 0; t <= 3; t++) {
                                                    if (green_current[x] == blue_current[t]) {
                                                        boxes[green_current[x]].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }
                                                    else if (green_current[x] == yellow_current[t]) {
                                                        boxes[green_current[x]].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }

                                                    else if (green_current[x] == red_current[t]) {
                                                        boxes[green_current[x]].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }
                                                }
                                                if (colorturn == false) {
                                                    if (green_current[x] == 41) {
                                                        boxes[green_current[x]].style = "background-color:yellow;";

                                                    }


                                                    else if (green_current[x] == 2) {
                                                        boxes[green_current[x]].style = "background-color:blue;";
                                                    }

                                                    else if (green_current[x] == 28) {
                                                        boxes[green_current[x]].style = "background-color:green;";

                                                    }

                                                    else if (green_current[x] == 15) {
                                                        boxes[green_current[x]].style = "background-color:red;";

                                                    }

                                                    else
                                                        boxes[green_current[x]].style = "background-color:transparent;";
                                                }
                                            }
                                        }

                                        green_current[x]--;

                                        if (green_current[x] == 0)
                                            green_current[x] = 52;

                                        blockrun = true;
                                    }

                                }, 400);

                                break;

                            }



                        }
                    }

                    count = 0;
                    clearInterval(intervali);
                    console.log("stoped");
                }
            }, 300);
            mon = false;
        }
    }
}












// yellow player





function yellow_rotate(btn) {
    // intervali = null;
    mon = true;
    btn.style = "transform: rotateY(360deg);";
    setTimeout(() => {
        btn.style = "transform: rotateY(0deg);";
        setTimeout(() => {
            num = Math.round(Math.random() * 6);
            if (num == 0)
                num = 6;
            btn.textContent = num;

            if ((num == 6 && !yellows[0] && yellows[1]) || (num == 6 && !yellows[0] && yellows[2]) || (num == 6 && !yellows[0] && yellows[3]) || (num == 6 && !yellows[1] && yellows[0]) || (num == 6 && !yellows[1] && yellows[2]) || (num == 6 && !yellows[1] && yellows[3]) || (num == 6 && !yellows[2] && yellows[0]) || (num == 6 && !yellows[2] && yellows[1]) || (num == 6 && !yellows[2] && yellows[3]) || (num == 6 && !yellows[3] && yellows[0]) || (num == 6 && !yellows[3] && yellows[1]) || (num == 6 && !yellows[3] && yellows[2])) {
                if ((btn.id) == "yellow-btn") {


                    let run = false;

                    if (!yellow_in[0] && !yellows[0]) {
                        boxes[yellow_current[0]].addEventListener("click", () => {
                            if (!run && !yellow_win[0]) {
                                yellow_run(0);
                                run = true;
                            }
                        });
                    }


                    if (!yellow_in[1] && !yellows[1]) {
                        boxes[yellow_current[1]].addEventListener("click", () => {
                            if (!run) {
                                yellow_run(1);
                                run = true;
                            }

                        });
                    }


                    if (!yellow_in[2] && !yellows[2]) {
                        boxes[yellow_current[2]].addEventListener("click", () => {
                            if (!run) {
                                yellow_run(2);
                                run = true;
                            }

                        });
                    }


                    if (!yellow_in[3] && !yellows[3]) {
                        boxes[yellow_current[3]].addEventListener("click", () => {
                            if (!run) {
                                yellow_run(3);
                                run = true;
                            }

                        });
                    }

                    let click = 0;
                    yellow_circle[1].addEventListener("click", () => {
                        if (click == 0 && !run && !yellow_win[1] && num == 6) {
                            yellow_circle[1].style = "background-color:transparent;";
                            boxes[yellow_start].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                            yellows[1] = false;
                            click++;
                            run = true;
                            yellow_current[1] = yellow_start;
                        }
                    });

                    yellow_circle[2].addEventListener("click", () => {
                        if (click == 0 && !run && !yellow_win[2] && num == 6) {
                            yellow_circle[2].style = "background-color:transparent;";
                            boxes[yellow_start].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                            yellows[2] = false;
                            num = 0;
                            click++;
                            run = true;
                            yellow_current[2] = yellow_start;
                        }
                    });

                    yellow_circle[3].addEventListener("click", () => {
                        if (click == 0 && !run && !yellow_win[3] && num == 6) {
                            yellow_circle[3].style = "background-color:transparent;";
                            boxes[yellow_start].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                            yellows[3] = false;
                            num = 0;
                            click++;
                            run = true;
                            yellow_current[3] = yellow_start;
                        }
                    });
                }
            }


            else if ((num <= 6 && !yellows[0] && !yellows[1]) || (num <= 6 && !yellows[0] && !yellows[2]) || (num <= 6 && !yellows[0] && !yellows[3]) || (num <= 6 && !yellows[1] && !yellows[2]) || (num <= 6 && !yellows[1] && !yellows[3]) || (num <= 6 && !yellows[2] && !yellows[3])) {
                let gitti_mov = false;

                if (yellow_in[0] && !yellows[0]) {
                    yellow_boxes[yellow_inside[0]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            if ((yellow_inside[0] == 5 && num >= 2) || (yellow_inside[0] == 4 && num >= 3) || (yellow_inside[0] == 3 && num >= 4) || (yellow_inside[0] == 2 && num >= 5) || (yellow_inside[0] == 1 && num >= 6)) {

                            }
                            else {
                                yellow_run(0);
                                gitti_mov = true;
                            }
                        }
                    })
                }

                if (yellow_in[1] && !yellows[1]) {
                    yellow_boxes[yellow_inside[1]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            if ((yellow_inside[1] == 5 && num >= 2) || (yellow_inside[1] == 4 && num >= 3) || (yellow_inside[1] == 3 && num >= 4) || (yellow_inside[1] == 2 && num >= 5) || (yellow_inside[1] == 1 && num >= 6)) {

                            }
                            else {
                                yellow_run(1);
                                gitti_mov = true;
                            }
                        }
                    })
                }

                if (yellow_in[2] && !yellows[2]) {
                    yellow_boxes[yellow_inside[2]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            if ((yellow_inside[2] == 5 && num >= 2) || (yellow_inside[2] == 4 && num >= 3) || (yellow_inside[2] == 3 && num >= 4) || (yellow_inside[2] == 2 && num >= 5) || (yellow_inside[2] == 1 && num >= 6)) {

                            }
                            else {
                                yellow_run(2);
                                gitti_mov = true;
                            }
                        }
                    })
                }

                if (yellow_in[3] && !yellows[3]) {
                    yellow_boxes[yellow_inside[3]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            if ((yellow_inside[3] == 5 && num >= 2) || (yellow_inside[3] == 4 && num >= 3) || (yellow_inside[3] == 3 && num >= 4) || (yellow_inside[3] == 2 && num >= 5) || (yellow_inside[3] == 1 && num >= 6)) {

                            }
                            else {
                                yellow_run(3);
                                gitti_mov = true;
                            }
                        }
                    })
                }


                if (!yellow_in[0] && !yellows[0]) {

                    boxes[yellow_current[0]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            yellow_run(0);
                            gitti_mov = true;
                        }

                    })
                }


                if (!yellow_in[1] && !yellows[1]) {
                    boxes[yellow_current[1]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            yellow_run(1);
                            gitti_mov = true;
                        }

                    })
                }


                if (!yellow_in[2] && !yellows[2]) {
                    boxes[yellow_current[2]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            yellow_run(2);
                            gitti_mov = true;
                        }

                    })
                }


                if (!yellow_in[3] && !yellows[3]) {
                    boxes[yellow_current[3]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            yellow_run(3);
                            gitti_mov = true;
                        }

                    })
                }

            }

            else if (num == 6 && yellows[0]) {
                if ((btn.id) == "yellow-btn") {
                    if (!yellow_win[0])
                        yellow_out();
                }
            }

            else if (num == 6 && yellows[0] && yellows[1] && yellows[2] && yellows[3]) {
                let click = 0;
                let run = false;
                yellow_circle[1].addEventListener("click", () => {
                    if (click == 0 && !run && !yellow_win[1] && num == 6) {
                        yellow_circle[1].style = "background-color:transparent;";
                        boxes[yellow_start].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                        yellows[1] = false;
                        click++;
                        run = true;
                        yellow_current[1] = yellow_start;
                    }
                });

                yellow_circle[2].addEventListener("click", () => {
                    if (click == 0 && !run && !yellow_win[2] && num == 6) {
                        yellow_circle[2].style = "background-color:transparent;";
                        boxes[yellow_start].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                        yellows[2] = false;
                        num = 0;
                        click++;
                        run = true;
                        yellow_current[2] = yellow_start;
                    }
                });

                yellow_circle[3].addEventListener("click", () => {
                    if (click == 0 && !run && !yellow_win[3] && num == 6) {
                        yellow_circle[3].style = "background-color:transparent;";
                        boxes[yellow_start].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                        yellows[3] = false;
                        num = 0;
                        click++;
                        run = true;
                        yellow_current[3] = yellow_start;
                    }
                });
            }

            else if (num <= 5 && !yellows[0]) {

                if ((btn.id) == "yellow-btn") {
                    if (!yellow_win[0])
                        yellow_run(0);
                }
            }

            else if (num <= 5 && !yellows[1]) {

                if ((btn.id) == "yellow-btn") {
                    if (!yellow_win[1])
                        yellow_run(1);
                }
            }

            else if (num <= 5 && !yellows[2]) {

                if ((btn.id) == "yellow-btn") {
                    if (!yellow_win[2])
                        yellow_run(2);
                }
            }

            else if (num <= 5 && !yellows[3]) {

                if ((btn.id) == "yellow-btn") {
                    if (!yellow_win[3])
                        yellow_run(3);
                }
            }

        }, 350);
    }, 350);
}



function yellow_out() {
    yellows[0] = false;
    yellow_circle[0].style = "background-color:transparent;";
    boxes[yellow_start].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
    yellow_current[0] = yellow_start;
}




function yellow_run(git) {
    if ((yellow_inside[git] == 1 && num == 6) || (yellow_inside[git] == 2 && num >= 5) || (yellow_inside[git] == 3 && num >= 4) || (yellow_inside[git] == 4 && num >= 3) || (yellow_inside[git] == 5 && num >= 2)) {

    }

    else {
        if (mon) {
            console.log("bro i ran");
            intervali = setInterval(() => {
                if (!yellow_in[git])
                    yellow_current[git] += 1;

                if (yellow_current[git] == 53) {
                    yellow_current[git] = 1;
                }

                if (yellow_in[git]) {
                    yellow_inside[git]++;
                    if (yellow_inside[git] >= 6) {
                        yellow_boxes[yellow_inside[git] - 1].style = "background-color:yellow;";
                        yellow_win[git] = true;
                        yellows[git] = true;
                        yellow_in[git] = false;
                    }
                    else {
                        var gittiOnback = false;
                        for (var x = 0; x <= 3; x++) {
                            if (git == x)
                                continue;
                            else {
                                if ((yellow_inside[git] - 1) == yellow_inside[x]) {
                                    yellow_boxes[yellow_inside[git] - 1].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                    gittiOnback = true;
                                }
                            }
                        }
                        if (gittiOnback == false)
                            yellow_boxes[yellow_inside[git] - 1].style = "background-color:yellow;";

                        yellow_boxes[yellow_inside[git]].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                    }
                }

                else if (yellow_current[git] == 1) {
                    var gittiOn52 = false;
                    for (let x = 0; x <= 3; x++) {

                        if (blue_current[x] == 52) {
                            boxes[52].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                            gittiOn52 = true;
                            break;
                        }

                        else if (green_current[x] == 52) {
                            boxes[52].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                            gittiOn52 = true;
                            break;
                        }

                        else if (yellow_current[x] == 52) {
                            boxes[52].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                            gittiOn52 = true;
                            break;
                        }

                        if (git == x)
                            continue;
                        else {
                            if (yellow_current[x] == 52) {
                                boxes[52].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                gittiOn52 = true;
                                break;
                            }
                        }
                    }
                    if (gittiOn52 == false)
                        boxes[52].style = "background-color:transparent;";

                    boxes[yellow_current[git]].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                }

                else if (yellow_current[git] == 40) {
                    var gittiOn39 = false;
                    yellow_in[git] = true;
                    yellow_inside[git] = 1;
                    for (let x = 0; x <= 3; x++) {

                        if (red_current[x] == 39) {
                            boxes[39].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                            gittiOn39 = true;
                            break;
                        }

                        else if (green_current[x] == 39) {
                            boxes[39].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                            gittiOn39 = true;
                            break;
                        }

                        if (blue_current[x] == 39) {
                            boxes[39].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                            gittiOn39 = true;
                            break;
                        }

                        if (git == x)
                            continue;
                        else {
                            if (yellow_current[x] == 39) {
                                boxes[39].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                gittiOn39 = true;
                                break;
                            }
                        }
                    }
                    if (gittiOn39 == false)
                        boxes[39].style = "background-color:transparent;";

                    yellow_boxes[1].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                    yellow_current[git] = 0;
                }

                else {
                    var gittiback = true;
                    for (let x = 0; x <= 3; x++) {

                        if ((yellow_current[git] - 1) == blue_current[x]) {
                            boxes[yellow_current[git] - 1].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                            gittiback = true;
                            break;
                        }

                        else if ((yellow_current[git] - 1) == green_current[x]) {
                            boxes[yellow_current[git] - 1].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                            gittiback = true;
                            break;
                        }

                        else if ((yellow_current[git] - 1) == red_current[x]) {
                            boxes[yellow_current[git] - 1].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                            gittiback = true;
                            break;
                        }


                        else if (git == x)
                            continue;

                        else {
                            if ((yellow_current[git] - 1) == yellow_current[x]) {
                                console.log("yellow_current[git]-1 = " + yellow_current[git] - 1);
                                console.log("yellow_current[x] = " + yellow_current[x]);
                                boxes[yellow_current[git] - 1].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                gittiback = true;
                                break;
                            } else {
                                gittiback = false;
                            }
                        }
                    }

                    if (!gittiback) {

                        if ((yellow_current[git] - 1) == 15)
                            boxes[yellow_current[git] - 1].style = "background-color:red;";
                        else if ((yellow_current[git] - 1) == 28)
                            boxes[yellow_current[git] - 1].style = "background-color:green;";
                        else if ((yellow_current[git] - 1) == 41)
                            boxes[yellow_current[git] - 1].style = "background-color:yellow;";
                        else if ((yellow_current[git] - 1) == 2)
                            boxes[yellow_current[git] - 1].style = "background-color:blue;";
                        else {
                            boxes[yellow_current[git] - 1].style = "background-color:transparent;";
                        }
                    }

                    boxes[yellow_current[git]].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                }


                // console.log("i = " + count);
                // console.log("num = " + num);

                count++;

                if (count >= num) {
                    if (yellow_in[git] == false && yellow_current[git] != 15 && yellow_current[git] != 28 && yellow_current[git] != 41 && yellow_current[git] != 2) {
                        for (let x = 0; x <= 3; x++) {
                            var blockrun = false;
                            if (yellow_current[git] == blue_current[x]) {
                                console.log("over");
                                var cutInterval = setInterval(() => {
                                    if (blue_current[x] == 2) {
                                        var gittion2pos = false;
                                        for (var u = 0; u <= 3; u++) {
                                            if (yellow_current[u] == 2) {
                                                boxes[2].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                gittion2pos = true;
                                                break;
                                            }
                                            else if (green_current[u] == 2) {
                                                boxes[2].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                gittion2pos = true;
                                                break;
                                            }
                                            else if (yellow_current[u] == 2) {
                                                boxes[2].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                gittion2pos = true;
                                                break;
                                            }
                                            if (x == u)
                                                continue;
                                            else {
                                                if (blue_current[u] == 2) {
                                                    boxes[2].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                                    gittion2pos = true;
                                                    break;
                                                }
                                            }
                                        }
                                        if (gittion2pos == false) {
                                            boxes[2].style = "background-color:blue;";
                                        }
                                        blue_circle[x].style = "background-color:blue;";

                                        blue_current[x] = undefined;
                                        blues[x] = true;
                                        clearInterval(cutInterval);

                                    }

                                    else {
                                        boxes[blue_current[x] - 1].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                        if (blockrun) {
                                            var colorturn = false;
                                            for (var t = 0; t <= 3; t++) {
                                                if (blue_current[x] == yellow_current[t]) {
                                                    boxes[blue_current[x]].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                    colorturn = true;
                                                    break;
                                                }
                                                else if (blue_current[x] == yellow_current[t]) {
                                                    boxes[blue_current[x]].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                    colorturn = true;
                                                    break;
                                                }

                                                else if (blue_current[x] == green_current[t]) {
                                                    boxes[blue_current[x]].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                    colorturn = true;
                                                    break;
                                                }

                                                else if (x == t)
                                                    continue;

                                                else if (blue_current[x] == blue_current[t]) {
                                                    boxes[blue_current[x]].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                                    colorturn = true;
                                                    break;
                                                }
                                            }
                                            if (colorturn == false) {
                                                if (blue_current[x] == 41) {
                                                    boxes[blue_current[x]].style = "background-color:yellow;";

                                                }

                                                else if (blue_current[x] == 28) {
                                                    boxes[blue_current[x]].style = "background-color:green;";

                                                }

                                                else if (blue_current[x] == 15) {
                                                    boxes[blue_current[x]].style = "background-color:yellow;";

                                                }

                                                else
                                                    boxes[blue_current[x]].style = "background-color:transparent;";
                                            }
                                        }

                                        blue_current[x]--;
                                        blockrun = true;
                                    }

                                }, 400);

                                break;

                            }



                            else if (yellow_current[git] == red_current[x]) {
                                console.log("over");
                                var cutInterval = setInterval(() => {
                                    if (red_current[x] == 15) {
                                        var gittionredSt = false;
                                        for (var u = 0; u <= 3; u++) {

                                            if (blue_current[u] == 15) {
                                                boxes[2].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                                gittionredSt = true;
                                                break;
                                            }

                                            else if (green_current[u] == 15) {
                                                boxes[2].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                gittionredSt = true;
                                                break;
                                            }

                                            else if (yellow_current[u] == 15) {
                                                boxes[2].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                gittionredSt = true;
                                                break;
                                            }

                                            if (x == u)
                                                continue;

                                            else {
                                                if (red_current[u] == 15) {
                                                    boxes[2].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                                    gittionredSt = true;
                                                    break;
                                                }
                                            }
                                        }

                                        if (gittionredSt == false) {
                                            boxes[15].style = "background-color:red;";
                                        }

                                        red_circle[x].style = "background-color:red;";
                                        reds[x] = true;
                                        red_current[x] = undefined;
                                        clearInterval(cutInterval);
                                    }

                                    else {

                                        if (red_current[x] == 1) {
                                            var nogittion1 = false;
                                            boxes[52].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                            for (var j = 0; j <= 3; j++) {
                                                if (green_current[j] == 1) {
                                                    boxes[1].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                    nogittion1 = true;
                                                    break;
                                                }

                                                else if (yellow_current[j] == 1) {
                                                    boxes[1].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                    nogittion1 = true;
                                                    break;
                                                }

                                                if (x == j)
                                                    continue;
                                                else {
                                                    if (red_current[j] == 1) {
                                                        boxes[1].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                                        nogittion1 = true;
                                                        break;
                                                    }
                                                }
                                            }
                                            if (nogittion1 == false) {
                                                boxes[1].style = "background-color:transparent;";
                                            }
                                        }

                                        else {

                                            boxes[red_current[x] - 1].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";

                                            if (blockrun) {
                                                var colorturn = false;
                                                for (var t = 0; t <= 3; t++) {
                                                    if (red_current[x] == blue_current[t]) {
                                                        boxes[red_current[x]].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }
                                                    else if (red_current[x] == yellow_current[t]) {
                                                        boxes[red_current[x]].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }

                                                    else if (red_current[x] == green_current[t]) {
                                                        boxes[red_current[x]].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }
                                                }
                                                if (colorturn == false) {
                                                    if (red_current[x] == 41) {
                                                        boxes[red_current[x]].style = "background-color:yellow;";

                                                    }


                                                    else if (red_current[x] == 2) {
                                                        boxes[red_current[x]].style = "background-color:blue;";
                                                    }

                                                    else if (red_current[x] == 28) {
                                                        boxes[red_current[x]].style = "background-color:green;";

                                                    }

                                                    else if (red_current[x] == 15) {
                                                        boxes[red_current[x]].style = "background-color:red;";

                                                    }

                                                    else
                                                        boxes[red_current[x]].style = "background-color:transparent;";
                                                }
                                            }
                                        }

                                        red_current[x]--;

                                        if (red_current[x] == 0)
                                            red_current[x] = 52;

                                        blockrun = true;
                                    }

                                }, 400);

                                break;

                            }


                            else if (green_current[git] == green_current[x]) {
                                console.log("over");
                                var cutInterval = setInterval(() => {
                                    if (green_current[x] == 28) {
                                        var gittiongreenSt = false;
                                        for (var u = 0; u <= 3; u++) {

                                            if (blue_current[u] == 28) {
                                                boxes[28].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                                gittiongreenSt = true;
                                                break;
                                            }

                                            else if (red_current[u] == 28) {
                                                boxes[28].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                                gittiongreenSt = true;
                                                break;
                                            }

                                            else if (yellow_current[u] == 28) {
                                                boxes[28].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                gittiongreenSt = true;
                                                break;
                                            }

                                            if (x == u)
                                                continue;

                                            else {
                                                if (green_current[u] == 28) {
                                                    boxes[28].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                    gittiongreenSt = true;
                                                    break;
                                                }
                                            }
                                        }

                                        if (gittiongreenSt == false) {
                                            boxes[28].style = "background-color:green;";
                                        }

                                        green_circle[x].style = "background-color:green;";
                                        greens[x] = true;
                                        green_current[x] = undefined;
                                        clearInterval(cutInterval);
                                    }

                                    else {

                                        if (green_current[x] == 1) {
                                            var nogittion1 = false;
                                            boxes[52].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                            for (var j = 0; j <= 3; j++) {
                                                if (red_current[j] == 1) {
                                                    boxes[1].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                                    nogittion1 = true;
                                                    break;
                                                }

                                                else if (yellow_current[j] == 1) {
                                                    boxes[1].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                    nogittion1 = true;
                                                    break;
                                                }

                                                if (x == j)
                                                    continue;
                                                else {
                                                    if (green_current[j] == 1) {
                                                        boxes[1].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                        nogittion1 = true;
                                                        break;
                                                    }
                                                }
                                            }
                                            if (nogittion1 == false) {
                                                boxes[1].style = "background-color:transparent;";
                                            }
                                        }

                                        else {

                                            boxes[green_current[x] - 1].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";

                                            if (blockrun) {
                                                var colorturn = false;
                                                for (var t = 0; t <= 3; t++) {
                                                    if (green_current[x] == blue_current[t]) {
                                                        boxes[green_current[x]].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }
                                                    else if (green_current[x] == yellow_current[t]) {
                                                        boxes[green_current[x]].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }

                                                    else if (green_current[x] == red_current[t]) {
                                                        boxes[green_current[x]].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }
                                                }
                                                if (colorturn == false) {
                                                    if (green_current[x] == 41) {
                                                        boxes[green_current[x]].style = "background-color:yellow;";

                                                    }


                                                    else if (green_current[x] == 2) {
                                                        boxes[green_current[x]].style = "background-color:blue;";
                                                    }

                                                    else if (green_current[x] == 28) {
                                                        boxes[green_current[x]].style = "background-color:green;";

                                                    }

                                                    else if (green_current[x] == 15) {
                                                        boxes[green_current[x]].style = "background-color:red;";

                                                    }

                                                    else
                                                        boxes[green_current[x]].style = "background-color:transparent;";
                                                }
                                            }
                                        }

                                        green_current[x]--;

                                        if (green_current[x] == 0)
                                            green_current[x] = 52;

                                        blockrun = true;
                                    }

                                }, 400);

                                break;

                            }

                        }
                    }
                    count = 0;
                    clearInterval(intervali);
                    console.log("stoped");
                }
            }, 300);
            mon = false;
        }
    }
}





function green_rotate(btn) {
    // intervali = null;
    mon = true;
    btn.style = "transform: rotateY(360deg);";
    setTimeout(() => {
        btn.style = "transform: rotateY(0deg);";
        setTimeout(() => {
            num = Math.round(Math.random() * 6);
            if (num == 0)
                num = 6;
            btn.textContent = num;

            if ((num == 6 && !greens[0] && greens[1]) || (num == 6 && !greens[0] && greens[2]) || (num == 6 && !greens[0] && greens[3]) || (num == 6 && !greens[1] && greens[0]) || (num == 6 && !greens[1] && greens[2]) || (num == 6 && !greens[1] && greens[3]) || (num == 6 && !greens[2] && greens[0]) || (num == 6 && !greens[2] && greens[1]) || (num == 6 && !greens[2] && greens[3]) || (num == 6 && !greens[3] && greens[0]) || (num == 6 && !greens[3] && greens[1]) || (num == 6 && !greens[3] && greens[2])) {
                if ((btn.id) == "green-btn") {

                    let run = false;

                    if (!green_in[0] && !greens[0]) {
                        boxes[green_current[0]].addEventListener("click", () => {
                            if (!run && !green_win[0]) {
                                green_run(0);
                                run = true;
                            }
                        });
                    }


                    if (!green_in[1] && !greens[1]) {
                        boxes[green_current[1]].addEventListener("click", () => {
                            if (!run) {
                                green_run(1);
                                run = true;
                            }

                        });
                    }


                    if (!green_in[2] && !greens[2]) {
                        boxes[green_current[2]].addEventListener("click", () => {
                            if (!run) {
                                green_run(2);
                                run = true;
                            }

                        });
                    }


                    if (!green_in[3] && !greens[3]) {
                        boxes[green_current[3]].addEventListener("click", () => {
                            if (!run) {
                                green_run(3);
                                run = true;
                            }

                        });
                    }

                    let click = 0;
                    green_circle[1].addEventListener("click", () => {
                        if (click == 0 && !run && !green_win[1] && num == 6) {
                            green_circle[1].style = "background-color:transparent;";
                            boxes[green_start].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                            greens[1] = false;
                            click++;
                            run = true;
                            green_current[1] = green_start;
                        }
                    });

                    green_circle[2].addEventListener("click", () => {
                        if (click == 0 && !run && !green_win[2] && num == 6) {
                            green_circle[2].style = "background-color:transparent;";
                            boxes[green_start].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                            greens[2] = false;
                            num = 0;
                            click++;
                            run = true;
                            green_current[2] = green_start;
                        }
                    });

                    green_circle[3].addEventListener("click", () => {
                        if (click == 0 && !run && !green_win[3] && num == 6) {
                            green_circle[3].style = "background-color:transparent;";
                            boxes[green_start].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                            greens[3] = false;
                            num = 0;
                            click++;
                            run = true;
                            green_current[3] = green_start;
                        }
                    });
                }
            }


            else if ((num <= 6 && !greens[0] && !greens[1]) || (num <= 6 && !greens[0] && !greens[2]) || (num <= 6 && !greens[0] && !greens[3]) || (num <= 6 && !greens[1] && !greens[2]) || (num <= 6 && !greens[1] && !greens[3]) || (num <= 6 && !greens[2] && !greens[3])) {
                let gitti_mov = false;

                if (green_in[0] && !greens[0]) {
                    green_boxes[green_inside[0]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            if ((green_inside[0] == 5 && num >= 2) || (green_inside[0] == 4 && num >= 3) || (green_inside[0] == 3 && num >= 4) || (green_inside[0] == 2 && num >= 5) || (green_inside[0] == 1 && num >= 6)) {

                            }
                            else {
                                green_run(0);
                                gitti_mov = true;
                            }
                        }
                    })
                }

                if (green_in[1] && !greens[1]) {
                    green_boxes[green_inside[1]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            if ((green_inside[1] == 5 && num >= 2) || (green_inside[1] == 4 && num >= 3) || (green_inside[1] == 3 && num >= 4) || (green_inside[1] == 2 && num >= 5) || (green_inside[1] == 1 && num >= 6)) {

                            }
                            else {
                                green_run(1);
                                gitti_mov = true;
                            }
                        }
                    })
                }

                if (green_in[2] && !greens[2]) {
                    green_boxes[green_inside[2]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            if ((green_inside[2] == 5 && num >= 2) || (green_inside[2] == 4 && num >= 3) || (green_inside[2] == 3 && num >= 4) || (green_inside[2] == 2 && num >= 5) || (green_inside[2] == 1 && num >= 6)) {

                            }
                            else {
                                green_run(2);
                                gitti_mov = true;
                            }
                        }
                    })
                }

                if (green_in[3] && !greens[3]) {
                    green_boxes[green_inside[3]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            if ((green_inside[3] == 5 && num >= 2) || (green_inside[3] == 4 && num >= 3) || (green_inside[3] == 3 && num >= 4) || (green_inside[3] == 2 && num >= 5) || (green_inside[3] == 1 && num >= 6)) {

                            }
                            else {
                                green_run(3);
                                gitti_mov = true;
                            }
                        }
                    })
                }


                if (!green_in[0] && !greens[0]) {

                    boxes[green_current[0]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            green_run(0);
                            gitti_mov = true;
                        }

                    })
                }


                if (!green_in[1] && !greens[1]) {
                    boxes[green_current[1]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            green_run(1);
                            gitti_mov = true;
                        }

                    })
                }


                if (!green_in[2] && !greens[2]) {
                    boxes[green_current[2]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            green_run(2);
                            gitti_mov = true;
                        }

                    })
                }


                if (!green_in[3] && !greens[3]) {
                    boxes[green_current[3]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            green_run(3);
                            gitti_mov = true;
                        }

                    })
                }

            }

            else if (num == 6 && greens[0]) {
                if ((btn.id) == "green-btn") {
                    if (!green_win[0])
                        green_out();
                }
            }

            else if (num == 6 && greens[0] && greens[1] && greens[2] && greens[3]) {
                let click = 0;
                let run = false;
                green_circle[1].addEventListener("click", () => {
                    if (click == 0 && !run && !green_win[1] && num == 6) {
                        green_circle[1].style = "background-color:transparent;";
                        boxes[green_start].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                        greens[1] = false;
                        click++;
                        run = true;
                        green_current[1] = green_start;
                    }
                });

                green_circle[2].addEventListener("click", () => {
                    if (click == 0 && !run && !green_win[2] && num == 6) {
                        green_circle[2].style = "background-color:transparent;";
                        boxes[green_start].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                        greens[2] = false;
                        num = 0;
                        click++;
                        run = true;
                        green_current[2] = green_start;
                    }
                });

                green_circle[3].addEventListener("click", () => {
                    if (click == 0 && !run && !green_win[3] && num == 6) {
                        green_circle[3].style = "background-color:transparent;";
                        boxes[green_start].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                        greens[3] = false;
                        num = 0;
                        click++;
                        run = true;
                        green_current[3] = green_start;
                    }
                });
            }

            else if (num <= 5 && !greens[0]) {

                if ((btn.id) == "green-btn") {
                    if (!green_win[0])
                        green_run(0);
                }
            }

            else if (num <= 5 && !greens[1]) {

                if ((btn.id) == "green-btn") {
                    if (!green_win[1])
                        green_run(1);
                }
            }

            else if (num <= 5 && !greens[2]) {

                if ((btn.id) == "green-btn") {
                    if (!green_win[2])
                        green_run(2);
                }
            }

            else if (num <= 5 && !greens[3]) {

                if ((btn.id) == "green-btn") {
                    if (!green_win[3])
                        green_run(3);
                }
            }

        }, 350);
    }, 350);
}




function green_out() {
    greens[0] = false;
    green_circle[0].style = "background-color:transparent;";
    boxes[green_start].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
    green_current[0] = green_start;
}



function green_run(git) {
    if ((green_inside[git] == 1 && num == 6) || (green_inside[git] == 2 && num >= 5) || (green_inside[git] == 3 && num >= 4) || (green_inside[git] == 4 && num >= 3) || (green_inside[git] == 5 && num >= 2)) {

    }

    else {
        if (mon) {
            console.log("bro i ran");
            intervali = setInterval(() => {
                if (!green_in[git])
                    green_current[git] += 1;

                if (green_current[git] == 53) {
                    green_current[git] = 1;
                }

                if (green_in[git]) {
                    green_inside[git]++;
                    if (green_inside[git] >= 6) {
                        green_boxes[green_inside[git] - 1].style = "background-color:green;";
                        green_win[git] = true;
                        greens[git] = true;
                        green_in[git] = false;
                    }
                    else {
                        var gittiOnback = false;
                        for (var x = 0; x <= 3; x++) {
                            if (git == x)
                                continue;
                            else {
                                if ((green_inside[git] - 1) == green_inside[x]) {
                                    green_boxes[green_inside[git] - 1].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                    gittiOnback = true;
                                }
                            }
                        }
                        if (gittiOnback == false)
                            green_boxes[green_inside[git] - 1].style = "background-color:green;";

                        green_boxes[green_inside[git]].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                    }
                }

                else if (green_current[git] == 1) {
                    var gittiOn52 = false;
                    for (let x = 0; x <= 3; x++) {

                        if (blue_current[x] == 52) {
                            boxes[52].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                            gittiOn52 = true;
                            break;
                        }

                        else if (red_current[x] == 52) {
                            boxes[52].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                            gittiOn52 = true;
                            break;
                        }

                        else if (yellow_current[x] == 52) {
                            boxes[52].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                            gittiOn52 = true;
                            break;
                        }

                        if (git == x)
                            continue;
                        else {
                            if (green_current[x] == 52) {
                                boxes[52].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                gittiOn52 = true;
                                break;
                            }
                        }
                    }
                    if (gittiOn52 == false)
                        boxes[52].style = "background-color:transparent;";

                    boxes[green_current[git]].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                }

                else if (green_current[git] == 27) {
                    var gittiOn26 = false;
                    green_in[git] = true;
                    green_inside[git] = 1;
                    for (let x = 0; x <= 3; x++) {

                        if (red_current[x] == 26) {
                            boxes[26].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                            gittiOn26 = true;
                            break;
                        }

                        else if (green_current[x] == 26) {
                            boxes[26].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                            gittiOn26 = true;
                            break;
                        }

                        else if (blue_current[x] == 26) {
                            boxes[26].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                            gittiOn26 = true;
                            break;
                        }

                        if (git == x)
                            continue;
                        else {
                            if (green_current[x] == 26) {
                                boxes[26].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                gittiOn26 = true;
                                break;
                            }
                        }
                    }
                    if (gittiOn26 == false)
                        boxes[26].style = "background-color:transparent;";

                    green_boxes[1].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                    green_current[git] = 0;
                }

                else {
                    var gittiback = true;
                    for (let x = 0; x <= 3; x++) {

                        if ((green_current[git] - 1) == blue_current[x]) {
                            boxes[green_current[git] - 1].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                            gittiback = true;
                            break;
                        }

                        else if ((green_current[git] - 1) == yellow_current[x]) {
                            boxes[green_current[git] - 1].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                            gittiback = true;
                            break;
                        }

                        else if ((green_current[git] - 1) == red_current[x]) {
                            boxes[green_current[git] - 1].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                            gittiback = true;
                            break;
                        }

                        else if (git == x)
                            continue;

                        else {
                            if ((green_current[git] - 1) == green_current[x]) {
                                console.log("green_current[git]-1 = " + green_current[git] - 1);
                                console.log("green_current[x] = " + green_current[x]);
                                boxes[green_current[git] - 1].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                gittiback = true;
                                break;
                            } else {
                                gittiback = false;
                            }
                        }
                    }

                    if (!gittiback) {

                        if ((green_current[git] - 1) == 15)
                            boxes[green_current[git] - 1].style = "background-color:red;";
                        else if ((green_current[git] - 1) == 28)
                            boxes[green_current[git] - 1].style = "background-color:green;";
                        else if ((green_current[git] - 1) == 41)
                            boxes[green_current[git] - 1].style = "background-color:yellow;";
                        else if ((green_current[git] - 1) == 2)
                            boxes[green_current[git] - 1].style = "background-color:blue;";
                        else {
                            boxes[green_current[git] - 1].style = "background-color:transparent;";
                        }
                    }

                    boxes[green_current[git]].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                }


                // console.log("i = " + count);
                // console.log("num = " + num);

                count++;

                if (count >= num) {
                    if (green_in[git] == false && green_current[git] != 15 && green_current[git] != 28 && green_current[git] != 41 && green_current[git] != 2) {
                        for (let x = 0; x <= 3; x++) {
                            var blockrun = false;

                            if (green_current[git] == blue_current[x]) {
                                console.log("over");
                                var cutInterval = setInterval(() => {
                                    if (blue_current[x] == 2) {
                                        var gittion2pos = false;
                                        for (var u = 0; u <= 3; u++) {
                                            if (green_current[u] == 2) {
                                                boxes[2].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                gittion2pos = true;
                                                break;
                                            }
                                            else if (green_current[u] == 2) {
                                                boxes[2].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                gittion2pos = true;
                                                break;
                                            }
                                            else if (yellow_current[u] == 2) {
                                                boxes[2].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                gittion2pos = true;
                                                break;
                                            }
                                            if (x == u)
                                                continue;
                                            else {
                                                if (blue_current[u] == 2) {
                                                    boxes[2].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                                    gittion2pos = true;
                                                    break;
                                                }
                                            }
                                        }
                                        if (gittion2pos == false) {
                                            boxes[2].style = "background-color:blue;";
                                        }
                                        blue_circle[x].style = "background-color:blue;";

                                        blue_current[x] = undefined;
                                        blues[x] = true;
                                        clearInterval(cutInterval);

                                    }

                                    else {
                                        boxes[blue_current[x] - 1].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                        if (blockrun) {
                                            var colorturn = false;
                                            for (var t = 0; t <= 3; t++) {
                                                if (blue_current[x] == green_current[t]) {
                                                    boxes[blue_current[x]].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                    colorturn = true;
                                                    break;
                                                }
                                                else if (blue_current[x] == yellow_current[t]) {
                                                    boxes[blue_current[x]].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                    colorturn = true;
                                                    break;
                                                }

                                                else if (blue_current[x] == green_current[t]) {
                                                    boxes[blue_current[x]].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                    colorturn = true;
                                                    break;
                                                }

                                                else if (x == t)
                                                    continue;

                                                else if (blue_current[x] == blue_current[t]) {
                                                    boxes[blue_current[x]].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                                    colorturn = true;
                                                    break;
                                                }
                                            }
                                            if (colorturn == false) {
                                                if (blue_current[x] == 41) {
                                                    boxes[blue_current[x]].style = "background-color:yellow;";

                                                }

                                                else if (blue_current[x] == 28) {
                                                    boxes[blue_current[x]].style = "background-color:green;";

                                                }

                                                else if (blue_current[x] == 15) {
                                                    boxes[blue_current[x]].style = "background-color:green;";

                                                }

                                                else
                                                    boxes[blue_current[x]].style = "background-color:transparent;";
                                            }
                                        }

                                        blue_current[x]--;
                                        blockrun = true;
                                    }

                                }, 400);

                                break;

                            }

                            else if (green_current[git] == yellow_current[x]) {
                                console.log("over");
                                var cutInterval = setInterval(() => {
                                    if (yellow_current[x] == 41) {
                                        var gittionyellowSt = false;
                                        for (var u = 0; u <= 3; u++) {

                                            if (blue_current[u] == 41) {
                                                boxes[41].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                                gittionyellowSt = true;
                                                break;
                                            }

                                            else if (green_current[u] == 41) {
                                                boxes[41].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                gittionyellowSt = true;
                                                break;
                                            }

                                            else if (green_current[u] == 41) {
                                                boxes[41].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                gittionyellowSt = true;
                                                break;
                                            }

                                            if (x == u)
                                                continue;

                                            else {
                                                if (yellow_current[u] == 41) {
                                                    boxes[41].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                    gittionyellowSt = true;
                                                    break;
                                                }
                                            }
                                        }

                                        if (gittionyellowSt == false) {
                                            boxes[41].style = "background-color:yellow;";
                                        }

                                        yellow_circle[x].style = "background-color:yellow;";
                                        yellows[x] = true;
                                        yellow_current[x] = undefined;
                                        clearInterval(cutInterval);
                                    }

                                    else {

                                        if (yellow_current[x] == 1) {
                                            var nogittion1 = false;
                                            boxes[52].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                            for (var j = 0; j <= 3; j++) {
                                                if (green_current[j] == 1) {
                                                    boxes[1].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                    nogittion1 = true;
                                                    break;
                                                }

                                                else if (green_current[j] == 1) {
                                                    boxes[1].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                    nogittion1 = true;
                                                    break;
                                                }

                                                if (x == j)
                                                    continue;
                                                else {
                                                    if (yellow_current[j] == 1) {
                                                        boxes[1].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                        nogittion1 = true;
                                                        break;
                                                    }
                                                }
                                            }
                                            if (nogittion1 == false) {
                                                boxes[1].style = "background-color:transparent;";
                                            }
                                        }

                                        else {

                                            boxes[yellow_current[x] - 1].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";

                                            if (blockrun) {
                                                var colorturn = false;
                                                for (var t = 0; t <= 3; t++) {
                                                    if (yellow_current[x] == blue_current[t]) {
                                                        boxes[yellow_current[x]].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }
                                                    else if (yellow_current[x] == green_current[t]) {
                                                        boxes[yellow_current[x]].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }

                                                    else if (yellow_current[x] == green_current[t]) {
                                                        boxes[yellow_current[x]].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }
                                                }
                                                if (colorturn == false) {
                                                    if (yellow_current[x] == 41) {
                                                        boxes[yellow_current[x]].style = "background-color:yellow;";

                                                    }


                                                    else if (yellow_current[x] == 2) {
                                                        boxes[yellow_current[x]].style = "background-color:blue;";
                                                    }

                                                    else if (yellow_current[x] == 28) {
                                                        boxes[yellow_current[x]].style = "background-color:green;";

                                                    }

                                                    else if (yellow_current[x] == 15) {
                                                        boxes[yellow_current[x]].style = "background-color:green;";

                                                    }

                                                    else
                                                        boxes[yellow_current[x]].style = "background-color:transparent;";
                                                }
                                            }
                                        }

                                        yellow_current[x]--;

                                        if (yellow_current[x] == 0)
                                            yellow_current[x] = 52;

                                        blockrun = true;
                                    }

                                }, 400);

                                break;


                            }



                            else if (green_current[git] == red_current[x]) {
                                console.log("over");
                                var cutInterval = setInterval(() => {
                                    if (red_current[x] == 15) {
                                        var gittionredSt = false;
                                        for (var u = 0; u <= 3; u++) {

                                            if (blue_current[u] == 15) {
                                                boxes[2].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                                gittionredSt = true;
                                                break;
                                            }

                                            else if (green_current[u] == 15) {
                                                boxes[2].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                gittionredSt = true;
                                                break;
                                            }

                                            else if (yellow_current[u] == 15) {
                                                boxes[2].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                gittionredSt = true;
                                                break;
                                            }

                                            if (x == u)
                                                continue;

                                            else {
                                                if (red_current[u] == 15) {
                                                    boxes[2].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                                    gittionredSt = true;
                                                    break;
                                                }
                                            }
                                        }

                                        if (gittionredSt == false) {
                                            boxes[15].style = "background-color:red;";
                                        }

                                        red_circle[x].style = "background-color:red;";
                                        reds[x] = true;
                                        red_current[x] = undefined;
                                        clearInterval(cutInterval);
                                    }

                                    else {

                                        if (red_current[x] == 1) {
                                            var nogittion1 = false;
                                            boxes[52].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                            for (var j = 0; j <= 3; j++) {
                                                if (green_current[j] == 1) {
                                                    boxes[1].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                    nogittion1 = true;
                                                    break;
                                                }

                                                else if (yellow_current[j] == 1) {
                                                    boxes[1].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                    nogittion1 = true;
                                                    break;
                                                }

                                                if (x == j)
                                                    continue;
                                                else {
                                                    if (red_current[j] == 1) {
                                                        boxes[1].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";
                                                        nogittion1 = true;
                                                        break;
                                                    }
                                                }
                                            }
                                            if (nogittion1 == false) {
                                                boxes[1].style = "background-color:transparent;";
                                            }
                                        }

                                        else {

                                            boxes[red_current[x] - 1].style = "background-color:red; box-shadow: 2px 4px 2px 5px inset;";

                                            if (blockrun) {
                                                var colorturn = false;
                                                for (var t = 0; t <= 3; t++) {
                                                    if (red_current[x] == blue_current[t]) {
                                                        boxes[red_current[x]].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }
                                                    else if (red_current[x] == yellow_current[t]) {
                                                        boxes[red_current[x]].style = "background-color:yellow; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }

                                                    else if (red_current[x] == green_current[t]) {
                                                        boxes[red_current[x]].style = "background-color:green; box-shadow: 2px 4px 2px 5px inset;";
                                                        colorturn = true;
                                                        break;
                                                    }
                                                }
                                                if (colorturn == false) {
                                                    if (red_current[x] == 41) {
                                                        boxes[red_current[x]].style = "background-color:yellow;";

                                                    }


                                                    else if (red_current[x] == 2) {
                                                        boxes[red_current[x]].style = "background-color:blue;";
                                                    }

                                                    else if (red_current[x] == 28) {
                                                        boxes[red_current[x]].style = "background-color:green;";

                                                    }

                                                    else if (red_current[x] == 15) {
                                                        boxes[red_current[x]].style = "background-color:red;";

                                                    }

                                                    else
                                                        boxes[red_current[x]].style = "background-color:transparent;";
                                                }
                                            }
                                        }

                                        red_current[x]--;

                                        if (red_current[x] == 0)
                                            red_current[x] = 52;

                                        blockrun = true;
                                    }

                                }, 400);

                                break;

                            }

                        }
                    }
                    count = 0;
                    clearInterval(intervali);
                    console.log("stoped");
                }
            }, 300);
            mon = false;
        }
    }
}