/**
 *
 * 验证类型
 * 文档地址：https://github.com/yiminghe/async-validator#type
 *
 * string: Must be of type string. This is the default type.
 * number: Must be of type number.
 * boolean: Must be of type boolean.
 * method: Must be of type function.
 * regexp: Must be an instance of RegExp or a string that does not generate an exception when creating a new RegExp.
 * integer: Must be of type number and an integer.
 * float: Must be of type number and a floating point number.
 * array: Must be an array as determined by Array.isArray.
 * object: Must be of type object and not Array.isArray.
 * enum: Value must exist in the enum.
 * date: Value must be valid as determined by Date
 * url: Must be of type url.
 * hex: Must be of type hex.
 * email: Must be of type email.
 */

export enum ValidatorType {

    string = "string",

    number = "number",

    boolean = "boolean",

    method = "method",

    integer = "integer",

    float = "float",

    array = "array",

    object = "object",

    enum = "enum",

    date = "date",

    url = "url",

    hex = "hex",

    email = "email",

}
