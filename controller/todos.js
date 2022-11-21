let listTodos = [];

const validationTodos = (req, res, next) => {
  const { activityName, activityDescription } = req.body;
  try {
    // validasi buat image
    if (req.file === undefined) return res.status(400).json("Image required!");

    if (activityName === "") return res.status(400).json("Activity name required!");
    // if (activityName === "") throw new Error("Activity name required!");

    if (activityDescription === "") return res.status(400).json("Activity description required!");
    // if (activityDescription === "") throw new Error("Activity description required!");

    next();
  } catch (error) {
    // this error gonna handle by express
    // end send to the user
    return res.status(400).json("Something went wrong!");
  }
};

const addTodos = (req, res) => {
  const { filename } = req.file;

  listTodos = [...listTodos, { id: Math.random(), ...req.body, filename }];

  return res.status(200).json("Berhasil menambah todos!");
};

const getTodos = (_, res) => {
  return res.status(200).json({ listTodos });
};

module.exports = { validationTodos, addTodos, getTodos };
