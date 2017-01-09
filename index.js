function removePlugin(builder, options) {
  var remove = [].concat(options || []);

  function removeDependency(meta) {
    var index = -1;

    for (var i = 0, length = remove.length; i < length && index === -1; i++) {
      index = meta.deps.indexOf(remove[i]);
    }

    if (index !== -1) {
      var deps = meta.deps.slice(0);
      deps.splice(index, 1);

      return {
        deps: deps
      };
    }
  }

  return builder.configure({ postdependency: removeDependency });
}

module.exports = function(options) {
  return function(builder) {
    return removePlugin(builder, options);
  }
};
