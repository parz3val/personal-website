// Home hero content box
import Link from "next/link";
export default function HomeHero() {
    return (
    <>
      <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl font-fira-code font-bold">
      Hello, world !!!
      </h2>
      <h1 className="text-6xl font-fira-code font-bold">
      I'm Harry
      </h1>
      <img src="/images/profile.png" alt="profile" className="rounded-full h-64 w-64"/>
      <h3 className="text-3xl font-fira-code font-bold">
      Software Engineer/CS Enthusiast
      </h3>
      <p className="text-xl font-fira-code max-w-xl text-center justify-center">
      experienced in voip and embedded. Prefers working with typescript (react), python, rust and golang.
      </p>
      <Link href="/cv" passHref>
      <span className="text-fira-code text-bold">#goto-cv</span>
      </Link>
      </div>
    
    </>
    );
}
