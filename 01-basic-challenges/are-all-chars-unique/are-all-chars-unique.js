const areAllCharactersUnique = (str) => {
    const strSet = new Set(str.split(''));
    return strSet.size === str.length;
};
export default areAllCharactersUnique;
