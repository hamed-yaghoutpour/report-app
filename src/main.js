const {app,BrowserWindow,ipcMain} = require('electron')
let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({
      width: 700,
      height: 600,
      frame:false,
      backgroundColor:"#22220666",
      resizable:false,
      webPreferences:{
        nodeIntegration: true,
        contextIsolation:false
      }
  })

  mainWindow.loadFile('./reporto/new_report/index.html')
}

ipcMain.on('quit_app',()=>{
  app.quit()
})

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
