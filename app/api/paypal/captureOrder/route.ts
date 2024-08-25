// /app/api/paypal/capture-order/route.ts
import { NextRequest, NextResponse } from "next/server";
import client from "@/lib/utils/paypal";
import paypal from "@paypal/checkout-server-sdk";
import userModel from "@/lib/User/userModel";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, orderID } = body;
console.log(body);

    if (!orderID && !userId) {
      return NextResponse.json(
        { success: false, message: "Order ID is required" },
        { status: 400 }
      );
    }

    // Create a request to capture the order
    const request = new paypal.orders.OrdersCaptureRequest(orderID);
    // Usually, capturing an order does not require additional request body data
    // request.requestBody({payment_source:null});

    const response = await client.execute(request);

    if (response.result.status === "COMPLETED") {
      // Payment is successful; update the database here

      // Extract payer details if needed
      const payerId = response.result.payer.payer_id;

      // Your logic to add coins to the user's account
      // For example, call a function to update the database
      await updateCoinsInDatabase(userId, 50); // Add 10 coins

      return NextResponse.json(
        { success: true, details: response.result },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: "Payment not completed" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("PayPal Capture Order Error:", error);
    return NextResponse.json(
      { success: false, message: "Error capturing PayPal order" },
      { status: 500 }
    );
  }
}

// Function to update coins in the database
async function updateCoinsInDatabase(userId: string, coins: number) {
  await userModel.findByIdAndUpdate(userId, {
    $inc: { points: +coins },
  });
  console.log(userId);
}
