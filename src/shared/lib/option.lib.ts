import { IOption } from "../model/option.model";

export const getTreeOptionById = (options: IOption[], id: number): IOption[] => {
    // Поиск варианта option с заданным id в текущем уровне
    const foundOption = options.find(option => option.id === id);
    
    // Если вариант option с заданным id найден, возвращаем его
    if (foundOption) {
        return [foundOption];
    }
    
    // Иначе, рекурсивно ищем вариант option с заданным id во вложенных options
    for (const option of options) {
        if (option.options) {
            const nestedOption = getTreeOptionById(option.options, id);
            if (nestedOption) {
                return [option, ...nestedOption];
            }
        }
    }
    
    // Если вариант option с заданным id не найден в текущем уровне и во всех вложенных options, возвращаем null
    return [];
};