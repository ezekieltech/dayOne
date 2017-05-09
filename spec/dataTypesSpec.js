describe("Data types tests ", function() {
  describe("Case for some falsy values", function() {

    it("should return 'no value' for null", function() {
      expect(dataTypes(null)).toEqual('no value');
    });

    it("should return 'no value' for undefined", function() {
      expect(dataTypes(undefined)).toEqual('no value');
    });

  });

  describe("Case for booleans", function() {

    it("should return true for `true`", function() {
      expect(dataTypes(true)).toBe(true);
    });

    it("should return false for `false`", function() {
      expect(dataTypes(false)).toBe(false);
    });

  });

  describe("Case for Numbers", function() {

    it("should return 'less than 100' for 44", function() {
      expect(dataTypes(44)).toBe('less than 100');
    });

    it("should return 'more than 100' for 144", function() {
      expect(dataTypes(144)).toBe('more than 100');
    });

    it("should return 'equal to 100' for 100", function() {
      expect(dataTypes(100)).toBe('equal to 100');
    });


  });

  describe("Case for Strings", function() {

    it("should return the length of `tergiversate`", function() {
      expect(dataTypes('tergiversate')).toBe(12);
    });

    it("should return the length of an empty string", function() {
      expect(dataTypes('')).toBe(0);
    });

    it("should return the length of `555`", function() {
      expect(dataTypes('555')).toBe(3);
    });

  });

  describe("Case for arrays", function() {

    it("should return `2` for `[0, 1, 2]`", function() {
      expect(dataTypes([0, 1, 2])).toBe(2);
    });

    it("should return `undefined` for `[]`", function() {
      expect(dataTypes([])).not.toBeDefined();
    });
    it("should return `undefined` for `[4, 9]`", function() {
      expect(dataTypes([4, 9])).not.toBeDefined();
    });
  });

  describe("Case for functions", function() {
    it("should call the `callback` function with argument true, and return `called callback`", function() {
      var callback = function(arg) {
        expect(arg).toBeTruthy();
        if(arg === true) {
          return 'called callback';
        }
      };
      expect(dataTypes(callback)).toBe('called callback');
    });
  });
});



(function() {
  'use strict';

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

    });

  });

})();