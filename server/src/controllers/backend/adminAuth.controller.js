const adminModel = require('../../models/AdminModel');

exports.login = async (req, res) => {
    try {
        const { adminName, adminPassword } = req.body;

        // Validate input
        if (!adminName || !adminPassword) {
            return res.status(400).json({
                success: false,
                message: 'adminName and adminPassword are required'
            });
        }

        // Find admin by credentials
        const admin = await adminModel.findOne({ adminName, adminPassword });

        if (!admin) {
            return res.status(401).json({
                success: false,
                message: 'Invalid adminName or password'
            });
        }

        // Return success response with admin info (excluding password)
        return res.status(200).json({
            success: true,
            message: 'Login successful',
            admin: {
                adminName: admin.adminName,
                _id: admin._id
            }
        });
    } catch (error) {
        console.error('Admin login error:', error);
        return res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
}; 