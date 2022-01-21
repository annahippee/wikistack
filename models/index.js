const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING(250),
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING(100),
    allowNull: false
  }, 
  email: {
    type: Sequelize.STRING(50)
  }
})






module.exports = {
  db
}
