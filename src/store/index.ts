// Storing in variable a context with all files in this folder
// ending with `.ts`.
const requireModule = require.context('.', false, /\.ts$/)
const modules: any = {}

requireModule.keys().forEach(fileName => {
    if (fileName === './index.ts') return
    // filter fullstops and extension 
  // and return a camel-case name for the file
    const moduleName = (
        fileName.replace(/(\.\/|\.ts)/g, '')
    )
  // create a dynamic object with all modules
    modules[moduleName] = {
    // add namespace here
        namespaced: true,
        ...requireModule(fileName).default
    // if you have exported the object with name in the module `js` file
    // e.g., export const name = {};
    // uncomment this line and comment the above
        // ...requireModule(fileName)[moduleName]
    }
})
export default modules