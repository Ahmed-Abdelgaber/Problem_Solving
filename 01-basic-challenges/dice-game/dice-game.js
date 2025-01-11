const rollDice = () => Math.floor(Math.random() * 6) + 1;
const getResult = (sum) => {
    if (sum === 7 || sum === 11)
        return 'win';
    if (sum === 2 || sum === 3 || sum === 12)
        return 'lose';
    return 'roll again';
};
const diceGameSimulation = (numSimulations) => {
    const results = [];
    let dice1, dice2, sum, result;
    for (let i = 0; i < numSimulations; i++) {
        dice1 = rollDice();
        dice2 = rollDice();
        sum = dice1 + dice2;
        result = getResult(sum);
        results.push({ dice1, dice2, sum, result });
    }
    return results;
};
export default diceGameSimulation;
