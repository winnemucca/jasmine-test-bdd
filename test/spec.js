// describe('module', function() {
//   it('should do something', function() {
//     expect(true).toEqual(false);
//   });
// });

describe('Hello World', function () {
	it('should return world', function () {
		expect(helloWorld("hello world") ).toEqual("hello world");
	});
	it('should contain world at the end', function () {
		expect(helloWorld() ).toContain("world");
	})
})