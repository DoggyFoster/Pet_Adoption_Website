const { app, BrowserWindow } = require('electron')

console.warn("Electron OS is running")

function createWindow() {
    const win = new BrowserWindow({
        webPreferences: { nodeIntegration: true },
        icon: path.join(__dirname, 'images', 'icon-doggy.ico'),
    })

    win.maximize();
    win.loadFile("home.html");
}

app.whenReady().then(createWindow);
