import Deer from "./animals/Deer";
import Penguin from "./animals/Penguin";
import Fox from "./animals/Fox";
import Owl from "./animals/Owl";

const ChatWallpaper = () => {
  const animals = Array(24).fill(null);

  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] -z-10">
      <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 p-8">
        {animals.map((_, index) => {
          const Animal = [Deer, Penguin, Fox, Owl][index % 4];
          return (
            <div
              key={index}
              className="flex items-center justify-center transform"
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