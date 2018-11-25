import React from 'react';

const server = (props) => {
    return (
        <tr>
            <td>{props.deviceName}</td>
            <td>{props.ipAddress}</td>
            <td>{props.agentStatus}</td>
            <td>{props.availability}</td>
            <td><input type="checkbox" checked={props.uninstall} onChange={props.changed} /></td>
        </tr>
    )
};

export default server;