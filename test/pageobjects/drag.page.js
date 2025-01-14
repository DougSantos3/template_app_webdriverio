import { $ } from '@wdio/globals'

class DragPage {
  get leftEarPuzzlePiece() {
    return $(
      'new UiSelector().className("android.widget.ImageView").instance(8)',
    )
  }

  get headPuzzlePiece() {
    return $(
      'new UiSelector().className("android.widget.ImageView").instance(4)',
    )
  }

  get rightEarPuzzlePiece() {
    return $(
      'new UiSelector().className("android.widget.ImageView").instance(3)',
    )
  }

  get leftArmPuzzlePiece() {
    return $(
      'new UiSelector().className("android.widget.ImageView").instance(1)',
    )
  }

  get bellyPuzzlePiece() {
    return $(
      'new UiSelector().className("android.widget.ImageView").instance(7)',
    )
  }

  get rightArmPuzzlePiece() {
    return $(
      'new UiSelector().className("android.widget.ImageView").instance(6)',
    )
  }

  get leftFootpuzzlePiece() {
    return $(
      'new UiSelector().className("android.widget.ImageView").instance(9)',
    )
  }

  get leftAndRightLegPuzzlePiece() {
    return $(
      'new UiSelector().className("android.widget.ImageView").instance(5)',
    )
  }

  get rightFootpuzzlePiece() {
    return $(
      'new UiSelector().className("android.widget.ImageView").instance(2)',
    )
  }

  get boardLeftEar() {
    return $('new UiSelector().className("android.view.ViewGroup").instance(8)')
  }

  get boadHead() {
    return $(
      'new UiSelector().className("android.view.ViewGroup").instance(10)',
    )
  }

  get boardRightEar() {
    return $(
      'new UiSelector().className("android.view.ViewGroup").instance(12)',
    )
  }

  get boardLeftArm() {
    return $(
      'new UiSelector().className("android.view.ViewGroup").instance(14)',
    )
  }

  get boardBelly() {
    return $(
      'new UiSelector().className("android.view.ViewGroup").instance(16)',
    )
  }

  get boardRightArm() {
    return $(
      'new UiSelector().className("android.view.ViewGroup").instance(18)',
    )
  }

  get boardLeftFoot() {
    return $(
      'new UiSelector().className("android.view.ViewGroup").instance(20)',
    )
  }

  get boardLeftAndRightLeg() {
    return $(
      'new UiSelector().className("android.view.ViewGroup").instance(22)',
    )
  }

  get boardRightFoot() {
    return $(
      'new UiSelector().className("android.view.ViewGroup").instance(24)',
    )
  }

  get messageCompleted() {
    return $('new UiSelector().text("Congratulations")')
  }

  get btnRetry() {
    return $('new UiSelector().text("Retry")')
  }

  async dragDropPuzzlePiece(puzzlePiece, board) {
    await puzzlePiece.dragAndDrop(board)
  }
}

export default new DragPage()
