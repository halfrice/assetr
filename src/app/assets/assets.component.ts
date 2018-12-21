import { Component, OnInit } from '@angular/core';
import { Asset } from '../asset';
import { ASSETS } from '../mock-assets';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {
  assets = ASSETS;
  currentAsset: Asset;

  constructor() { }

  ngOnInit() {
  }

  onSelect(asset: Asset): void {
    this.currentAsset = asset;
  }
}
