"use client"
import { useState, FC } from 'react';

const Subscribe: FC = () => {
   const [loading, setLoading] = useState<boolean>(false);

   const handleSubscribe = async () => {
      setLoading(true);
      // Call your backend to create a checkout session
      const res = await fetch('/api/create-checkout-session', {
         method: 'POST',
      });
      const session = await res.json();
      const result = await stripe.redirectToCheckout({
         sessionId: session.id,
      });

      if (result.error) {
         // Handle error here
         console.error(result.error.message);
      }

      setLoading(false);
   };

   return (
      <div>
         {loading ? (
            <button className="bg-gray-800 p-4 font-semibold text-white rounded-md  transition-all">Processing...</button>
         ) : (
            <button className="bg-lime-400 hover:bg-lime-500 p-4 font-semibold text-black border border-black rounded-md  transition-all" onClick={handleSubscribe}>Få en gratis offert idag</button>
         )}
      </div>
   );
}

export default Subscribe;