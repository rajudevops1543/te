interface LogoProps {
  className?: string;
  gradient?: string;
}

export default function Logo({ className = "text-2xl font-bold", gradient }: LogoProps) {
  return (
    <div className={`${className} flex items-center space-x-1`}>
      <span className="font-extrabold tracking-wide text-shadow-lg transform hover:scale-105 transition-all duration-1000">
        <span className="text-white">Tech</span>
        <span className={gradient ? `bg-gradient-to-r ${gradient} bg-clip-text text-transparent` : "text-blue-500"}>
          EduVate
        </span>
      </span>
    </div>
  );
}
