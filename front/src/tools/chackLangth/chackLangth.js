export default function(str) {
    if (str.target && (str.target.value === '' || str.target.value)){
        str = str.target.value;
    }
    return str.length <= 255 ? true : false;
}