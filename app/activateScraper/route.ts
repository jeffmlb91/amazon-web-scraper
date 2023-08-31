import { NextApiRequest } from "next";

export async function GET(req: Request){
    console.log("Submitting...", req.body);

    
}


//THIS NEW NEXT JS13.2 METHODE WE CAN EXPORT THE FOLLOWING
// export async function GET(request: Request) {}
// export async function POST(request: Request) {}
// export async function DELETE(request: Request) {}

// export async function GET(request: Request){
//     return new Response('Hello, MLB Teams!', {
//         status: 200,
//       });
// }
