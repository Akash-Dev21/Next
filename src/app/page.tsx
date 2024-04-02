import { DbConnect} from "@/dbConfig/dbConfig";
import insertDemoData from "./demoData/demoData";


// connect();
DbConnect();

/// Inserting demo data to confirm database connection
// insertDemoData();






export default function Home() {
    return (
     <h1 className="flex flex-col item-center justify-center min-h-screen py-2">hello Akash</h1>
    );
  }
  



