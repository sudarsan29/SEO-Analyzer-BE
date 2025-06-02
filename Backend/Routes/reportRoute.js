const express = require('express');
const router = express.Router();
const axios = require('axios');
const reportModel = require('../Models/reportModel')
const dotenv = require('dotenv');
dotenv.config();

router.post('/', async (req, res) => {
    const { url, google_api_key} = req.body;
    const key = google_api_key || process.env.GOOGLE_API_KEY;

    if (!url) return res.status(400).json({ error: 'URL is required' });

    try {
        const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&category=SEO&key=${key}`;
        const { data } = await axios.get(endpoint);

        const seoScore = data.lighthouseResult.categories.seo.score * 100;
        const audits = data.lighthouseResult.audits;

        const report = new reportModel({ url, seoScore, audits });
        await report.save();

        res.json({ seoScore, audits });
    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json({ error: error.response?.data?.error?.message || 'failed to fetch SEO data' });
    }
});

module.exports = router;