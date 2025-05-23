const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    event: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Event", 
        required: true 
    },
    numberOfTickets: { 
        type: Number, 
        required: true,
        min: 1 
    },
    totalPrice: { 
        type: Number, 
        required: true 
    },
    status: { 
        type: String, 
        enum: ["Pending", "Confirmed", "Canceled"], 
        default: "Pending" 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model("Booking", bookingSchema);
