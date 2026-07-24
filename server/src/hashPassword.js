const bcrypt = require("bcryptjs");

(async () => {
  const hash = await bcrypt.hash("sujal@2007", 10);
  console.log(hash);
})();