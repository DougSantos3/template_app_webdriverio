import { $ } from '@wdio/globals'

class DragPage {
  get navigationBarDrag() {
    return $('//android.view.View[@content-desc="Drag"]')
  }

  get leftEarPuzzlePiece() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-l1"]/android.widget.ImageView',
    )
  }

  get headPuzzlePiece() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-c1"]/android.widget.ImageView',
    )
  }

  get rightEarPuzzlePiece() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-r1"]/android.widget.ImageView',
    )
  }

  get leftArmPuzzlePiece() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-l2"]/android.widget.ImageView',
    )
  }

  get bellyPuzzlePiece() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-c2"]/android.widget.ImageView',
    )
  }

  get rightArmPuzzlePiece() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-r2"]/android.widget.ImageView',
    )
  }

  get leftFootpuzzlePiece() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-l3"]/android.widget.ImageView',
    )
  }

  get leftAndRightLegPuzzlePiece() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-c3"]/android.widget.ImageView',
    )
  }

  get rightFootpuzzlePiece() {
    return $(
      '//android.view.ViewGroup[@content-desc="drag-r3"]/android.widget.ImageView',
    )
  }

  get boardLeftEar() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-l1"]/android.view.ViewGroup',
    )
  }

  get boadHead() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-c1"]/android.view.ViewGroup',
    )
  }

  get boardRightEar() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-r1"]/android.view.ViewGroup)',
    )
  }

  get boardLeftArm() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-l2"]/android.view.ViewGroup',
    )
  }

  get boardBelly() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-c2"]/android.view.ViewGroup',
    )
  }

  get boardRightArm() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-r2"]/android.view.ViewGroup',
    )
  }

  get boardLeftFoot() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-l3"]/android.view.ViewGroup',
    )
  }

  get boardLeftAndRightLeg() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-c3"]/android.view.ViewGroup',
    )
  }

  get boardRightFoot() {
    return $(
      '//android.view.ViewGroup[@content-desc="drop-r3"]/android.view.ViewGroup',
    )
  }

  get messageCompleted() {
    return $('//android.widget.TextView[@text="Congratulations"]')
  }

  get btnRetry() {
    return $(
      '//android.view.ViewGroup[@content-desc="button-Retry"]/android.view.ViewGroup',
    )
  }

  async dragDropPuzzlePiece(puzzlePiece, board) {
    await puzzlePiece.waitForDisplayed()
    await board.waitForDisplayed()

    if ((await puzzlePiece.isDisplayed()) && (await board.isDisplayed())) {
      const puzzlePieceLocation = await puzzlePiece.getLocation()
      const boardLocation = await board.getLocation()

      await browser.touchAction([
        { action: 'press', x: puzzlePieceLocation.x, y: puzzlePieceLocation.y }, 
        { action: 'moveTo', x: boardLocation.x, y: boardLocation.y }, 
        { action: 'release' }, 
      ])
    } else {
      throw new Error('Um ou ambos os elementos não estão visíveis')
    }
  }
}

export default new DragPage()
