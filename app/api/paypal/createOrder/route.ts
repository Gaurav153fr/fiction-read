// /app/api/paypal/create-order/route.ts
import { NextRequest, NextResponse } from "next/server";
import client from "@/lib/utils/paypal";
import paypal from "@paypal/checkout-server-sdk";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId,amount } = body;
console.log(userId,"mmkk");

    if (!amount) {
      return NextResponse.json({ success: false, message: "Amount is required" }, { status: 400 });
    }

    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
       
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: amount.toString(),
          },
          custom_id: userId, // Pass userId as custom_id
        },
      ],
    });

    const response = await client.execute(request);

    return NextResponse.json({ success: true, orderID: response.result.id,userId:userId }, { status: 201 });
  } catch (error) {
    console.error("PayPal Order Creation Error:", error);
    return NextResponse.json({ success: false, message: "Error creating PayPal order" }, { status: 500 });
  }
}
