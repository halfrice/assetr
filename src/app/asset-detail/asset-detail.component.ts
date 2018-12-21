import { Component, OnInit, Input } from '@angular/core';
import { Asset } from '../asset';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.scss']
})
export class AssetDetailComponent implements OnInit {
  @Input() asset: Asset;

  constructor() { }

  ngOnInit() {
  }

}
