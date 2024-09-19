"use client";
import { buyChapter, getUser } from "@/lib/User/userController";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import ReadEditor from "./ReadEditor";

const BuyPremium = ({ id, content }: { id: string; content: string }) => {
  const { data: session } = useSession();
  const [user, setUser] = useState<any>(null);
  const [buy, setBuy] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      if (session?.user?.email && session.user.name) {
        const data = await getUser(session.user.email, session.user.name);

        setUser(data);
      }
    };

    fetchUser();
  }, [session, buy]);

  const handleClick = () => {
    if (user) {
      console.log("Buying this chapter", user._id);

      buyChapter(user._id, user.points, id);
      setBuy(true);
    }
  };
  return (
    <div>
      {session ? (
        <div>
          {user && (
            <div>
              {user.purchased.indexOf(id) >= 0 ? (
                <div>
                  <ReadEditor content={content} />
                </div>
              ) : (
                <div>
                  <Button onClick={handleClick}>
                    Buy this chapter for 5 aura points
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div>login kar bhai</div>
      )}
    </div>
  );
};

export default BuyPremium;
