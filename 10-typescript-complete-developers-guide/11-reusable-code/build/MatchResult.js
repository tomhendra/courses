"use strict";
// Enums
// - follow near-identical syntax rules s normal objects
// - creates an object with the same keys and values when converted from TS to JS
// - primary goal is to signal to other engineers that these are all closely related values
// - use whenever we have a small fixed set of values that are all closely related and known at compile time
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
