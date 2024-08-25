/* eslint-disable @next/next/no-img-element */
"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { getUser } from "@/lib/User/userController";
import { useEffect, useState, useCallback } from "react";
import { AvatarFallback, Avatar, AvatarImage } from "./ui/avatar";

const SignButton = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (session?.user?.email && session.user.name) {
        const data = await getUser(session.user.email, session.user.name);
        console.log(data, "nfjksdnkjbfjesbh");
        setUser(data);
      }
    };

    fetchUser();
  }, [session]);

  return (
    <div className="w-full">
      {session ? (
        <div className="flex items-start flex-col w-full">
          <span className="flex  w-fit  items-center">
           
            <Avatar>
            {/* @ts-ignore */}
              <AvatarImage src={session.user?.image} alt="@user" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <strong className="mx-2"> {session.user?.name}</strong>
            <Button onClick={() => signOut()} variant="destructive">
              Logout
            </Button>
          </span>
          <span className="w-full h-5 my-2 text-center">
            {user ? (
              <span className="font-mono font-bold text-xl">
                {user.points} aura
              </span>
            ) : null}
          </span>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <strong>Login with</strong>
          <Button onClick={() => signIn("discord")}>Discord</Button>
          <Button onClick={() => signIn("github")}>Github</Button>
        </div>
      )}
    </div>
  );
};

export default SignButton;
