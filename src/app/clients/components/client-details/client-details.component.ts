import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientDetailsComponent implements OnInit {

  @Input() client: Client;

  constructor() { }

  ngOnInit() {
  }

}
