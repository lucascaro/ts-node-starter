import log from "@helpers/log"

test("does not break", () => {
  expect(() => log("test")).not.toThrow()
})
