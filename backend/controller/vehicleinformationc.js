const Vehicle = require('../module/vehicleinformation.js');

// Add vehicle
const addVehicle = async (req, res) => {
    let image_filename = req.file ? req.file.filename : ''; // Handle the case where req.file might be undefined

    const vehicle = new Vehicle({
        email: req.body.email,
        vehiclebrand: req.body.vehiclebrand,
        vehiclemodel: req.body.vehiclemodel,
        features: req.body.features,
        vehiclenumber: req.body.vehiclenumber,
        address: req.body.address,
        price: req.body.price,
        phonenumber: req.body.phonenumber,
        image: image_filename
    });

    try {
        await vehicle.save();
        res.json({ success: true, message: "Vehicle added" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error adding vehicle" });
    }
};

// List all vehicles
const listVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find({});
        res.status(200).json(vehicles);
    } catch (error) {
        console.error("Error fetching vehicles:", error);
        res.status(500).json({ success: false, message: "Error fetching vehicles" });
    }
};

// List vehicle by email using POST with body
const listByEmail = async (req, res) => {
    const email = req.body.email;
    console.log("Received email:", email);
    try {
        // Find all vehicles with the given email
        const vehicles = await Vehicle.find({ email: email });

        if (vehicles.length > 0) {
            res.json(vehicles);
        } else {
            res.status(404).send('No vehicles found for this email');
        }
    } catch (error) {
        console.error('Error fetching vehicles:', error); // Improved error logging
        res.status(500).send('Server error');
    }
};


const EditInformation = async (req, res) => {
    let image_filename = req.file ? req.file.filename : ''; // Handle the case where req.file might be undefined

    try {
        // Find the vehicle by ID
        
        const vehicle = await Vehicle.findById(req.body._id);
        console.log('Received vehicle ID:', req.body._id);

        if (!vehicle) {
            return res.status(404).json({ success: false, message: "Vehicle not found" });
        }

        // Update the vehicle's fields
        vehicle.email = req.body.email || vehicle.email;
        vehicle.vehiclebrand = req.body.vehiclebrand || vehicle.vehiclebrand;
        vehicle.vehiclemodel = req.body.vehiclemodel || vehicle.vehiclemodel;
        vehicle.features = req.body.features || vehicle.features;
        vehicle.vehiclenumber = req.body.vehiclenumber || vehicle.vehiclenumber;
        vehicle.address = req.body.address || vehicle.address;
        vehicle.price = req.body.price || vehicle.price;
        vehicle.phonenumber = req.body.phonenumber || vehicle.phonenumber;

        // Update the image if a new file is uploaded
        if (image_filename) {
            vehicle.image = image_filename;
        }

        // Save the updated vehicle
        await vehicle.save();
        res.json({ success: true, message: "Vehicle updated" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error updating vehicle" });
    }
};


const deleteVehicle = async (req, res) => {
    console.log("Received DELETE request");
    console.log("Request body:", req.body);

    const vehicleId = req.body._id;
    if (!vehicleId) {
        console.error("Vehicle ID not provided");
        return res.status(400).json({ success: false, message: "Vehicle ID is required" });
    }

    try {
        const vehicle = await Vehicle.findByIdAndDelete(vehicleId);
        if (!vehicle) {
            return res.status(404).json({ success: false, message: "Vehicle not found" });
        }
        res.json({ success: true, message: "Vehicle deleted successfully" });
    } catch (error) {
        console.error("Error deleting vehicle:", error);
        res.status(500).json({ success: false, message: "Error deleting vehicle" });
    }
};




module.exports = { addVehicle, listVehicles, listByEmail, EditInformation, deleteVehicle };
