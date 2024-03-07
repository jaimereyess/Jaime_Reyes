import { Button } from "./button";

export function Menu() {
  return (
    <nav className="w-full max-w-min md:max-w-md mx-auto">
      <div className="bg-black bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl dark:bg-white/10">
        <div className="flex">
          <Button />
        </div>
      </div>
    </nav>
  );
}
