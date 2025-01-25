import Deer from "./animals/Deer";
import Penguin from "./animals/Penguin";
import Fox from "./animals/Fox";
import Owl from "./animals/Owl";
import Dolphin from "./animals/Dolphin";

const ChatWallpaper = () => {
  // Increase the number of animals even more
  const animals = Array(72).fill(null);

  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-[#1A1F2C] to-[#151823] -z-10 overflow-hidden">
      <div className="absolute inset-0">
        {animals.map((_, index) => {
          const Animal = [Deer, Penguin, Fox, Owl, Dolphin][index % 5];
          // Adjust random positions to bring animals closer together
          const randomX = (Math.random() * 80) + 10; // Keep animals within 10-90% of the width
          const randomY = (Math.random() * 80) + 10; // Keep animals within 10-90% of the height
          const randomRotate = Math.random() * 360;
          const randomScale = 0.6 + Math.random() * 0.4; // Slightly smaller scale range

          return (
            <div
              key={index}
              className="absolute flex items-center justify-center transform text-[#9b87f5] hover:text-[#b3a4f7] transition-all duration-300"
              style={{
                left: `${randomX}%`,
                top: `${randomY}%`,
                transform: `rotate(${randomRotate}deg) scale(${randomScale})`,
                opacity: 0.7,
                width: '40px', // Slightly smaller size
                height: '40px',
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