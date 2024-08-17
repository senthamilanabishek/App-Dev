const express = require('express');
const { addVehicle, listVehicles, listByEmail,EditInformation,deleteVehicle } = require('../controller/vehicleinformationc.js'); // Import the controller
const multer = require('multer');
const router = express.Router();

// Image storage configuration for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads'); // Ensure 'uploads' directory exists
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage: storage }); // Create an instance of multer with the defined storage configuration

// Route to add vehicle
router.post('/add', upload.single('image'), addVehicle);

// Route to list all vehicles
router.post('/list', listVehicles);

// Route to get vehicle by email using POST with body
router.post('/getbyemail', listByEmail); 

router.post('/editvehicle', upload.single('image'), EditInformation);

router.post('/deletevehicle',deleteVehicle);

module.exports = router;
