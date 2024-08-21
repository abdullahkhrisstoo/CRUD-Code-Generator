import { generateRepositoryInterface, generateServiceInterface } from './generator';

function generateFiles() {
    const modelClassName = (document.getElementById("modelClassName") as HTMLInputElement).value;
    if (!modelClassName) {
        alert("Please enter a model class name.");
        return;
    }

    const repositoryInterface = generateRepositoryInterface(modelClassName);
    const serviceInterface = generateServiceInterface(modelClassName);
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

(window as any).generateFiles = generateFiles; // Expose the function to the global window object
