//stub
it('should pass the database result into the callback', function () {
    var expectedResult = { success: true };
    var save = sinon.stub(Database, 'save');
    save.yields(null, expectedResult);
    var callback = sinon.spy();

    setupNewUser({ name: 'foo' }, callback);

    save.restore();
    sinon.assert.calledWith(callback, null, expectedResult);
});

it('should pass the error into the callback if save fails', function () {
    var expectedError = new Error('oops');
    var save = sinon.stub(Database, 'save');
    save.throws(expectedError);
    var callback = sinon.spy();

    setupNewUser({ name: 'foo' }, callback);

    save.restore();
    sinon.assert.calledWith(callback, expectedError);
});

it('should pass object with correct values to save', function () {
    var save = sinon.stub(Database, 'save');
    var info = { name: 'test' };
    var expectedUser = {
        name: info.name,
        nameLowercase: info.name.toLowerCase()
    };

    setupNewUser(info, function () { });

    save.restore();
    sinon.assert.calledWith(save, expectedUser);
});


//spy
it('should pass object with correct values to save', function () {
    var save = sinon.spy(Database, 'save');
    var info = { name: 'test' };
    var expectedUser = {
        name: info.name,
        nameLowercase: info.name.toLowerCase()
    };

    setupNewUser(info, function () { });

    save.restore();
    sinon.assert.calledWith(save, expectedUser);
});

it('should call save once', function () {
    var save = sinon.spy(Database, 'save');

    setupNewUser({ name: 'test' }, function () { });

    save.restore();
    sinon.assert.calledOnce(save);
});

//mock
it('should pass object with correct values to save only once', function () {
    var info = { name: 'test' };
    var expectedUser = {
        name: info.name,
        nameLowercase: info.name.toLowerCase()
    };
    var database = sinon.mock(Database);
    database.expects('save').once().withArgs(expectedUser);

    setupNewUser(info, function () { });

    database.verify();
    database.restore();
});

//tips..
it('should call save once', sinon.test(function () {
    var save = this.spy(Database, 'save');

    setupNewUser({ name: 'test' }, function () { });

    sinon.assert.calledOnce(save);
}));

describe('Something', function () {
    var save;
    beforeEach(function () {
        save = sinon.stub(Database, 'save');
    });

    afterEach(function () {
        save.restore();
    });

    it('should do something', function () {
        //you can use the stub in tests by accessing the variable
        save.yields('something');
    });
});