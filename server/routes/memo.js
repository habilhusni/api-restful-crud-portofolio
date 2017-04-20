const express = require('express')
const memos = require('../controllers/memoControl')
const router = express.Router()

/* API routes */
router.get('/', memos.findMemo)
router.get('/:id', memos.findOneMemo)
router.post('/', memos.createMemo)
router.put('/:id', memos.editMemo)
router.delete('/:id', memos.deleteMemo)

module.exports = router
