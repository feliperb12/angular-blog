import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  photoCover:string = 'https://disneyplusbrasil.com.br/wp-content/uploads/2021/07/Series-Marvel-Disney-Plus-1024x576.jpg'
  cardTitle:string = 'NOVA SÉRIE ANUNCIADA'

  constructor() { }

  ngOnInit(): void {
  }

}
