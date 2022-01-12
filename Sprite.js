function Sprite(x,y,largura,altura){
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;

    this.desenha = function(xCanvas,yCanvas){
        ctx.drawImage(img,this.x,this.y, this.altura, this.largura, xCanvas, yCanvas, this.largura, this.altura);
    }
}

var pilon = new Sprite(0,0,50,50);