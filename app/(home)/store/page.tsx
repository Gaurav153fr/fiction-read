"use client"
// /pages/coins.tsx
import PayPalButton from '@/components/PaypalButtons';

const CoinsPage: React.FC = () => {
  const handleSuccess = (details: any) => {
    // Handle successful transaction (e.g., add coins to user account)
    console.log('Transaction completed by ' + details.payer.name.given_name);
  };

  return (
    <div>
      <h1>Purchase Coins</h1>
      <PayPalButton amount="10.00" onSuccess={handleSuccess} />
    </div>
  );
};

export default CoinsPage;
