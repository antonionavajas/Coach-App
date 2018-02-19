import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ca-map',
  templateUrl: './ca-map.component.html',
  styleUrls: ['./ca-map.component.css']
})

export class CaMapComponent implements OnInit {
  private canvasId:string = "default";
  private ctx:CanvasRenderingContext2D[] = [];
  private backgroundImageUrl:string = "./assets/img/bgSummonerRift.jpg";

  constructor() {

  }

  ngOnInit() {

  }

  ngAfterViewInit(){
    let elemCanvas = <HTMLCanvasElement> document.getElementById(this.canvasId);
    elemCanvas.setAttribute('width', elemCanvas.parentElement.attributes.getNamedItem("width").value);
    elemCanvas.setAttribute('height', elemCanvas.parentElement.attributes.getNamedItem("height").value);
    this.ctx.push(elemCanvas.getContext("2d"));
    this.addBackgroundImage(this.ctx[0], elemCanvas.clientWidth, elemCanvas.clientHeight);
  }

  addBackgroundImage(ctx:CanvasRenderingContext2D, w:number, h:number){
    let bgImage = new Image();
    bgImage.src = this.backgroundImageUrl;
    bgImage.onload = function () {
      ctx.drawImage(bgImage, 0, 0, w, h);
    };
  }
}
