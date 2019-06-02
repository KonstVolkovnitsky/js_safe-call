'use strict';

function safeCall(f) {
  try {
    f();
    return true
  }
  catch {
    return false
  }
}

Function.prototype.safeCall = function (context, ...args) {
  try {
      const result = this.call(context, ...args);
      return result;
  } catch (error) {
      return null;
  }
};