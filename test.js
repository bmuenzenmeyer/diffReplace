import test from "ava";
import diffReplace from ".";

test("main", t => {
	t.throws(
		() => {
			diffReplace(123);
		},
		{
			instanceOf: TypeError,
			message: "Expected a string, got number"
		}
	);

	t.is(diffReplace("unicorns"), "unicorns & rainbows");
});
