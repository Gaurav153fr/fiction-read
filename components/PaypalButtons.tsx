import { getUser } from "@/lib/User/userController";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface PayPalButtonProps {
  amount: string;
  onSuccess: (details: any) => void;
}

const PayPalButton: React.FC<PayPalButtonProps> = ({ amount, onSuccess }) => {
  const { data: session } = useSession();
  const [user, setUser] = useState<any>("jhh");
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [buttonRendered, setButtonRendered] = useState(false); // New state to track if the button is rendered

  useEffect(() => {
    const fetchUser = async () => {
      if (session?.user?.email && session.user.name) {
        const data = await getUser(session.user.email, session.user.name);
        if (data) {
          setUser(data.id);
        }
      }
    };

    fetchUser();
  }, [session]);

  useEffect(() => {
    if (user && !scriptLoaded) {
      const loadPayPalScript = () => {
        if (document.querySelector('script[src*="paypal.com/sdk/js"]')) {
          // Script already exists, just set flag to true
          setScriptLoaded(true);
          return;
        }

        const script = document.createElement("script");
        script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}`;
        script.async = true;
        script.onload = () => setScriptLoaded(true);
        document.body.appendChild(script);
      };

      loadPayPalScript();
    }
  }, [user, scriptLoaded]);

  useEffect(() => {
    if (scriptLoaded && user && !buttonRendered) {
      if ((window as any).paypal) {
        (window as any).paypal
          .Buttons({
            createOrder: async () => {
              const res = await fetch("/api/paypal/createOrder", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId: user, amount }),
              });
              const data = await res.json();
              return data.orderID;
            },
            onApprove: async (data: any) => {
              const res = await fetch("/api/paypal/captureOrder", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ orderID: data.orderID, userId: user }),
              });
              const result = await res.json();
              if (result.success) {
                onSuccess(result.details);
              } else {
                console.error("Payment capture failed:", result.message);
              }
            },
          })
          .render("#paypal-button-container");

        setButtonRendered(true); // Set buttonRendered to true after rendering the button
      }
    }
  }, [scriptLoaded, user, amount, onSuccess, buttonRendered]);

  return (
    <>
      {user}
      <div id="paypal-button-container"></div>
    </>
  );
};

export default PayPalButton;
