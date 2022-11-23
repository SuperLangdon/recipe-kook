module.exports = Ferdium =>
  class Kook extends Ferdium {
    async validateUrl() {
      return true;
    }
  };
