var RecordModel = /** @class */ (function () {
    function RecordModel(_a) {
        var id = _a.id, name = _a.name, priority = _a.priority, order = _a.order, createdAt = _a.createdAt, updatedAt = _a.updatedAt;
        this.id = id;
        this.name = name;
        this.priority = priority;
        this.order = order;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    RecordModel.prototype.getId = function () {
        return this.id;
    };
    RecordModel.prototype.getName = function () {
        return this.name;
    };
    RecordModel.prototype.setName = function (name) {
        this.name = name;
    };
    RecordModel.prototype.getPriotity = function () {
        return this.priority;
    };
    RecordModel.prototype.setPriority = function (priority) {
        this.priority = priority;
    };
    RecordModel.prototype.getOrder = function () {
        return this.order;
    };
    RecordModel.prototype.setOrder = function (order) {
        this.order = order;
    };
    RecordModel.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    RecordModel.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
    };
    RecordModel.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    RecordModel.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
    };
    return RecordModel;
}());
var X = new RecordModel({
    id: 4,
    name: 'Pedro',
    priority: 2,
    order: 1,
    createdAt: new Date(),
    updatedAt: null,
});
console.log(X);
X.setName('Henrique');
console.log(X, X.getName());
