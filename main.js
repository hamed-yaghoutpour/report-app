const {app,BrowserWindow} = require('electron')
let mainWindow;
let server;
function createWindow () {
    //start express js server on port: 7777
    server = require('./reporto-server/server').server  
    mainWindow = new BrowserWindow({
      width: 700,
      height: 600,
      frame:false,
      backgroundColor:"#22220666",
      resizable:false
  })
  mainWindow.loadFile('./build/index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    server.close()
    app.quit()
  }
})

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
