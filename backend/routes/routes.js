const express = require('express');
const router = express.Router();

const getgg = require('../controller/bicyclecontroller');


router.post('/userinformation', getgg.postUserInformation); 
router.post('/getuserinformation', getgg.getUserInformation);
router.put('/updateuser',getgg.updateUser);
router.post('/getcarbrands',getgg.getcarBrands);
router.post('/getcarmodel',getgg.getcarModel);


router.get('/test', (req, res) => {
  res.send('Backend is working!');
});

module.exports = router;
