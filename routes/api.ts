import express from 'express';

export const router = express.Router();

router.get('/banana', (_req, res) => res.json({
    banana: [
        '美味しいバナナ',
        '普通のバナナ',
        '腐ったバナナ'
    ]
}))