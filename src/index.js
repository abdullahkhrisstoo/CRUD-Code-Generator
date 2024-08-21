"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generator_1 = require("./generator");
function generateFiles() {
    const modelClassName = document.getElementById("modelClassName").value;
    if (!modelClassName) {
        alert("Please enter a model class name.");
        return;
    }
    const repositoryInterface = (0, generator_1.generateRepositoryInterface)(modelClassName);
    const serviceInterface = (0, generator_1.generateServiceInterface)(modelClassName);
    // Add other generated files...
    // displayGeneratedFiles({
    //     "I" + modelClassName + "Repository.cs": repositoryInterface,
    //     "I" + modelClassName + "Service.cs": serviceInterface,
    //     // Add other files...
    // });
}
// function displayGeneratedFiles(files: { [fileName: string]: string }) {
//     const generatedCodeDiv = document.getElementById("generatedCode");
//     if (generatedCodeDiv) {
//         generatedCodeDiv.innerHTML = "";
//         for (const [fileName, fileContent] of Object.entries(files)) {
//             generatedCodeDiv.innerHTML += `<h3>${fileName}</h3><pre>${fileContent}</pre>`;
//         }
//     }
// }
window.generateFiles = generateFiles; // Expose the function to the global window object
