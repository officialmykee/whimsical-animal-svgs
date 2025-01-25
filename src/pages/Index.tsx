import ChatWallpaper from "@/components/ChatWallpaper";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ChatWallpaper />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Chat</h1>
        <p className="text-gray-600">Start your conversation with a beautiful backdrop!</p>
      </div>
    </div>
  );
};

export default Index;