const {app,BrowserWindow} = require('electron')
let mainWindow;

function createWindow () {
    //start express js server on port: 7777
    require('./reporto-server/server')  
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

    app.quit()
  }
})

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
