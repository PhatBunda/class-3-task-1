input.onButtonPressed(Button.A, function () {
    players_tie += 1
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    players_tie += 1
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    players_tie += 1
    basic.showLeds(`
        # # . . .
        # . # . .
        # # . . .
        # . # . .
        # # . . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Phat pumpum")
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . . . . .
        `)
    basic.showNumber(playerA_wins)
    basic.showLeds(`
        # # . . .
        # . # . .
        # # . . .
        # . # . .
        # # . . .
        `)
    basic.showNumber(player_b_wins)
    basic.pause(1000)
    basic.showString("TIES")
    basic.showNumber(players_tie)
    basic.pause(1000)
    basic.clearScreen()
})
let players_tie = 0
let player_b_wins = 0
let playerA_wins = 0
playerA_wins = 0
player_b_wins = 0
players_tie = 0
basic.forever(function () {
	
})
