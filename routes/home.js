const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

function validateResume(obj) {
  const errors = [];
  const reqStr = [
    'picture',
    'name',
    'header',
    'about'
  ];
  const reqArr = [
    'links',
    'workexperiences',
    'menus',
    'educations',
    'interests'
  ];

  reqStr.forEach((k) => {
    if (!obj || typeof obj[k] !== 'string' || obj[k].trim() === '') {
      errors.push(`Missing or invalid string field: ${k}`);
    }
  });
  reqArr.forEach((k) => {
    if (!Array.isArray(obj?.[k])) {
      errors.push(`Missing or invalid array field: ${k}`);
    }
  });
  return errors;
}

router.get('/', (req, res) => {
  try {
    const pwd = path.join(__dirname, '../public/ress/mountedRess/me.json');
    const raw = fs.readFileSync(pwd, 'utf8');
    const obj = JSON.parse(raw);

    const errors = validateResume(obj);
    if (errors.length) {
      console.error('Resume validation failed:', errors);
      return res.status(400).send('Resume file (me.json) is missing required fields: ' + errors.join('; '));
    }

    return res.render('cv', { data: obj });
  } catch (err) {
    console.error('Failed to load resume data:', err);
    return res.status(500).send('Failed to load resume.');
  }
});

module.exports = router;
