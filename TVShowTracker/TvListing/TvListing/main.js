// ./main.js
const { app, BrowserWindow, Menu } = require('electron')

let win = null;

function createWindow() {
    // Initialize the window to our specified dimensions
    win = new BrowserWindow({ width: 1000, height: 600 });

    // Specify entry point
    win.loadURL('http://localhost:56027');

    // Show dev tools
    // Remove this line before distributing
    win.webContents.openDevTools()

    // Remove window once app is closed
    win.on('closed', function () {
        win = null;
    });

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
}


app.on('ready', function () {

    createWindow();

});

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
});


//const electron = require('electron');
//const url = require('url');
//const path = require('path');

//const { app, BrowserWindow, Menu, ipcMain } = electron;

//let mainWindow;
//let addWindow

//// Listen for app to be ready
//app.on('ready', function () {
//    // Create new window
//    mainWindow = new BrowserWindow({});
//    // Load html into window
//    mainWindow.loadURL(url.format({
//        pathname: path.join(__dirname, './Views/Shared/_Layout.cshtml'),
//        protocol: 'file:',
//        slashes: true
//    }));
//    // Quit app when closed
//    mainWindow.on('closed', function () {
//        app.quit();
//    })


//    // Build menu from template
//    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
//    // Insert menu
//    Menu.setApplicationMenu(mainMenu);

//});

//// Handle add window
//function createAddWindow() {
//    // Create new window
//    addWindow = new BrowserWindow({
//        width: 300,
//        height: 200,
//        title: 'Add new Tv show'
//    });
//    // Load html into window
//    addWindow.loadURL(url.format({
//        pathname: path.join(__dirname, 'addWindow.html'),
//        protocol: 'file:',
//        slashes: true
//    }));
//    // Rubbish collection handle
//    addWindow.on('close', function () {
//        addWindow = null;
//    })
//}

//// Catch Item:add
//ipcMain.on('item:add', function (e, item) {
//    mainWindow
//})

// Create menu template
const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            //{
            //    label: 'Add Item',
            //    click() {
            //        createAddWindow();
            //    }
            //},
            //{
            //    label: 'Clear Items'
            //},
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click() {
                    app.quit();
                },
            }
        ]
    }

];

// if mac add empty object to menu
if (process.platform == 'darwin') {
    mainMenuTemplate.unshift({});
}

// Add developer tools if not in production
if (process.env.NODE_ENV !== 'production') {
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu: [
            {
                label: 'Toggle DevTools',
                accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    });
}