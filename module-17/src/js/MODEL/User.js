export function User() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'User';
    var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    this.name = name;
    this.speed = speed;
    this.result = new Result();
}
