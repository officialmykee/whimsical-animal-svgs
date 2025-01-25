import Deer from "./animals/Deer";
import Penguin from "./animals/Penguin";
import Fox from "./animals/Fox";
import Owl from "./animals/Owl";
import Dolphin from "./animals/Dolphin";

const ChatWallpaper = () => {
  const animals = Array(24).fill(null);

  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-[#1A1F2C] to-[#151823] -z-10">
      <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 p-8">
        {animals.map((_, index) => {
          const Animal = [Deer, Penguin, Fox, Owl, Dolphin][index % 5];
          return (
            <div
              key={index}
              className="flex items-center justify-center transform text-[#9b87f5] hover:text-[#b3a4f7]"
              style={{
                transform: `rotate(${Math.random() * 360}deg) translate(${
                  Math.random() * 20 - 10
                }px, ${Math.random() * 20 - 10}px)`,
              }}
            >
              <Animal />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatWallpaper;