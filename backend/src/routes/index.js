const { Router } = require("express");
const router = Router();

const {
  getPredios,
  getPredioById,
  createPredios,
  deletePredio,
  updatePredio,
} = require("../controllers/index.controller");

router.get("/predios", getPredios);
router.get("/predios/:id", getPredioById);
router.post("/predios", createPredios);
router.delete("/predios/:id", deletePredio);
router.put("/predios/:id", updatePredio);

module.exports = router;
