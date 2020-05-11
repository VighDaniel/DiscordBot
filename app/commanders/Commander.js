'use strict';

var fs = require("fs");

module.exports = class Commander
{
    path;

    commandArray;

    constructor(msg, commandArray)
    {
        this.path = "./commands/";
        this.commandArray = commandArray;

        this.executeCommand(msg);
    };

    // This function gets called from the constructor.
    // It is responsible for executing the commands.
    executeCommand(msg) {
        let { commander } = this.findCommand();
        let commanderNamespace = commander[0];
        let commanderFunction = commander[1];
        let Class = require('./' + commanderNamespace);
        new Class()[commanderFunction](msg);
    };

    // Find the first match from the commands.json file and return it
    findCommand()
    {
        let commands = JSON.parse( fs.readFileSync( this.path + 'commands.json' ) );

        for(let index in commands) {
            let command = commands[index];
            if(this.commandArray[0] === command["name"]) {
                return this.shapeCommand(command);
            }
        }
    }

    shapeCommand(command)
    {
        // 0: commander file
        // 1: function to run
        command.commander = command.commander.split("::");
        return command;
    }
}