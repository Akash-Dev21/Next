import User from "@/Models/userModel";
const users = [
    {
        username: "johndoe123",
        email: "johndoe123@example.com",
        password: "password123", // In a real app, passwords should be hashed
        isVerified: true,
        verifyToken: null,
        verifyTokenExpiry: null
    },
    {
        username: "janedoe456",
        email: "janedoe456@example.com",
        password: "password456", // In a real app, passwords should be hashed
        isVerified: false,
        forgotPasswordToken: "someRandomToken123",
        forgotPasswordTokenExpiry: new Date(Date.now() + 3600000), // Expires in 1 hour
        verifyToken: "anotherRandomToken456",
        verifyTokenExpiry: new Date(Date.now() + 3600000) // Expires in 1 hour
    },
    {
        username: "samsmith789",
        email: "samsmith789@example.com",
        password: "password789", // In a real app, passwords should be hashed
        isVerified: false
    }
];

// Example code to insert demo data into MongoDB
// Assume mongoose is connected to your database

 const insertDemoData = async () => {
    try {
        // Inserting users into the database
        await User.insertMany(users);
        console.log('Demo data successfully inserted');
    } catch (error) {
        console.error('Error inserting demo data:', error);
    }
};

export default insertDemoData;