import { Mail } from "lucide-react";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full space-y-16 animate-fade-in">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight animate-scale-in">
            Михайлов Савелий
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative group animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
          <div className="relative bg-card rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://cdn.poehali.dev/projects/b4e3a9b3-33d0-4ea0-b8ac-005ee07d86ca/files/8d04d0af-5f3e-490a-9b1b-e607c02c48e6.jpg" 
              alt="Коллекция машинок Hot Wheels" 
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a 
            href="mailto:savelijmihaglov2000@gmail.com"
            className="flex items-center gap-3 px-8 py-4 bg-card hover:bg-secondary rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group"
          >
            <Icon name="Mail" className="text-primary group-hover:scale-110 transition-transform duration-300" size={24} />
            <span className="text-foreground font-medium">savelijmihaglov2000@gmail.com</span>
          </a>

          <a 
            href="https://vk.com/micilon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-primary hover:bg-orange-600 text-primary-foreground rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <span className="font-medium">Соц сеть</span>
            <Icon name="ExternalLink" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
