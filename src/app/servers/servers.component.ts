import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverStatus = false;
  serverName = '';
  isServerActive = 'Server offline'
  serverCreated = false;
  servers = ['TestServer', 'Dummy', 'Production'];

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.isServerActive = `${this.serverName} was successfully created`;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

}
