export default class StringUtil {
    static removeEmptySpaces(str) {
        return str.replace(/\s/g, "")
    }

    static isEmpty(str) {
        return str.length === 0
    }
}
