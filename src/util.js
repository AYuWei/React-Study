export default function getRandom(max,min){
    return Math.random() * (max + 1 - min) + min;
}