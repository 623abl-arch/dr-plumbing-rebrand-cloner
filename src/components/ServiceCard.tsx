import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  image?: string;
}

const ServiceCard = ({ title, description, icon: Icon, link, image }: ServiceCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <OptimizedImage
            src={image}
            alt={`${title} - Professional plumbing service`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
      )}
      <CardContent className="p-6">
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent">
          <Icon className="h-7 w-7 text-accent-foreground" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
        <Button variant="outline" asChild className="w-full">
          <Link to={link}>Learn More</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
