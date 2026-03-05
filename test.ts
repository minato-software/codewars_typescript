import { twoOldestAges } from './solution';
import chai, { assert } from "chai";
chai.config.truncateThreshold = 0;

describe("Two Oldest Age", () => {
    it("twoOldestAges([1,5,87,45,8,8]) should return [45,87]", () => {
        assert.deepEqual(twoOldestAges([1, 5, 87, 45, 8, 8]), [45, 87]);
        assert.deepEqual(twoOldestAges([18,48,7,40,6,2,29,9,21,45,27,92,91,44,40,28,82,29,92,12,74,25,12,5,55]), [92, 92]);
    });
});