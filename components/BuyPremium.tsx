"use client";
import { buyChapter, getUser } from "@/lib/User/userController";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import ReadEditor from "./ReadEditor";
import Link from "next/link";
import { toast } from "./ui/use-toast";

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
      if (user.points >= 5) {
        const ch = buyChapter(user._id, user.points, id);
        if (ch !== null) {
          setBuy(true);
        }
      } else {
        console.log("not enough points");

        toast({
          title: "Insufficient points",
          description: (
            <div>
              <Link href="/redeem" className={buttonVariants({variant:"default"})}>Get more points</Link>
            </div>
          ),
          variant: "destructive",
        });
      }
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
                <div className="flex flex-col w-full gap-5 items-center">
                  <Button onClick={handleClick}>
                    Buy this chapter for 5 aura points
                  </Button>
                  <Link href="/redeem">
                    <Button variant="outline">Get more points</Button>
                  </Link>
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
