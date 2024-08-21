export function generateRepositoryInterface(modelClassName: string): string {
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

export function generateServiceInterface(modelClassName: string): string {
    return `
public interface I${modelClassName}Service
{
    // Define service methods for ${modelClassName}
}`;
}

// Add similar functions for each of the other files...
