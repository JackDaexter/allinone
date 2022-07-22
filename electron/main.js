const {app, BrowserWindow, webContents} = require('electron')
require('@electron/remote/main').enable(webContents)
require('@electron/remote/main').initialize()

function createWindow(){
    const window = new BrowserWindow({
        width:800,
        height: 600,
        webPreferences : {
            enableRemoteModule: true,
            contextIsolation: false,
            nodeIntegrationInWorker: true,
            nodeIntegrationInSubFrames: true
        },
        resizable : false
    })

    window.loadURL('http://localhost:3000')
}

app.on('ready',createWindow)