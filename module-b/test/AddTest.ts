import * as chai from "chai";

import { Add } from "../src";

const expect = chai.expect;

describe("Add", () => {
    it ("Adds up", () => {
        // Arrangements
        const val = new Add();
        // Actions
        const result = val.add(1, 4);
        // Assertions
        expect(result).to.equal(5);
    });
});
