class Cards {
  constructor () {
    this.cards = document.querySelectorAll('.card')
    this.onStart = this.onStart.bind(this)
    this.onMove = this.onMove.bind(this)
    this.onEnd = this.onEnd.bind(this)
    this.update = this.update.bind(this)
    this.targetBCR = null
    this.target = null
    this.startX = 0
    this.currentX = 0
    this.screenX = 0;
    this.targetX = 0;
    this.draggingCard = false;

    this.addEventListeners();

    requestAnimationFrame(this.update);

  }

  addEventListeners () {
    document.addEventListener('touchstart', this.onStart)
    document.addEventListener('touchmove', this.onMove)
    document.addEventListener('touchend', this.onEnd)
  }

  onStart (e) {
    if(!e.target.classList.contains('card'))
      return;

    this.target = e.target;
    this.targetBCR = this.target.getBoundingClientRect();

    this.startX = e.pageX || e.touches[0].pageX;
    this.currentX = this.startX;

    this.target.style.willChange = 'transform';
    this.draggingCard = true;

    e.preventDefault();
  }

  onMove (e) {
    if (!this.target)
      return;

    this.currentX = e.pageX || e.touches[0].pageX
  }

  onEnd (e) {
    if (!this.target)
      return;

    this.targetX = 0;
    let screenX = this.currentX - this.startX;

    if (Math.abs(screenX) > this.targetBCR.width * 0.35){
      this.targetX = (screenX > 0) ? this.targetBCR.width : - this.targetBCR.width;
    }

    this.draggingCard = false;
  }

  update () {

    requestAnimationFrame(this.update);

    if (!this.target)
      return;

    if (this.draggingCard) {
      this.screenX = this.currentX - this.startX;
    } else {
      this.screenX += (this.targetX - this.screenX) / 10;
    }

    const opacity = 1 - (this.screenX / this.targetBCR.width);

    this.target.style.transform = `translateX(${screenX}px)`;
    this.target.style.opacity = opacity;
  }
}

window.addEventListener('load', () => new Cards());
