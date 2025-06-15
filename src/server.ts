import { Server } from 'http';
import app from './app';
import mongoose from 'mongoose';


let server: Server;

const port = process.env.PORT || 5000;

async function main() {
    try {

        // Create the server using the imported app
        await mongoose.connect('mongodb+srv://note-app:PHtzXEkAUwRrZeSM@cluster0.hrjn1tt.mongodb.net/note-app?retryWrites=true&w=majority&appName=Cluster0');
        server = app.listen(port, () => {
            console.log(`Server is running on ${port}`);
        });

    } catch (erro) {
        console.error('An error occurred while starting the server:', erro);
    }
}

main();