import { Component, OnInit } from '@angular/core';
import { Asset } from '../asset';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {
  asset: Asset = {
    id: 1,
    name: '007'
  }

  constructor() { }

  ngOnInit() {
  }

}
