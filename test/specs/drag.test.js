import DragPage from '../pageobjects/drag.page'

describe('Puzzle Pieces Drag and Drop Test', () => {
  it('should drag and drop puzzle pieces and complete the puzzle', async () => {
    await expect(DragPage.leftEarPuzzlePiece).toBeDisplayed()
    await expect(DragPage.boardLeftEar).toBeDisplayed()
    await expect(DragPage.headPuzzlePiece).toBeDisplayed()
    await expect(DragPage.boardHead).toBeDisplayed()
    await expect(DragPage.rightEarPuzzlePiece).toBeDisplayed()
    await expect(DragPage.boardRightEar).toBeDisplayed()
    await expect(DragPage.leftArmPuzzlePiece).toBeDisplayed()
    await expect(DragPage.boardLeftArm).toBeDisplayed()
    await expect(DragPage.bellyPuzzlePiece).toBeDisplayed()
    await expect(DragPage.boardBelly).toBeDisplayed()
    await expect(DragPage.rightArmPuzzlePiece).toBeDisplayed()
    await expect(DragPage.boardRightArm).toBeDisplayed()
    await expect(DragPage.leftFootpuzzlePiece).toBeDisplayed()
    await expect(DragPage.boardLeftFoot).toBeDisplayed()
    await expect(DragPage.leftAndRightLegPuzzlePiece).toBeDisplayed()
    await expect(DragPage.boardLeftAndRightLeg).toBeDisplayed()
    await expect(DragPage.rightFootpuzzlePiece).toBeDisplayed()
    await expect(DragPage.boardRightFoot).toBeDisplayed()

    await DragPage.dragAndDropPuzzlePiece(
      DragPage.leftEarPuzzlePiece,
      DragPage.boardLeftEar,
    )
    await DragPage.dragAndDropPuzzlePiece(
      DragPage.headPuzzlePiece,
      DragPage.boardHead,
    )
    await DragPage.dragAndDropPuzzlePiece(
      DragPage.rightEarPuzzlePiece,
      DragPage.boardRightEar,
    )
    await DragPage.dragAndDropPuzzlePiece(
      DragPage.leftArmPuzzlePiece,
      DragPage.boardLeftArm,
    )
    await DragPage.dragAndDropPuzzlePiece(
      DragPage.bellyPuzzlePiece,
      DragPage.boardBelly,
    )
    await DragPage.dragAndDropPuzzlePiece(
      DragPage.rightArmPuzzlePiece,
      DragPage.boardRightArm,
    )
    await DragPage.dragAndDropPuzzlePiece(
      DragPage.leftFootpuzzlePiece,
      DragPage.boardLeftFoot,
    )
    await DragPage.dragAndDropPuzzlePiece(
      DragPage.leftAndRightLegPuzzlePiece,
      DragPage.boardLeftAndRightLeg,
    )
    await DragPage.dragAndDropPuzzlePiece(
      DragPage.rightFootpuzzlePiece,
      DragPage.boardRightFoot,
    )
    await browser.pause(5000)

    const message = await DragPage.messageCompleted
    await expect(message).toBeDisplayed()
  })
})
