import hello, {add} from './index'

describe("Tests should pass", () => {
	it("Should add", () => {
		expect(add(1,2)).toEqual(3);		
	})
	it.skip("Should say hello", () => {
		expect(hello().toLowerCase()).toBe("hello, world!")
	})
})
