function Sprite_one(x,y,largura,altura){
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;

    this.desenha = function(xCanvas,yCanvas){
        ctx.drawImage(img_pilon,this.x,this.y, this.altura, this.largura, xCanvas, yCanvas, this.largura, this.altura);
    }
}

function Sprite_two(x,y,largura,altura){
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;

    this.desenha = function(xCanvas,yCanvas){
        ctx.drawImage(img_durdo,this.x,this.y, this.altura, this.largura, xCanvas, yCanvas, this.largura, this.altura);
    }
}

var pilon = new Sprite_one(0,0,50,50);

durdo_money = new Sprite_two(0,0,348,250);

durdo_love = new Sprite_two(250,0,348,250);

durdo_fire = new Sprite_two(500,0,348,250);

durdo_x = new Sprite_two(750,0,348,250);
