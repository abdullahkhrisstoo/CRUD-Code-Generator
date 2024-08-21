"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRepositoryInterface = generateRepositoryInterface;
exports.generateServiceInterface = generateServiceInterface;
function generateRepositoryInterface(modelClassName) {
    return `
public interface I${modelClassName}Repository
{
    ${modelClassName} Get${modelClassName}ById(int id);
    IEnumerable<${modelClassName}> GetAll${modelClassName}s();
    void Add${modelClassName}(${modelClassName} entity);
    void Update${modelClassName}(${modelClassName} entity);
    void Delete${modelClassName}(int id);
}`;
}
function generateServiceInterface(modelClassName) {
    return `
public interface I${modelClassName}Service
{
    // Define service methods for ${modelClassName}
}`;
}
// Add similar functions for each of the other files...
