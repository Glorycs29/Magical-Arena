export default
class Dice{
    static roll(){
        return Math.floor(Math.random() * 6) + 1;
    }
}

