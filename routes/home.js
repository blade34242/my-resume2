const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/', (req, res, next) => {

    const pwd = path.join(__dirname, '../public/ress/mountedRess/me.json');
    var obj = JSON.parse(fs.readFileSync(pwd, 'utf8'));


        let obj;
        try {
            obj = JSON.parse(data);
        } catch (parseErr) {
            return next(parseErr);
        }

        const viewsData = {
            data: obj
        };
        res.render('cv', viewsData);
    });
});

module.exports = router
