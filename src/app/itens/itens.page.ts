import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.page.html',
  styleUrls: ['./itens.page.scss'],
})
export class ItensPage implements OnInit {

  
  private btBotao:string='1';  

  btAcao() {
    this.btBotao += '1';
  }

  ngOnInit() {
  }

}
