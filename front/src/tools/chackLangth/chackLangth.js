export default function(str) {
    str = str.target && str.target.value || str;
    return str.length <= 255 && str.length > 0 ? true : false;
}