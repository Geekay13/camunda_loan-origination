// Dummy Post API Handler
const postDeploy = (req, res) => {
    res.status(200).json({ message: "this is post api" });
  };
  
  module.exports = { postDeploy };
  