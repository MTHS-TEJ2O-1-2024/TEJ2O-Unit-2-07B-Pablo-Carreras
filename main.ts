/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Pablo
 * Created on: Sep 2024
 * This program adds cookies and restarts the counter 
*/

let cookieNumber: number
cookieNumber = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

//add 1 to the count 
input.onButtonPressed(Button.A, function () {
    cookieNumber = (cookieNumber + 1)
    basic.showNumber(cookieNumber)
})

//resets the count 
input.onButtonPressed(Button.B, function () {
    cookieNumber = (cookieNumber - cookieNumber)
    basic.showNumber(cookieNumber)
})