class Cenario {
  constructor(imagem, velocidade) {
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = width;
    
    this.parado = false;
  }
  
  draw() {
    image(
        this.imagem,
        this.x1, 0,
        width+10, height
      );
    image(
        this.imagem,
        this.x2, 0,
        width+10, height
      );
  }
  
  move() {
    if(!this.parado) {
      this.x1 -= this.velocidade;
      this.x2 -= this.velocidade;

      if(this.x1 < -width) {
        this.x1 = width;
      }

      if(this.x2 < -width) {
        this.x2 = width;
      }
    }
  }
  
  stop() {
    this.parado = true;
  }
  
  addVelocity() {
    this.velocidade++;
  }
}