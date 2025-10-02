// import { Heart } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-card border-t border-border/50 py-8">
//       <div className="container mx-auto px-4">
//         <div className="text-center">
//           <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
//             Copyright © 2025{" "}
//             <span className="font-semibold text-foreground">Shahid Khan</span>
//             <span>|</span>
//             <span className="font-semibold text-foreground">Web Developer</span>
//             <span>•</span>
//             <span className="flex items-center gap-1">
//               Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for the web
//             </span>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { Heart, Github, Linkedin, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background Overlay (like hero) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 gradient-hero opacity-95" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-12 text-white">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Shahid Khan</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Passionate Web Developer crafting modern websites & apps using
              React, Tailwind, PHP, SQL, and more. Turning ideas into digital reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition">Portfolio</a></li>
              <li><a href="#about" className="hover:text-white transition">About Me</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-sm text-white/80">
              Email:{" "}
              <a
                href="mailto:shahidkhan.prog@gmail.com"
                className="hover:text-white transition"
              >
                shahidkhan.prog@gmail.com
              </a>
            </p>
            <p className="text-sm text-white/80">
  Phone: <a href="tel:+923449885555" className="hover:underline">+92 344 988 5555</a>
</p>

            <p className="text-sm text-white/80">Location: Swat, Pakistan</p>
            <div className="flex gap-4 mt-3">
              <a href="https://github.com/shahidkhanprog" target="_blank" rel="noreferrer">
                <Github className="w-5 h-5 text-white/70 hover:text-white transition" />
              </a>
              <a href="https://www.linkedin.com/in/shahidkhanprog/" target="_blank" rel="noreferrer">
                <Linkedin className="w-5 h-5 text-white/70 hover:text-white transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <Twitter className="w-5 h-5 text-white/70 hover:text-white transition" />
              </a>
              <a href="https://www.facebook.com/shahidkhan.prog" target="_blank" rel="noreferrer">
                <Facebook className="w-5 h-5 text-white/70 hover:text-white transition" />
              </a>
              <a href="mailto:shahidkhan.prog@gmail.com">
                <Mail className="w-5 h-5 text-white/70 hover:text-white transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6 text-center text-sm text-white/70">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">Shahid Khan</span> • Web Developer  
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Shahid Khan
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
