const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['Ring', 'Necklace', 'Bracelet', 'Earrings', 'Pendant', 'Charm + Pendant', 'Anklet', 'Lifestyle', 'Small Leather Goods', 'Other'],
        required: true,
    },
    weight: {
        type: String, // Weight in grams
        required: true,
    },
    variants: [
        {
            material: {
                type: String,
                enum: ['14k Yellow Gold', '14k White Gold', 'Gold Vermeil', 'Sterling Silver', 'Platinum', 'Titanium', 'Enamel', 'Leather', 'Brushed Gold', 'Cord', '10k Yellow Gold', 'Other'],
                required: true,
            },
            stones: {
                type: String,
                enum: ['Agate', 'Amethyst', 'Aquamarine', 'Aventurine', 'Citrine', 'Diamond', 'Emerald', 'Garnet', 'Gemstones', 'Honey Quartz', 'Lab Grown Diamond', 'Lab Grown Emerald', 'Lab Grown Ruby', 'Lab Grown White Sapphire', 'Multi',
                    'None', 'Onyx', 'Opal', 'Pearl', 'Peridot', 'Prasiolite', 'Quartz', 'Rhodolite', 'Ruby', 'Sapphire', 'Spinel', 'Swiss Blue Topaz', 'Tiger Eye', 'Topaz', 'Tourmaline', 'Tsavorite', 'Turquoise'],
                default: 'None',
            },
            color: {
                type: String,
                enum: ['Black', 'Brown', 'Green', 'Red', 'White', 'Yellow'],
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            sizes: [
                {
                    size: String, // e.g., '6', 'M', '18cm', 'Adjustable'
                    stock: { type: Number, required: true },
                    price: { type: Number }, // Optional: Custom price for this size
                },
            ],
            images: {
                type: [String], // Array of image URLs
                required: true,
            },
            stock: {
                type: Number, // Variant-specific stock quantity
                required: true,
                min: 0,
            },
        },
    ],
    ratings: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    reviews: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
            comment: String,
            rating: { type: Number, min: 0, max: 5 },
            date: { type: Date, default: Date.now },
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model('product', productSchema);
module.exports = Product;
