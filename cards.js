class Cards {
  constructor () {
    this.cards = document.querySelectorAll('.card')
    this.onStart = this.onStart.bind(this)
    this.onMove = this.onMove.bind(this)
    this.onEnd = this.onEnd.bind(this)
    this.update = this.update.bind(this)
  }

  addEventListeners () {
    document.addEventListener('touchstart', this.onStart)
    document.addEventListener('touchmove', this.onMove)
    document.addEventListener('touchend', this.onEnd)
  }

  onStart (e) {
    e.preventDefault()
    if(!e.target.classList.contains('card'))
      return;
      console.log('card')
  }

  onMove (e) {

  }

  onEnd (e) {

  }

  update () {

  }
}

window.addEventListener('load', () => new Cards())
