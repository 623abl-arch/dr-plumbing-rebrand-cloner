import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary">
                <span className="text-xl font-bold text-primary-foreground">Dr</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary">Dr. Plumbing</h3>
                <p className="text-xs text-muted-foreground">Expert Care</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional plumbing services you can trust. Available 24/7 for emergencies.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services/emergency" className="hover:text-primary transition-colors">Emergency Plumbing</Link></li>
              <li><Link to="/services/drain" className="hover:text-primary transition-colors">Drain Services</Link></li>
              <li><Link to="/services/water-heater" className="hover:text-primary transition-colors">Water Heater</Link></li>
              <li><Link to="/services/water-damage" className="hover:text-primary transition-colors">Water Damage</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">All Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:727-755-7000" className="hover:text-primary transition-colors">
                  (727) 755-7000
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@drplumbing.com" className="hover:text-primary transition-colors">
                  info@drplumbing.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>123 Main Street<br />Your City, ST 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dr. Plumbing. All rights reserved. Licensed & Insured.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
