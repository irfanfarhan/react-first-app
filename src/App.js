import React, { Component } from 'react';
import './App.css';
import Server from './Server/Server';

class App extends Component {
  state = {
    servers: [
      { id: '0', deviceName: 'Server 1', ipAddress: '192.168.1.113', agentStatus: '4 ms', availability: '100%', uninstall: false },
      { id: '1', deviceName: 'Server 2', ipAddress: '192.168.1.111', agentStatus: '12 ms', availability: '98%', uninstall: false },
      { id: '2', deviceName: 'Server 3', ipAddress: '192.168.1.4', agentStatus: '9 ms', availability: '89%', uninstall: false },
      { id: '3', deviceName: 'Server 4', ipAddress: '192.168.1.5', agentStatus: '15 ms', availability: '50%', uninstall: false }
    ]
  }

  uninstallChangedHandler = (event, id) => {
    const serverIndex = this.state.servers.findIndex(p => {
      return p.id === id;
    });

    const server = {
      ...this.state.servers[serverIndex]
    };

    server.uninstall = event.target.checked;

    const servers = [...this.state.servers];
    servers[serverIndex] = server;

    this.setState({ servers: servers });
  }

  uninstallServersHandler = () => {
    const servers =  this.state.servers.filter(s => {
      return s.uninstall !== true;
    });
    this.setState({ servers: servers });
  }

  render() {
    let servers = this.state.servers.map((server, index) => {
      return <Server
        deviceName={server.deviceName}
        ipAddress={server.ipAddress}
        agentStatus={server.agentStatus}
        availability={server.availability}
        uninstall={server.uninstall}
        key={server.id}
        changed={(event) => this.uninstallChangedHandler(event, server.id)} />
    });

    return (
      <div className="container">
        <button className="btn btn-primary"
          onClick={this.uninstallServersHandler}>Uninstall</button>
        <table className="fixed_header">
          <thead>
            <tr>
              <th>Device Name</th>
              <th>IP Address</th>
              <th>Agent Status</th>
              <th>Availability</th>
              <th>Uninstall</th>
            </tr>
          </thead>
          <tbody>
            {servers}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

