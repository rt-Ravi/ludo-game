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


function red() {
    red_rotate(red_btn);
}

function blue() {
    blue_rotate(blue_btn);
}

function yellow() {
    rotate(yellow_btn);
}

function green() {
    rotate(green_btn);
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
                num = 1;
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
                            red_run(0);
                            gitti_mov = true;
                        }
                    })
                }

                if (red_in[1] && !reds[1]) {
                    red_boxes[red_inside[1]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            red_run(1);
                            gitti_mov = true;
                        }
                    })
                }

                if (red_in[2] && !reds[2]) {
                    red_boxes[red_inside[2]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            red_run(2);
                            gitti_mov = true;
                        }
                    })
                }

                if (red_in[3] && !reds[3]) {
                    red_boxes[red_inside[3]].addEventListener("click", () => {
                        if (!gitti_mov) {
                            red_run(3);
                            gitti_mov = true;
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
                        if (git == x)
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
                num = 1;
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

            else if (num == 6 && blues[0] && blues[1] && blues[2] && blues[3]) {
                let click = 0;
                let run = false;
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

                    if(gittiOn52 == false)
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
                        if (gittiOnback == false)
                            blue_boxes[blue_inside[git] - 1].style = "background-color:blue;";


                        blue_boxes[blue_inside[git]].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                    }
                }

                // else if (blue_current[git] == 1) {
                //     var gittiOn52 = false;
                //     blue_in[git] = true;
                //     blue_inside[git] = 1;
                //     for(let x=0; x<=3; x++)
                //     {
                //         if(git == x)
                //             continue;
                //         else{
                //             if(blue_current[x] == 52)
                //             {
                //                 boxes[52].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                //                 gittiOn52 = true;
                //                 break;
                //             }
                //         }
                //     }
                //     if(gittiOn52 == false)
                //         boxes[52].style = "background-color:transparent;";

                //     blue_boxes[1].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                //     blue_current[git] = 0;
                // }

                else {

                    var gittiback = true;
                    for (let x = 0; x <= 3; x++) {
                        if (git == x)
                            continue;
                        else {
                            if ((blue_current[git] - 1) == blue_current[x]) {
                                console.log("blue_current[git]-1 = " + blue_current[git] - 1);
                                console.log("blue_current[x] = " + blue_current[x]);
                                boxes[blue_current[git] - 1].style = "background-color:blue; box-shadow: 2px 4px 2px 5px inset;";
                                gittiback = true;
                                break;
                            } else {
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
                    count = 0;
                    clearInterval(intervali);
                    console.log("stoped");
                }
            }, 300);
            mon = false;
        }
    }
}

