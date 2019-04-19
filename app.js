'use strict';
let K = require('kado')
K.configure({
  root: __dirname,
  db: {
    sequelize: {
      enabled: true,
      user: 'example',
      password: 'example',
    }
  },
  interface: {
    admin: { enabled: true },
    main: { enabled: true }
  },
  module: {
    blog: { enabled: true },
    content: { enabled: true },
    doc: { enabled: true },
    setting: { enabled: true },
    staff: { enabled: true }
  }
})
K.go('Example')
