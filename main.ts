controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorRow += -1
})
function resetGame () {
    game.splash("Press A for new game")
    game.reset()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorCol += -1
})
function drawXorO (row: number, col: number, XOsprite: Sprite) {
    XOsprite.left = col * 34 + 38
    XOsprite.top = row * 34 + 18
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorCol += 1
})
function drawGrid () {
    tiles.setCurrentTilemap(tilemap`level1`)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorRow += 1
})
let XOsprites = [textsprite.create("")]
XOsprites.pop()
drawGrid()
let cursorRow = 0
let cursorCol = 0
let newXOsprite = textsprite.create("X")
newXOsprite.setMaxFontHeight(24)
newXOsprite.setOutline(1, 13)
game.onUpdate(function () {
    drawXorO(cursorRow, cursorCol, newXOsprite)
})
