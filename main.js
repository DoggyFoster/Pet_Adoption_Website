const { app, BrowserWindow } = require('electron')

console.warn("Electron OS is running")

function createWindow() {
    const win = new BrowserWindow({
        webPreferences: { nodeIntegration: true }
    })

    win.maximize();
    win.loadFile("home.html");
}

app.whenReady().then(createWindow);
