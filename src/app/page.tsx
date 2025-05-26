import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton>
          <Button>
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
        <SignOutButton>
          <Button>
           SignOut 
          </Button>  
        </SignOutButton> 
      </SignedIn>
    </div>
  );
}
