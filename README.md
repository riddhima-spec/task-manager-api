task-manager-api/
├── src/
│   ├── config/db.js
│   ├── routes/         (auth.routes.js, task.routes.js)
│   ├── controllers/    (auth.controller.js, task.controller.js)
│   ├── middleware/     (auth.js, validate.js, errorHandler.js)
│   ├── app.js          (express setup, middleware, routes)
│   └── server.js       (starts the server)
├── .env                (never commit)
├── .env.example        (commit this)
├── .gitignore          (node_modules, .env)
├── package.json
└── README.md