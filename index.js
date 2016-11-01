'use strict';
require('consoleplusplus');

const path = require('path'),
      electron = require('electron');
const app = electron.app;
const ipc = electron.ipcMain;


// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// prevent window being garbage collected
let mainWindow;

function onClosed() {
	// dereference the window
	// for multiple windows store them in an array
	mainWindow = null;
}

function createMainWindow() {
	const win = new electron.BrowserWindow({
		width: 800,
		height: 600
	});

	win.loadURL(path.join('file://', __dirname, '/app/index.html'));
	win.on('closed', onClosed);

	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();
});

ipc.on('console-log', (event, arg) => {
  console.log(arg);
});

ipc.on('console-debug', (event, arg) => {
  console.debug(arg);
});

ipc.on('console-warn', (event, arg) => {
  console.warn(arg);
});

ipc.on('console-error', (event, arg) => {
  console.error(arg);
});