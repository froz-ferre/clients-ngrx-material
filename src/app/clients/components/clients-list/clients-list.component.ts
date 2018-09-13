import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsListComponent implements OnInit {

  @Input() clients: Client[];
  @Output() select = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
