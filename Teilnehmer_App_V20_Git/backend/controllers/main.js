const getTableData = (req, res, db) => {
  db.select("*")
    .from("participant")
    .then((items) => {
      if (items.length) {
        res.json(items);
      } else {
        res.json({ dataExists: "false" });
      }
    })
    .catch((err) => res.status(400).json({ dbError: "db error" }));
};

const postTableData = (req, res, db) => {
  const { first, last, email, phone, location, education } = req.body;
  const added = new Date();
  db("participant")
    .insert({ first, last, email, phone, location, education, added })
    .returning("*")
    .then((item) => {
      res.json(item);
    })
    .catch((err) => res.status(400).json({ dbError: "db error" }));
};

const putTableData = (req, res, db) => {
  const { id, first, last, email, phone, location, education } = req.body;
  db("participant")
    .where({ id })
    .update({ first, last, email, phone, location, education })
    .returning("*")
    .then((item) => {
      res.json(item);
    })
    .catch((err) => res.status(400).json({ dbError: "db error" }));
};

const deleteTableData = (req, res, db) => {
  const { id } = req.body;
  db("participant")
    .where({ id })
    .del()
    .then(() => {
      res.json({ delete: "true" });
    })
    .catch((err) => res.status(400).json({ dbError: "db error" }));
};

module.exports = {
  getTableData,
  postTableData,
  putTableData,
  deleteTableData,
};
